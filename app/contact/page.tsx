'use client';

const ContactPage = () => {
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full'></span>
            Get in Touch
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
            Contact{' '}
            <span className='text-white'>
              ExpensifyAI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Have questions about AI-powered expense tracking or need help?
            We're here to assist you with intelligent financial management.
          </p>
          <div className='mt-6 sm:mt-8 flex justify-center px-2 sm:px-0'>
            <a
              href='mailto:aniket10bhp@gmail.com'
              className='bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2'
            >
              Send us an Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black border-b border-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Contact Information
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              Multiple Ways to{' '}
              <span className='text-white'>
                Connect
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Choose the most convenient way to reach out to our ExpensifyAI
              support team.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {/* Email Support */}
            <div className='bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-200 text-center'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                <span className='text-black text-lg sm:text-xl font-bold'>EM</span>
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white'>
                Email Support
              </h3>
              <p className='text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed'>
                Get detailed assistance with your questions. We typically
                respond within 24 hours.
              </p>
              <a
                href='mailto:aniket10bhp@gmail.com'
                className='inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal'
              >
                <span className='hidden sm:inline'>
                  aniket10bhp@gmail.com
                </span>
                <span className='sm:hidden'>Email Us</span>
                <span className='text-sm'>→</span>
              </a>
            </div>

            {/* GitHub */}
            <div className='bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-200 text-center'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white'>
                GitHub Repository
              </h3>
              <p className='text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed'>
                Explore the source code, report issues, or contribute to the
                project development.
              </p>
              <a
                href='https://github.com/Aniketgautam959/next-expense-tracker-ai'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm sm:text-base'
              >
                <span className='hidden sm:inline'>View on GitHub</span>
                <span className='sm:hidden'>GitHub</span>
                <span className='text-sm'>→</span>
              </a>
            </div>

            {/* LinkedIn */}
            <div className='bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-md hover:border-gray-700 transition-all duration-200 text-center'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white'>
                LinkedIn
              </h3>
              <p className='text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed'>
                Connect with us professionally and stay updated with our
                latest developments.
              </p>
              <a
                href='https://www.linkedin.com/in/aniket-gautam-883053278/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm sm:text-base'
              >
                <span className='hidden sm:inline'>Connect on LinkedIn</span>
                <span className='sm:hidden'>LinkedIn</span>
                <span className='text-sm'>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours & FAQ Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-gray-900 text-white border border-gray-700 px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Support Information
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              We're Here to{' '}
              <span className='text-white'>
                Help
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center'>
                  <span className='text-black text-xs sm:text-sm font-bold'>SH</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white'>
                  Support Hours
                </h3>
              </div>
              <div className='space-y-2 text-sm sm:text-base text-gray-400'>
                <div className='flex justify-between'>
                  <span>Monday - Friday:</span>
                  <span className='font-medium'>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className='flex justify-between'>
                  <span>Saturday:</span>
                  <span className='font-medium'>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className='flex justify-between'>
                  <span>Sunday:</span>
                  <span className='font-medium'>Closed</span>
                </div>
                <div className='mt-4 p-3 bg-black border border-gray-800 rounded-md'>
                  <p className='text-xs sm:text-sm text-gray-400'>
                    <strong>Email support:</strong> Available 24/7 with
                    responses within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-md'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center'>
                  <span className='text-black text-xs sm:text-sm font-bold'>QH</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-white'>
                  Quick Help
                </h3>
              </div>
              <div className='space-y-3'>
                <div className='p-3 bg-black border border-gray-800 rounded-md'>
                  <h4 className='font-semibold text-white text-xs sm:text-sm mb-1'>
                    Technical Issues
                  </h4>
                  <p className='text-xs text-gray-400'>
                    App not working properly? Check our troubleshooting guide
                    first.
                  </p>
                </div>
                <div className='p-3 bg-black border border-gray-800 rounded-md'>
                  <h4 className='font-semibold text-white text-xs sm:text-sm mb-1'>
                    AI Features
                  </h4>
                  <p className='text-xs text-gray-400'>
                    Questions about AI insights? Our AI documentation has
                    answers.
                  </p>
                </div>
                <div className='p-3 bg-black border border-gray-800 rounded-md'>
                  <h4 className='font-semibold text-white text-xs sm:text-sm mb-1'>
                    Account & Billing
                  </h4>
                  <p className='text-xs text-gray-400'>
                    Account issues or billing questions? Contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
