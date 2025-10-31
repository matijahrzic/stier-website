'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiMail } from 'react-icons/hi';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds or when user scrolls 50%
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletterPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 10000);

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        const hasSeenPopup = localStorage.getItem('newsletterPopupSeen');
        if (!hasSeenPopup) {
          setIsOpen(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = (dontShowAgain = false) => {
    setIsOpen(false);
    if (dontShowAgain) {
      localStorage.setItem('newsletterPopupSeen', 'true');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or your newsletter service
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose(true);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => handleClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => handleClose()}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <HiX size={24} />
            </button>

            {!isSubmitted ? (
              <>
                {/* Icon */}
                <div className="bg-hdz-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiMail size={32} />
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-center mb-4 text-hdz-blue">
                  Prijavite se na Newsletter
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Ostanite informirani o mom radu u Europskom parlamentu i najnovijim vijestima.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Vaša email adresa"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue"
                  />
                  <button
                    type="submit"
                    className="w-full btn btn-primary text-lg"
                  >
                    Pretplatite se
                  </button>
                </form>

                {/* Don't show again */}
                <button
                  onClick={() => handleClose(true)}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center"
                >
                  Ne prikazuj ponovno
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-hdz-blue mb-2">
                  Hvala!
                </h3>
                <p className="text-gray-600">
                  Uspješno ste se prijavili na newsletter.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
