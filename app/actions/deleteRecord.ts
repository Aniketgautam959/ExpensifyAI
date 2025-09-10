'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { checkUsers } from '@/lib/checkUsers';
import { revalidatePath } from 'next/cache';

async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return { error: 'User not found' };
  }

  try {
    console.log('deleteRecord - Starting deletion for recordId:', recordId);
    
    // Find or get user in our database
    const user = await checkUsers();
    console.log('deleteRecord - User found:', user?.id);

    if (!user) {
      console.log('deleteRecord - No user found in database');
      return { error: 'User not found in database. Please sign up again.' };
    }

    // First, check if the record exists and belongs to the user
    console.log('deleteRecord - Checking if record exists for userId:', user.id);
    const existingRecord = await db.record.findFirst({
      where: {
        id: recordId,
        userId: user.id,
      },
    });

    if (!existingRecord) {
      console.log('deleteRecord - Record not found or does not belong to user');
      return { error: 'Record not found or you do not have permission to delete this record.' };
    }

    console.log('deleteRecord - Record found, proceeding with deletion');
    const deletedRecord = await db.record.delete({
      where: {
        id: recordId,
      },
    });

    console.log('deleteRecord - Successfully deleted record:', deletedRecord);
    revalidatePath('/');
    console.log('deleteRecord - Revalidated path');

    return { message: 'Record deleted successfully' };
  } catch (error) {
    console.error('Error deleting record:', error); // Log the error
    return { error: 'Database error: ' + (error as Error).message };
  }
}

export default deleteRecord;
