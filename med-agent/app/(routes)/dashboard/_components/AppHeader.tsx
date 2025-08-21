'use client';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type MenuOption = {
  id: number;
  name: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { id: 1, name: 'Home', path: '/home' },
  { id: 2, name: 'History', path: '/history' },
  { id: 3, name: 'Pricing', path: '/pricing' },
  { id: 4, name: 'Profile', path: '/profile' },
];

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md md:px-10 lg:px-20 transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="DiagnoAi Logo" width={40} height={40} className="object-contain" />
        <span className="text-xl font-semibold tracking-tight">
          Diagno<span className="text-red-500">A</span>i
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {menuOptions.map((option) => (
          <a
            key={option.id}
            href={option.path}
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
          >
            {option.name}
          </a>
        ))}
      </nav>

      {/* Right Section: UserButton and Menu Icon for Small Screens */}
      <div className="flex items-center gap-3">
        <UserButton />
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:hidden z-10">
          <div className="flex flex-col items-center gap-4 py-4">
            {menuOptions.map((option) => (
              <a
                key={option.id}
                href={option.path}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {option.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default AppHeader;