'use client';
import { useRef, useState } from 'react';
import addExpenseRecord from '@/app/actions/addExpenseRecord';
import { suggestCategory } from '@/app/actions/suggestCategory';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(50);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isCategorizingAI, setIsCategorizingAI] = useState(false);

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('category', category);

    const { error } = await addExpenseRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Expense record added successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(50);
      setCategory('');
      setDescription('');
    }

    setIsLoading(false);
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setAlertMessage('Please enter a description first');
      setAlertType('error');
      return;
    }

    setIsCategorizingAI(true);
    setAlertMessage(null);

    try {
      const result = await suggestCategory(description);
      if (result.error) {
        setAlertMessage(`AI Suggestion: ${result.error}`);
        setAlertType('error');
      } else {
        setCategory(result.category);
        setAlertMessage(`AI suggested category: ${result.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI category suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

  return (
    <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
      <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
          <span className='text-black text-sm sm:text-lg font-bold'>AE</span>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-white leading-tight'>
            Add New Expense
          </h3>
          <p className='text-xs text-gray-400 mt-0.5'>
            Track your spending with AI assistance
          </p>
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className='space-y-6 sm:space-y-8'
      >
        {/* Expense Description and Date */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-black border border-gray-800 rounded-md'>
          {/* Expense Description */}
          <div className='space-y-1.5'>
            <label
              htmlFor='text'
              className='flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Expense Description
            </label>
            <div className='relative'>
              <input
                type='text'
                id='text'
                name='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full pl-3 pr-12 sm:pr-14 py-2.5 bg-gray-900 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-white/30 focus:border-white text-white placeholder-gray-500 text-sm transition-all duration-200'
                placeholder='Coffee, groceries, gas...'
                required
              />
              <button
                type='button'
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className='absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-7 bg-white hover:bg-gray-200 disabled:bg-gray-700 text-black rounded-md text-xs font-medium flex items-center justify-center transition-all duration-200'
                title='AI Category Suggestion'
              >
                {isCategorizingAI ? (
                  <div className='w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin'></div>
                ) : (
                  <span className='text-xs font-bold'>AI</span>
                )}
              </button>
            </div>
            {isCategorizingAI && (
              <div className='flex items-center gap-2 text-xs text-gray-400'>
                <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
                AI is analyzing your description...
              </div>
            )}
          </div>

          {/* Expense Date */}
          <div className='space-y-1.5'>
            <label
              htmlFor='date'
              className='flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Expense Date
            </label>
            <input
              type='date'
              name='date'
              id='date'
              className='w-full px-3 py-2.5 bg-gray-900 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-white/30 focus:border-white text-white text-sm transition-all duration-200'
              required
              onFocus={(e) => e.target.showPicker()}
            />
          </div>
        </div>

        {/* Category Selection and Amount */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-black border border-gray-800 rounded-md'>
          {/* Category Selection */}
          <div className='space-y-1.5'>
            <label
              htmlFor='category'
              className='flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Category
              <span className='text-xs text-gray-500 ml-2 font-normal hidden sm:inline'>
                Use the AI button above for suggestions
              </span>
            </label>
            <select
              id='category'
              name='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full px-3 py-2.5 bg-gray-900 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-white/30 focus:border-white text-white cursor-pointer text-sm transition-all duration-200'
              required
            >
              <option
                value=''
                disabled
                className='text-gray-500'
              >
                Select category...
              </option>
              <option value='Food' className='text-white'>
                Food & Dining
              </option>
              <option
                value='Transportation'
                className='text-white'
              >
                Transportation
              </option>
              <option
                value='Shopping'
                className='text-white'
              >
                Shopping
              </option>
              <option
                value='Entertainment'
                className='text-white'
              >
                Entertainment
              </option>
              <option
                value='Bills'
                className='text-white'
              >
                Bills & Utilities
              </option>
              <option
                value='Healthcare'
                className='text-white'
              >
                Healthcare
              </option>
              <option
                value='Other'
                className='text-white'
              >
                Other
              </option>
            </select>
          </div>

          {/* Amount */}
          <div className='space-y-1.5'>
            <label
              htmlFor='amount'
              className='flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Amount
              <span className='text-xs text-gray-500 ml-2 font-normal hidden sm:inline'>
                Enter amount between $0 and $1,000
              </span>
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm'>
                $
              </span>
              <input
                type='number'
                name='amount'
                id='amount'
                min='0'
                max='1000'
                step='0.01'
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className='w-full pl-6 pr-3 py-2.5 bg-gray-900 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-white/30 focus:border-white text-white placeholder-gray-500 text-sm font-semibold transition-all duration-200'
                placeholder='0.00'
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-white hover:bg-gray-200 text-black px-4 py-3 sm:px-5 sm:py-4 rounded-md font-semibold transition-all duration-300 text-sm sm:text-base'
          disabled={isLoading}
        >
          <div className='relative flex items-center justify-center gap-2'>
            {isLoading ? (
              <>
                <div className='w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin'></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Add Expense</span>
              </>
            )}
          </div>
        </button>
      </form>

      {/* Alert Message */}
      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-md border ${alertType === 'success'
              ? 'bg-black border-white text-white'
              : 'bg-black border-gray-700 text-gray-300'
            }`}
        >
          <div className='flex items-center gap-2'>
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center ${alertType === 'success'
                  ? 'bg-white'
                  : 'bg-gray-800'
                }`}
            >
              <span className='text-sm font-bold'>
                {alertType === 'success' ? '✓' : '!'}
              </span>
            </div>
            <p className='font-medium text-sm'>{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecord;
