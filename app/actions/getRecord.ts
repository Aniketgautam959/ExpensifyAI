'use server';
import { db } from '@/lib/db';
import { checkUsers } from '@/lib/checkUsers';
import { Record } from '@/types/Record';

async function getRecord(): Promise<{
  records?: Record[];
  error?: string;
}> {
  try {
    // Get the internal database user (same pattern as addExpenseRecord)
    const user = await checkUsers();
    
    console.log('getRecord - user:', user);

    if (!user) {
      console.log('getRecord - No user found, returning empty records');
      // Instead of returning an error, return empty records for new users
      return { records: [] };
    }

    console.log('getRecord - Fetching records for userId:', user.id);
    const records = await db.record.findMany({
      where: { userId: user.id },
      orderBy: {
        date: 'desc', // Sort by the `date` field in descending order
      },
      take: 10, // Limit the request to 10 records
    });

    console.log('getRecord - Found records:', records.length, records);
    return { records };
  } catch (error) {
    console.error('Error fetching records:', error); // Log the error
    // For new users or database issues, return empty records instead of error
    return { records: [] };
  }
}

export default getRecord;
