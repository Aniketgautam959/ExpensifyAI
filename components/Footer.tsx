import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none'>
                  <rect x='4' y='6' width='16' height='12' rx='2' fill='black' stroke='white' strokeWidth='2' />
                  <rect x='6' y='4' width='8' height='6' rx='1' fill='black' stroke='white' strokeWidth='1.5' />
                  <path d='M18 8c0 1.5-1 2.5-2.5 2.5S13 9.5 13 8' stroke='white' strokeWidth='2' fill='none' />
                  <rect x='16' y='10' width='4' height='2' rx='1' fill='#333' />
                </svg>
              </div>
              <h2 className='text-xl font-bold text-white'>
                ExpensifyAI
              </h2>
            </div>
            <p className='text-gray-400 leading-relaxed max-w-sm'>
              Founded in 2025, ExpensifyAI provides intelligent financial management powered by AI. Track your
              expenses, manage your budget, and gain insights into your spending
              patterns.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Quick Links
            </h3>
            <div className='flex flex-col space-y-3'>
              <Link
                href='/'
                className='text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200'
              >
                About
              </Link>
              <Link
                href='/contact'
                className='text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200'
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Features
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-400 text-sm'>
                <div className='w-5 h-5 bg-white rounded-md flex items-center justify-center'>
                  <span className='text-black text-xs font-bold'>AI</span>
                </div>
                AI-Powered Insights
              </div>
              <div className='flex items-center gap-3 text-gray-400 text-sm'>
                <div className='w-5 h-5 bg-white rounded-md flex items-center justify-center'>
                  <span className='text-black text-xs font-bold'>SC</span>
                </div>
                Smart Categorization
              </div>
              <div className='flex items-center gap-3 text-gray-400 text-sm'>
                <div className='w-5 h-5 bg-white rounded-md flex items-center justify-center'>
                  <span className='text-black text-xs font-bold'>AD</span>
                </div>
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gray-800 mb-8'></div>

        {/* Copyright */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} ExpensifyAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
