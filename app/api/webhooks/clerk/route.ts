import { NextRequest } from 'next/server';
import { Webhook } from 'svix';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  // Get the headers
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the body
  const payload = await req.text();

  // Get the headers
  const headerPayload = req.headers;
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the Svix headers for verification
  const svixHeaders = {
    'svix-id': svix_id,
    'svix-timestamp': svix_timestamp,
    'svix-signature': svix_signature,
  };

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: {
    type: string;
    data: {
      id: string;
      email_addresses: Array<{ email_address: string }>;
      first_name?: string;
      last_name?: string;
      image_url?: string;
    };
  };

  // Verify the payload with the headers
  try {
    evt = wh.verify(payload, svixHeaders) as {
      type: string;
      data: {
        id: string;
        email_addresses: Array<{ email_address: string }>;
        first_name?: string;
        last_name?: string;
        image_url?: string;
      };
    };
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    try {
      // Create user in database
      await db.user.create({
        data: {
          clerkUserId: id,
          email: email_addresses[0].email_address,
          name: `${first_name || ''} ${last_name || ''}`.trim() || 'User',
          imageUrl: image_url,
        },
      });

      console.log(`User created: ${email_addresses[0].email_address}`);
    } catch (error) {
      console.error('Error creating user in database:', error);
      return new Response('Error creating user', {
        status: 500,
      });
    }
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    try {
      // Update user in database
      await db.user.update({
        where: { clerkUserId: id },
        data: {
          email: email_addresses[0].email_address,
          name: `${first_name || ''} ${last_name || ''}`.trim() || 'User',
          imageUrl: image_url,
        },
      });

      console.log(`User updated: ${email_addresses[0].email_address}`);
    } catch (error) {
      console.error('Error updating user in database:', error);
      return new Response('Error updating user', {
        status: 500,
      });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    try {
      // Delete user from database
      await db.user.delete({
        where: { clerkUserId: id },
      });

      console.log(`User deleted: ${id}`);
    } catch (error) {
      console.error('Error deleting user from database:', error);
      return new Response('Error deleting user', {
        status: 500,
      });
    }
  }

  return new Response('', { status: 200 });
}
