import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <div className='w-4 h-4 bg-white rounded-sm flex items-center justify-center'>
              <svg className='w-2.5 h-2.5' viewBox='0 0 24 24' fill='none'>
                <rect x='4' y='6' width='16' height='12' rx='2' fill='black' stroke='white' strokeWidth='2' />
                <rect x='6' y='4' width='8' height='6' rx='1' fill='black' stroke='white' strokeWidth='1.5' />
                <path d='M18 8c0 1.5-1 2.5-2.5 2.5S13 9.5 13 8' stroke='white' strokeWidth='2' fill='none' />
                <rect x='16' y='10' width='4' height='2' rx='1' fill='#333' />
              </svg>
            </div>
            <span className='hidden sm:inline'>Powered by AI Technology</span>
            <span className='sm:hidden'>AI Technology</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
            About{' '}
            <span className='text-white'>
              ExpensifyAI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold hover:bg-gray-200 transition-all duration-200'
            >
              Start Your Journey
            </Link>
            <Link
              href='/contact'
              className='border border-gray-700 text-white hover:bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold transition-all duration-200'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
            Our Mission
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2 sm:px-0'>
            Transforming Financial Management with{' '}
            <span className='text-white'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto'>
            At ExpensifyAI, we leverage cutting-edge artificial
            intelligence to revolutionize how individuals achieve financial
            wellness. Our AI analyzes your spending patterns to deliver
            personalized recommendations and actionable insights that lead to
            better budgeting and financial freedom.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gray-900 border border-gray-800 p-6 rounded-md'>
              <div className='text-3xl font-bold text-white mb-2'>
                10K+
              </div>
              <div className='text-gray-400 font-medium'>
                Active Users
              </div>
            </div>
            <div className='bg-gray-900 border border-gray-800 p-6 rounded-md'>
              <div className='text-3xl font-bold text-white mb-2'>
                $2M+
              </div>
              <div className='text-gray-400 font-medium'>
                Money Tracked
              </div>
            </div>
            <div className='bg-gray-900 border border-gray-800 p-6 rounded-md'>
              <div className='text-3xl font-bold text-white mb-2'>
                99%
              </div>
              <div className='text-gray-400 font-medium'>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 bg-black border-b border-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Features
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
              Why Choose{' '}
              <span className='text-white'>
                ExpensifyAI?
              </span>
            </h2>
            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
              Discover the powerful features that make our AI-driven platform
              the smart choice for modern financial management.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-gray-900 border border-gray-800 p-8 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='w-12 h-12 bg-white rounded-md flex items-center justify-center mb-6'>
                <span className='text-black text-lg font-bold'>AI</span>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                AI-Powered Insights
              </h3>
              <p className='text-gray-400 leading-relaxed'>
                Get intelligent analysis of your spending patterns with
                personalized AI recommendations and automated category
                suggestions that learn from your behavior.
              </p>
            </div>

            <div className='bg-gray-900 border border-gray-800 p-8 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='w-12 h-12 bg-white rounded-md flex items-center justify-center mb-6'>
                <span className='text-black text-lg font-bold'>SC</span>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Smart Categorization
              </h3>
              <p className='text-gray-400 leading-relaxed'>
                Let our AI automatically categorize your expenses with 99%
                accuracy and provide tailored recommendations to enhance your
                budget management effortlessly.
              </p>
            </div>

            <div className='bg-gray-900 border border-gray-800 p-8 rounded-md hover:border-gray-700 transition-all duration-200'>
              <div className='w-12 h-12 bg-white rounded-md flex items-center justify-center mb-6'>
                <span className='text-black text-lg font-bold'>ID</span>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Intelligent Dashboard
              </h3>
              <p className='text-gray-400 leading-relaxed'>
                Experience a modern, AI-enhanced interface with real-time
                insights, interactive financial analytics, and beautiful
                visualizations that make sense of your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-8 bg-black border-b border-gray-800'>
        <div className='max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Our Story
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 text-white'>
              Built for the{' '}
              <span className='text-white'>
                Future
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-gray-400 leading-relaxed'>
                ExpensifyAI was founded in 2025 with the vision of creating truly
                intelligent financial management tools. Our team of financial
                experts, data scientists, and technologists came together to
                solve a critical problem: making personal finance management
                smarter, more intuitive, and more effective.
              </p>
              <p className='text-lg text-gray-400 leading-relaxed'>
                Since our launch, we've helped thousands of users achieve
                better budgeting and improve their overall financial health
                through the power of artificial intelligence. Every feature is
                designed with user experience and financial wellness in mind.
              </p>
              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 bg-white rounded-full border-2 border-black'></div>
                  <div className='w-10 h-10 bg-gray-300 rounded-full border-2 border-black'></div>
                  <div className='w-10 h-10 bg-gray-500 rounded-full border-2 border-black'></div>
                </div>
                <div className='text-sm text-gray-400'>
                  <div className='font-semibold'>Trusted by 10,000+ users</div>
                  <div>Join our growing community</div>
                </div>
              </div>
            </div>

            <div className='bg-gray-900 border border-gray-800 p-8 rounded-md'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-white rounded-full'></div>
                  <div className='text-white font-medium'>
                    Founded in 2025
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-white rounded-full'></div>
                  <div className='text-white font-medium'>
                    AI-First Approach
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-white rounded-full'></div>
                  <div className='text-white font-medium'>
                    Global Impact
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-white rounded-full'></div>
                  <div className='text-white font-medium'>
                    User-Centric Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 px-8 bg-black'>
        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-4 py-2 rounded-md text-sm font-medium mb-6'>
            <span className='w-2 h-2 bg-white rounded-full'></span>
            Ready to Transform Your Finances?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-white'>
            Take Control of Your{' '}
            <span className='text-white'>
              Financial Future
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            Join thousands of users who have already transformed their financial
            habits with ExpensifyAI. Start your journey towards smarter
            budgeting today.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/sign-up'
              className='bg-white text-black px-8 py-4 rounded-md font-bold hover:bg-gray-200 transition-all duration-200 flex items-center gap-2'
            >
              Get Started Free
              <span className='text-lg'>→</span>
            </Link>

            <Link
              href='/contact'
              className='border border-gray-700 text-white hover:bg-gray-900 px-8 py-4 rounded-md font-semibold transition-all duration-200 flex items-center gap-2'
            >
              Contact Us
            </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>
                Free
              </div>
              <div className='text-gray-400'>
                No credit card required
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>
                24/7
              </div>
              <div className='text-gray-400'>
                AI-powered support
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>
                Instant
              </div>
              <div className='text-gray-400'>
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
