'use server';

import { checkUsers } from '@/lib/checkUsers';

export async function syncUser(): Promise<{
  success?: boolean;
  error?: string;
  user?: {
    id: string;
    email: string;
    name: string;
    clerkUserId: string;
  };
}> {
  try {
    const user = await checkUsers();
    
    if (!user) {
      return { 
        success: false, 
        error: 'No authenticated user found' 
      };
    }

    return { 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        name: user.name || 'User',
        clerkUserId: user.clerkUserId
      }
    };
  } catch (error) {
    console.error('Error syncing user:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
