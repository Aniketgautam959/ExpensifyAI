import getRecord from '@/app/actions/getRecord';
import BarChart from './BarChart';

const RecordChart = async () => {
  const { records, error } = await getRecord();

  if (error) {
    return (
      <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
            <span className='text-black text-sm sm:text-lg font-bold'>EC</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              Expense Chart
            </h3>
            <p className='text-xs text-gray-400 mt-0.5'>
              Visual representation of your spending
            </p>
          </div>
        </div>
        <div className='bg-black border border-gray-800 p-3 sm:p-4 rounded-md'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-6 h-6 bg-white rounded-md flex items-center justify-center'>
              <span className='text-black text-sm font-bold'>!</span>
            </div>
            <p className='text-white font-semibold text-sm'>
              Error loading chart data
            </p>
          </div>
          <p className='text-gray-400 text-xs ml-8'>{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
            <span className='text-black text-sm sm:text-lg font-bold'>EC</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              Expense Chart
            </h3>
            <p className='text-xs text-gray-400 mt-0.5'>
              Visual representation of your spending
            </p>
          </div>
        </div>
        <div className='text-center py-6 sm:py-8'>
          <div className='w-16 h-16 sm:w-20 sm:h-20 bg-black border border-gray-800 rounded-md flex items-center justify-center mx-auto mb-4'>
            <span className='text-white text-2xl sm:text-3xl font-bold'>ND</span>
          </div>
          <h4 className='text-base sm:text-lg font-bold text-white mb-2'>
            No Data to Display
          </h4>
          <p className='text-gray-400 max-w-md mx-auto leading-relaxed text-sm'>
            Start tracking your expenses to see your spending patterns
            visualized in this chart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
      <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
          <span className='text-black text-sm sm:text-lg font-bold'>EC</span>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-white'>
            Expense Chart
          </h3>
          <p className='text-xs text-gray-400 mt-0.5'>
            Visual representation of your spending
          </p>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
};

export default RecordChart;
