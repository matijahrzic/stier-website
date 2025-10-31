'use client';

import { useState, useEffect } from 'react';
import { HiChevronUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-hdz-blue text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all z-40"
          aria-label="Scroll to top"
        >
          <HiChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
