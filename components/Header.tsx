'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('hr');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'Naslovna' },
    { href: '/o-meni', label: 'O meni' },
    { href: '/aktivnosti', label: 'Aktivnosti' },
    { href: '/govori', label: 'Govori' },
    { href: '/mediji', label: 'Iz medija' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'hr' ? 'en' : 'hr');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-2 md:ml-0">
            <div className="relative h-14 w-48 md:h-16 md:w-52 lg:h-20 lg:w-64 transition-all">
              <Image
                src={isScrolled ? '/images/stier-logo-white.png' : '/images/stier-logo-transparent.png'}
                alt="Davor Ivo Stier"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold text-base transition-colors ${
                  isScrolled
                    ? 'text-gray-800 dark:text-gray-200 hover:text-hdz-blue dark:hover:text-blue-400'
                    : 'text-white hover:text-white/80 drop-shadow-md'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Social & Language */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop only */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://www.facebook.com/davorstier/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300 hover:text-hdz-blue dark:hover:text-blue-400' : 'text-white hover:text-white/80'
                }`}
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/davor_ivo_stier/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300 hover:text-hdz-blue dark:hover:text-blue-400' : 'text-white hover:text-white/80'
                }`}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/DavorIvoStier"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300 hover:text-hdz-blue dark:hover:text-blue-400' : 'text-white hover:text-white/80'
                }`}
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/davor-ivo-stier/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300 hover:text-hdz-blue dark:hover:text-blue-400' : 'text-white hover:text-white/80'
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md border transition-colors ${
                isScrolled
                  ? 'border-gray-300 dark:border-gray-600 hover:border-hdz-blue dark:hover:border-blue-400 text-gray-700 dark:text-gray-200'
                  : 'border-white/50 hover:border-white text-white'
              }`}
              aria-label="Change language"
            >
              <span className="font-medium text-sm">
                {currentLang === 'hr' ? '🇭🇷 HR' : '🇬🇧 EN'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-200 hover:text-hdz-blue dark:hover:text-blue-400' : 'text-white hover:text-white/80'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}
      >
        <div className="p-6">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-hdz-blue font-medium text-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-gray-200">
            <a
              href="https://www.facebook.com/davorstier/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-hdz-blue transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/davor_ivo_stier/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-hdz-blue transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/DavorIvoStier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-hdz-blue transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
