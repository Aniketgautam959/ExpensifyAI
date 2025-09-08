'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getUserRecord(): Promise<{
  record?: number;
  daysWithRecords?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // First, find the user by clerkUserId to get the internal userId
    const user = await db.user.findUnique({
      where: { clerkUserId: userId }
    });

    if (!user) {
      return { error: 'User not found in database' };
    }

    const records = await db.record.findMany({
      where: { userId: user.id },
    });

    const record = records.reduce((sum, record) => sum + record.amount, 0);

    // Count the number of days with valid expense records
    const daysWithRecords = records.filter(
      (record) => record.amount > 0
    ).length;

    return { record, daysWithRecords };
  } catch (error) {
    console.error('Error fetching user record:', error); // Log the error
    return { error: 'Database error' };
  }
}

export default getUserRecord;
