'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const achievements = [
  {
    id: 1,
    title: 'Predsjednik Kluba EPP u PSCE',
    description: 'Izabran za predsjednika Kluba zastupnika Europske pučke stranke u Parlamentarnoj skupštini Vijeća Europe (2024)',
    icon: '🏛️',
  },
  {
    id: 2,
    title: 'Ministar vanjskih poslova',
    description: 'Potpredsjednik Vlade i ministar vanjskih i europskih poslova Republike Hrvatske (2016)',
    icon: '🌍',
  },
  {
    id: 3,
    title: 'MEP Award 2015',
    description: 'Nagrada za najboljeg zastupnika u Europskom parlamentu na području razvojne suradnje',
    icon: '🏆',
  },
  {
    id: 4,
    title: 'Koordinator EPP-a',
    description: 'Koordinator EPP-a za razvojnu suradnju u Europskom parlamentu',
    icon: '🤝',
  },
];

export default function AchievementsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-hdz-blue">
        Ključna dostignuća
      </h2>

      <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12">
        {/* Slider Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">{achievements[currentIndex].icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-hdz-blue mb-4">
              {achievements[currentIndex].title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {achievements[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-hdz-blue text-white p-2 md:p-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg"
          aria-label="Previous achievement"
        >
          <HiChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-hdz-blue text-white p-2 md:p-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg"
          aria-label="Next achievement"
        >
          <HiChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-hdz-blue w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
