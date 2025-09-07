'use server';
import { db } from '@/lib/db';
import { checkUsers } from '@/lib/checkUsers';
import { Record } from '@/types/Record';

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  try {
    // Get the internal database user (same pattern as addExpenseRecord)
    const user = await checkUsers();
    
    console.log('getRecords - user:', user);

    if (!user) {
      console.log('getRecords - No user found');
      return { error: 'User not found' };
    }

    console.log('getRecords - Fetching records for userId:', user.id);
    const records = await db.record.findMany({
      where: { userId: user.id },
      orderBy: {
        date: 'desc', // Sort by the `date` field in descending order
      },
      take: 10, // Limit the request to 10 records
    });

    console.log('getRecords - Found records:', records.length, records);
    return { records };
  } catch (error) {
    console.error('Error fetching records:', error); // Log the error
    return { error: 'Database error' };
  }
}

export default getRecords;
