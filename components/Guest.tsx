import { SignUpButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <div className='w-4 h-4 bg-white rounded-sm flex items-center justify-center'>
              <svg className='w-2.5 h-2.5' viewBox='0 0 24 24' fill='none'>
                <rect x='4' y='6' width='16' height='12' rx='2' fill='black' stroke='white' strokeWidth='2'/>
                <rect x='6' y='4' width='8' height='6' rx='1' fill='black' stroke='white' strokeWidth='1.5'/>
                <path d='M18 8c0 1.5-1 2.5-2.5 2.5S13 9.5 13 8' stroke='white' strokeWidth='2' fill='none'/>
                <rect x='16' y='10' width='4' height='2' rx='1' fill='#333'/>
              </svg>
            </div>
            <span className='hidden sm:inline'>
              AI-Powered Financial Management
            </span>
            <span className='sm:hidden'>AI Financial Management</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
            Welcome to{' '}
            <span className='text-white'>
              ExpensifyAI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0'>
            Founded in 2025, ExpensifyAI helps you track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0'>
            <SignUpButton>
              <button className='group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold hover:bg-gray-200 transition-all duration-200'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Get Started Free
                  <span className='text-lg'>→</span>
                </span>
              </button>
            </SignUpButton>
            <a 
              href="https://github.com/Aniketgautam959/next-expense-tracker-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className='group border border-gray-700 text-white hover:bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Feature highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0'>
            <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center mb-3 sm:mb-4 mx-auto'>
                <span className='text-black text-base sm:text-lg font-bold'>AI</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-white mb-2 text-center'>
                AI Insights
              </h3>
              <p className='text-xs sm:text-sm text-gray-400 text-center'>
                Smart analysis of your spending patterns
              </p>
            </div>
            <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center mb-3 sm:mb-4 mx-auto'>
                <span className='text-black text-base sm:text-lg font-bold'>AC</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-white mb-2 text-center'>
                Auto Categories
              </h3>
              <p className='text-xs sm:text-sm text-gray-400 text-center'>
                Intelligent expense categorization
              </p>
            </div>
            <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md sm:col-span-2 md:col-span-1'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-md flex items-center justify-center mb-3 sm:mb-4 mx-auto'>
                <span className='text-black text-base sm:text-lg font-bold'>SD</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-white mb-2 text-center'>
                Smart Dashboard
              </h3>
              <p className='text-xs sm:text-sm text-gray-400 text-center'>
                Beautiful, intuitive financial overview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='hidden sm:inline'>
                Modern Tech Stack
              </span>
              <span className='sm:hidden'>Tech Stack</span>
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              Built with{' '}
              <span className='text-white'>
                Cutting-Edge
              </span>{' '}
              Technologies
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Powered by the latest technologies for optimal performance, security, and scalability.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Next.js */}
            <div className='group bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-300'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6'>
                  <div className='text-black text-2xl sm:text-3xl font-bold font-mono'>N</div>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  Next.js 15
                </h3>
                <p className='text-sm sm:text-base text-gray-400 mb-3'>
                  Full-Stack Framework
                </p>
                <div className='text-xs text-gray-500 font-medium'>
                  React • SSR • API Routes
                </div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className='group bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-300'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6'>
                  <svg className='w-10 h-10 sm:w-12 sm:h-12' viewBox='0 0 24 24' fill='none'>
                    <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' fill='black'/>
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  Tailwind CSS
                </h3>
                <p className='text-sm sm:text-base text-gray-400 mb-3'>
                  Utility-First CSS
                </p>
                <div className='text-xs text-gray-500 font-medium'>
                  Responsive • Customizable • Fast
                </div>
              </div>
            </div>

            {/* OpenAI API */}
            <div className='group bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-300'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6'>
                  <svg className='w-10 h-10 sm:w-12 sm:h-12' viewBox='0 0 24 24' fill='none'>
                    <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' stroke='black' strokeWidth='2' fill='none'/>
                    <circle cx='12' cy='12' r='3' fill='black'/>
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  OpenAI API
                </h3>
                <p className='text-sm sm:text-base text-gray-400 mb-3'>
                  AI Integration
                </p>
                <div className='text-xs text-gray-500 font-medium'>
                  GPT • Insights • Automation
                </div>
              </div>
            </div>

            {/* Prisma */}
            <div className='group bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-300'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6'>
                  <svg className='w-10 h-10 sm:w-12 sm:h-12' viewBox='0 0 24 24' fill='none'>
                    <path d='M21.807 10.815c-.194-1.17-.7-2.24-1.44-3.1-.74-.86-1.7-1.46-2.78-1.73-.54-.14-1.1-.2-1.66-.18-.56.02-1.11.12-1.64.3-.53.18-1.03.43-1.48.74-.45.31-.85.68-1.19 1.09-.34.41-.61.86-.81 1.34-.2.48-.33.98-.38 1.49-.05.51-.02 1.03.09 1.53.11.5.3.98.56 1.42.26.44.59.83.97 1.16.38.33.81.6 1.27.8.46.2.95.33 1.45.38.5.05 1.01.02 1.51-.09.5-.11.97-.3 1.41-.56.44-.26.83-.59 1.16-.97.33-.38.6-.81.8-1.27.2-.46.33-.95.38-1.45.05-.5.02-1.01-.09-1.51z' fill='black'/>
                    <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' stroke='black' strokeWidth='1.5' fill='none'/>
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  Prisma
                </h3>
                <p className='text-sm sm:text-base text-gray-400 mb-3'>
                  Database ORM
                </p>
                <div className='text-xs text-gray-500 font-medium'>
                  Type-Safe • PostgreSQL • Migrations
                </div>
              </div>
            </div>

            {/* Clerk */}
            <div className='group bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-300'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6'>
                  <svg className='w-10 h-10 sm:w-12 sm:h-12' viewBox='0 0 24 24' fill='none'>
                    <path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' fill='black'/>
                    <path d='M9 12l2 2 4-4' stroke='white' strokeWidth='2' fill='none'/>
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  Clerk
                </h3>
                <p className='text-sm sm:text-base text-gray-400 mb-3'>
                  Authentication
                </p>
                <div className='text-xs text-gray-500 font-medium'>
                  Secure • OAuth • User Management
                </div>
              </div>
            </div>

            {/* Vercel */}
            <div className='group bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-300'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6'>
                  <div className='text-black text-2xl sm:text-3xl font-bold'>▲</div>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  Vercel
                </h3>
                <p className='text-sm sm:text-base text-gray-400 mb-3'>
                  Deployment Platform
                </p>
                <div className='text-xs text-gray-500 font-medium'>
                  Edge • CDN • Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              FAQ
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              Frequently Asked{' '}
              <span className='text-white'>
                Questions
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Everything you need to know about ExpensifyAI and how it can
              transform your financial management.
            </p>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            <div className='group bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center flex-shrink-0'>
                  <span className='text-black text-xs sm:text-sm font-bold'>Q</span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3'>
                    What is ExpensifyAI?
                  </h3>
                  <p className='text-sm sm:text-base text-gray-400 leading-relaxed'>
                    ExpensifyAI is an intelligent financial management
                    tool that uses artificial intelligence to help you monitor
                    your spending patterns, get smart category suggestions, and
                    receive personalized insights to improve your financial
                    health.
                  </p>
                </div>
              </div>
            </div>

            <div className='group bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center flex-shrink-0'>
                  <span className='text-black text-xs sm:text-sm font-bold'>Q</span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3'>
                    How does the AI work?
                  </h3>
                  <p className='text-sm sm:text-base text-gray-400 leading-relaxed'>
                    Our AI analyzes your spending data to automatically
                    categorize expenses, detect patterns, and provide
                    personalized recommendations. You can also ask the AI
                    questions about your spending habits and get instant,
                    intelligent responses.
                  </p>
                </div>
              </div>
            </div>

            <div className='group bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center flex-shrink-0'>
                  <span className='text-black text-xs sm:text-sm font-bold'>Q</span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3'>
                    Is ExpensifyAI free?
                  </h3>
                  <p className='text-sm sm:text-base text-gray-400 leading-relaxed'>
                    Yes, ExpensifyAI offers a free plan with basic AI
                    features including smart categorization and insights.
                    Premium plans are available for advanced AI analytics and
                    unlimited AI interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Testimonials
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              What Our Users{' '}
              <span className='text-white'>
                Say
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Join thousands of satisfied users who have transformed their
              financial habits with ExpensifyAI.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='group bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center'>
                  <span className='text-black text-xs sm:text-sm font-bold'>
                    S
                  </span>
                </div>
                <div>
                  <div className='font-bold text-white text-sm sm:text-base'>
                    Sarah L.
                  </div>
                  <div className='text-xs sm:text-sm text-gray-400'>
                    Verified User
                  </div>
                </div>
              </div>
              <p className='text-sm sm:text-base text-gray-300 leading-relaxed mb-4'>
                &ldquo;ExpensifyAI has completely transformed my
                budgeting. The AI insights are incredibly helpful and I now
                have full control over my finances!&rdquo;
              </p>
              <div className='text-xs sm:text-sm text-gray-500'>
                5/5 Rating
              </div>
            </div>

            <div className='group bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center'>
                  <span className='text-black text-xs sm:text-sm font-bold'>
                    J
                  </span>
                </div>
                <div>
                  <div className='font-bold text-white text-sm sm:text-base'>
                    John D.
                  </div>
                  <div className='text-xs sm:text-sm text-gray-400'>
                    Verified User
                  </div>
                </div>
              </div>
              <p className='text-sm sm:text-base text-gray-300 leading-relaxed mb-4'>
                &ldquo;The AI-powered insights from ExpenseTracker have helped
                me identify and reduce unnecessary spending. The smart
                categorization is amazing!&rdquo;
              </p>
              <div className='text-xs sm:text-sm text-gray-500'>
                5/5 Rating
              </div>
            </div>

            <div className='group bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md hover:border-gray-700 transition-all duration-200 sm:col-span-2 lg:col-span-1'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center'>
                  <span className='text-black text-xs sm:text-sm font-bold'>
                    E
                  </span>
                </div>
                <div>
                  <div className='font-bold text-white text-sm sm:text-base'>
                    Emily R.
                  </div>
                  <div className='text-xs sm:text-sm text-gray-400'>
                    Verified User
                  </div>
                </div>
              </div>
              <p className='text-sm sm:text-base text-gray-300 leading-relaxed mb-4'>
                &ldquo;ExpensifyAI is so intelligent and easy to use.
                The AI recommendations are spot-on and have genuinely improved
                my financial habits!&rdquo;
              </p>
              <div className='text-xs sm:text-sm text-gray-500'>
                5/5 Rating
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
