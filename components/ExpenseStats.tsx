import React from 'react';
import getUserRecord from '@/app/actions/getUserRecord';
import getBestWorstExpense from '@/app/actions/getBestWorstExpense';

const ExpenseStats = async () => {
  try {
    // Fetch both average and range data
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords, error: userError } = userRecordResult;
    const { bestExpense, worstExpense, error: rangeError } = rangeResult;

    // Handle errors
    if (userError) {
      console.error('ExpenseStats - User record error:', userError);
    }
    if (rangeError) {
      console.error('ExpenseStats - Range error:', rangeError);
    }

    // Calculate average expense
    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = validRecord / validDays;

    return (
      <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
            <span className='text-black text-sm sm:text-lg font-bold'>ES</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              Expense Statistics
            </h3>
            <p className='text-xs text-gray-400 mt-0.5'>
              Your spending insights and ranges
            </p>
          </div>
        </div>

        <div className='space-y-3 sm:space-y-4'>
          {/* Average Daily Spending */}
          <div className='bg-black border border-gray-800 rounded-md p-3 sm:p-4'>
            <div className='text-center'>
              <p className='text-xs font-medium text-gray-400 mb-2 tracking-wide uppercase'>
                Average Daily Spending
              </p>
              <div className='text-2xl sm:text-3xl font-bold text-white mb-2'>
                ${averageExpense.toFixed(2)}
              </div>
              <div className='inline-flex items-center gap-2 bg-gray-900 border border-gray-800 text-gray-400 px-2 py-1 rounded-md text-xs font-medium'>
                <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
                Based on {validDays} days with expenses
              </div>
            </div>
          </div>

          {/* Expense Range */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
            {/* Highest Expense */}
            <div className='bg-black border border-gray-800 p-3 sm:p-4 rounded-md hover:border-gray-700'>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-white rounded-md flex items-center justify-center flex-shrink-0'>
                  <span className='text-sm leading-none text-black font-bold'>
                    ↑
                  </span>
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold text-white text-xs mb-0.5'>
                    Highest
                  </h4>
                  <p className='text-lg font-bold text-white'>
                    {bestExpense !== undefined ? `$${bestExpense}` : 'No data'}
                  </p>
                </div>
              </div>
            </div>

            {/* Lowest Expense */}
            <div className='bg-black border border-gray-800 p-3 sm:p-4 rounded-md hover:border-gray-700'>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-white rounded-md flex items-center justify-center flex-shrink-0'>
                  <span className='text-sm leading-none text-black font-bold'>
                    ↓
                  </span>
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold text-white text-xs mb-0.5'>
                    Lowest
                  </h4>
                  <p className='text-lg font-bold text-white'>
                    {worstExpense !== undefined
                      ? `$${worstExpense}`
                      : 'No data'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching expense statistics:', error);
    return (
      <div className='bg-gray-900 border border-gray-800 p-8 rounded-md hover:border-gray-700'>
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-12 h-12 bg-white rounded-md flex items-center justify-center'>
            <span className='text-black text-xl font-bold'>ES</span>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white'>
              Expense Statistics
            </h3>
            <p className='text-sm text-gray-400 mt-1'>
              Your spending insights and ranges
            </p>
          </div>
        </div>
        <div className='bg-black border border-gray-800 p-6 rounded-md'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
              <span className='text-black text-lg font-bold'>!</span>
            </div>
            <p className='text-white font-semibold'>
              Unable to load expense statistics
            </p>
          </div>
          <p className='text-gray-400 text-sm ml-11'>
            Please try again later
          </p>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;
