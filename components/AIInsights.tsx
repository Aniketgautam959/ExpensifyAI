'use client';

import { useState, useEffect } from 'react';
import { getAIInsights } from '@/app/actions/getAIInsights';
import { generateInsightAnswer } from '@/app/actions/generateInsightAnswer';

interface InsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

const AIInsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);

  const loadInsights = async () => {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('AIInsights: Failed to load AI insights:', error);
      setInsights([
        {
          id: 'fallback-1',
          type: 'info',
          title: 'AI Temporarily Unavailable',
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: 'Try again later',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async (insight: InsightData) => {
    if (!insight.action) return;

    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }

    setAiAnswers((prev) => [
      ...prev,
      {
        insightId: insight.id,
        answer: '',
        isLoading: true,
      },
    ]);

    try {
      const question = `${insight.title}: ${insight.action}`;
      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id ? { ...a, answer, isLoading: false } : a
        )
      );
    } catch (error) {
      console.error('Failed to generate AI answer:', error);
      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id
            ? {
              ...a,
              answer:
                'Sorry, I was unable to generate a detailed answer. Please try again.',
              isLoading: false,
            }
            : a
        )
      );
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Loading...';

    const now = new Date();
    const diffMs = now.getTime() - lastUpdated.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    return lastUpdated.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
            <span className='text-black text-sm sm:text-lg font-bold'>AI</span>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              AI Insights
            </h3>
            <p className='text-xs text-gray-400 mt-0.5'>
              Analyzing your spending patterns
            </p>
          </div>
          <div className='flex items-center gap-1 sm:gap-2'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
            <span className='text-xs sm:text-sm text-gray-400 font-medium hidden sm:block'>
              Analyzing...
            </span>
          </div>
        </div>

        <div className='space-y-3 sm:space-y-4'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='animate-pulse bg-black border border-gray-800 p-3 sm:p-4 rounded-md'
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-md'></div>
                <div className='flex-1 space-y-2'>
                  <div className='h-3 bg-gray-800 rounded-md w-3/4'></div>
                  <div className='h-3 bg-gray-800 rounded-md w-full'></div>
                  <div className='h-3 bg-gray-800 rounded-md w-2/3'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800 text-center'>
          <div className='flex items-center justify-center gap-2 text-sm text-gray-400'>
            <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
            <span className='text-xs sm:text-sm'>
              AI is analyzing your financial patterns...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700'>
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center'>
            <span className='text-black text-sm sm:text-lg font-bold'>AI</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              AI Insights
            </h3>
            <p className='text-xs text-gray-400 mt-0.5'>
              AI financial analysis
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='inline-flex items-center gap-2 bg-black border border-gray-800 text-gray-400 px-2 py-1 rounded-md text-xs font-medium'>
            <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
            <span className='hidden sm:inline'>{formatLastUpdated()}</span>
            <span className='sm:hidden'>
              {formatLastUpdated().includes('ago')
                ? formatLastUpdated().replace(' ago', '')
                : formatLastUpdated()}
            </span>
          </div>
          <button
            onClick={loadInsights}
            className='w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-200 text-black rounded-md flex items-center justify-center transition-all duration-200'
            disabled={isLoading}
          >
            <span className='text-sm font-bold'>↻</span>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4'>
        {insights.map((insight) => {
          const currentAnswer = aiAnswers.find(
            (a) => a.insightId === insight.id
          );

          return (
            <div
              key={insight.id}
              className='relative overflow-hidden rounded-md p-3 sm:p-4 bg-black border border-gray-800 hover:border-gray-700 transition-all duration-200'
            >
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 sm:gap-3 mb-2'>
                    <div className='w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center'>
                      <span className='text-black text-sm sm:text-lg font-bold'>
                        {insight.type === 'warning' ? '!' : insight.type === 'success' ? '✓' : insight.type === 'tip' ? 'T' : 'i'}
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-bold text-white text-sm mb-0.5'>
                        {insight.title}
                      </h4>
                      {insight.confidence && insight.confidence < 0.8 && (
                        <span className='inline-block px-2 py-0.5 bg-gray-800 text-gray-400 rounded-md text-xs font-medium'>
                          Preliminary
                        </span>
                      )}
                    </div>
                  </div>
                  <p className='text-gray-400 text-xs leading-relaxed mb-3'>
                    {insight.message}
                  </p>
                  {insight.action && (
                    <div className='text-left'>
                      <span
                        onClick={() => handleActionClick(insight)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md font-medium text-xs cursor-pointer transition-all duration-200 text-white hover:bg-gray-800 ${currentAnswer ? 'bg-gray-800' : ''
                          }`}
                      >
                        <span>{insight.action}</span>
                        {currentAnswer?.isLoading ? (
                          <div className='w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                        ) : (
                          <span className='text-xs'>
                            {currentAnswer ? '↑' : '→'}
                          </span>
                        )}
                      </span>
                    </div>
                  )}

                  {/* AI Answer Display */}
                  {currentAnswer && (
                    <div className='mt-3 p-3 bg-gray-900 border border-gray-800 rounded-md'>
                      <div className='flex items-start gap-2'>
                        <div className='w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-md flex items-center justify-center flex-shrink-0'>
                          <span className='text-black text-xs font-bold'>AI</span>
                        </div>
                        <div className='flex-1'>
                          <h5 className='font-semibold text-white text-xs mb-1'>
                            AI Answer:
                          </h5>
                          {currentAnswer.isLoading ? (
                            <div className='space-y-1'>
                              <div className='animate-pulse bg-gray-800 h-2 rounded-md w-full'></div>
                              <div className='animate-pulse bg-gray-800 h-2 rounded-md w-3/4'></div>
                              <div className='animate-pulse bg-gray-800 h-2 rounded-md w-1/2'></div>
                            </div>
                          ) : (
                            <p className='text-gray-400 text-xs leading-relaxed'>
                              {currentAnswer.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0'>
          <div className='flex items-center gap-2 text-sm text-gray-400'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 bg-black border border-gray-800 rounded-md flex items-center justify-center'>
              <span className='text-white text-sm font-bold'>AI</span>
            </div>
            <span className='font-medium text-xs'>Powered by AI analysis</span>
          </div>
          <button
            onClick={loadInsights}
            className='px-3 py-1.5 bg-white hover:bg-gray-200 text-black rounded-md font-medium text-xs transition-all duration-200'
          >
            <span className='sm:hidden'>Refresh</span>
            <span className='hidden sm:inline'>Refresh Insights →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
