'use client';

import { SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='sticky top-0 z-50 bg-black border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300'
              onClick={closeMobileMenu}
            >
              <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-md flex items-center justify-center'>
                <svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' viewBox='0 0 24 24' fill='none'>
                  <rect x='4' y='6' width='16' height='12' rx='2' fill='black' stroke='white' strokeWidth='2' />
                  <rect x='6' y='4' width='8' height='6' rx='1' fill='black' stroke='white' strokeWidth='1.5' />
                  <path d='M18 8c0 1.5-1 2.5-2.5 2.5S13 9.5 13 8' stroke='white' strokeWidth='2' fill='none' />
                  <rect x='16' y='10' width='4' height='2' rx='1' fill='#333' />
                </svg>
              </div>
              <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white'>
                <span className='hidden sm:inline'>ExpensifyAI</span>
                <span className='sm:hidden'>ExpensifyAI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              href='/'
              className='text-gray-400 hover:text-white px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-900'
            >
              Home
            </Link>

            <Link
              href='/#tech-stack'
              className='text-gray-400 hover:text-white px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-900'
            >
              Tech Stack
            </Link>

            <Link
              href='/about'
              className='text-gray-400 hover:text-white px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-900'
            >
              About
            </Link>

            <Link
              href='/contact'
              className='text-gray-400 hover:text-white px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-900'
            >
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className='flex items-center space-x-1 sm:space-x-2'>
            {/* Authentication - Desktop */}
            <div className='hidden sm:block'>
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className='bg-white text-black px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-all duration-200'>
                    <div className='flex items-center gap-1 sm:gap-2'>
                      <span>Sign Up</span>
                      <svg
                        className='w-3 h-3 sm:w-4 sm:h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                    </div>
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className='p-0.5 sm:p-1 rounded-md bg-gray-900 border border-gray-800'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200 rounded-full',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com/Aniketgautam959/next-expense-tracker-ai"
              target="_blank"
              rel="noopener noreferrer"
              className='border border-gray-700 text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 flex items-center gap-2'
            >
              <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              <span className='hidden sm:inline'>GitHub</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden p-1.5 sm:p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 transition-all duration-200'
              aria-label='Toggle mobile menu'
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''
                  }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'max-h-96 opacity-100 pb-3 sm:pb-4'
            : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-gray-900 border border-gray-800 rounded-md mt-2'>
            {/* Mobile Navigation Links */}
            <Link
              href='/'
              className='flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-black text-sm font-medium transition-all duration-200'
              onClick={closeMobileMenu}
            >
              <span>Home</span>
            </Link>
            <Link
              href='/#tech-stack'
              className='flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-black text-sm font-medium transition-all duration-200'
              onClick={closeMobileMenu}
            >
              <span>Tech Stack</span>
            </Link>
            <Link
              href='/about'
              className='flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-black text-sm font-medium transition-all duration-200'
              onClick={closeMobileMenu}
            >
              <span>About</span>
            </Link>
            <Link
              href='/contact'
              className='flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-black text-sm font-medium transition-all duration-200'
              onClick={closeMobileMenu}
            >
              <span>Contact</span>
            </Link>

            {/* Mobile Authentication */}
            <div className='pt-3 border-t border-gray-800'>
              <SignedOut>
                <SignUpButton mode="modal">
                  <button
                    className='w-full bg-white text-black px-4 py-3 rounded-md text-sm font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2'
                    onClick={closeMobileMenu}
                  >
                    <span>Sign Up</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                      />
                    </svg>
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className='flex items-center justify-center p-3 rounded-md bg-black border border-gray-800'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-8 h-8 hover:scale-110 transition-transform duration-200 rounded-full',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>

              {/* GitHub Button - Mobile */}
              <a
                href="https://github.com/Aniketgautam959/next-expense-tracker-ai"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:text-white hover:bg-black text-sm font-medium transition-all duration-200 mt-3'
                onClick={closeMobileMenu}
              >
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
