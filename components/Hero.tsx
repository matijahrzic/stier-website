'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import ParticleBackground from './ParticleBackground';

const heroImages = [
  '/images/SASA5899xs.jpg',
  '/images/IMG_1489.jpeg',
  '/images/SASA5940xs.jpg',
  '/images/SASA5962xs.jpg',
  '/images/IMG_1677.jpeg',
  '/images/24-10-09_Stier_portraits_1.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('achievements');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-1500"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt="Davor Ivo Stier"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center top',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
        {/* Plavi gradient - tamno lijevo prema svijetlo desno */}
        <div className="absolute inset-0 bg-gradient-to-r from-hdz-blue/95 via-hdz-blue/75 to-hdz-blue/50" />
        {/* Particle Background */}
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Davor Ivo Stier
          </motion.h1>

          {/* Slogan */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-2xl md:text-4xl font-light mb-2 italic">
              Hrvatske vrijednosti
            </p>
            <p className="text-2xl md:text-4xl font-light italic">
              europska snaga
            </p>
          </motion.div>

          {/* Position */}
          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Zastupnik u Europskom parlamentu
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              href="/o-meni"
              className="btn bg-white text-hdz-blue hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Saznajte više
            </Link>
            <Link
              href="/kontakt"
              className="btn bg-croatia-red text-white hover:bg-opacity-90 px-8 py-4 text-lg"
            >
              Kontaktirajte me
            </Link>
          </motion.div>

          {/* Logos - HDZ & EPP */}
          <motion.div
            className="mt-16 flex justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-white px-6 py-3 rounded-lg select-none">
              <span className="text-hdz-blue font-bold text-xl">HDZ</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg select-none">
              <span className="text-hdz-blue font-bold text-xl">EPP</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        aria-label="Scroll to next section"
      >
        <HiChevronDown size={48} />
      </motion.button>

      {/* Checkerboard pattern overlay - subtle */}
      <div className="absolute inset-0 checkerboard-bg opacity-10 z-5" />
    </section>
  );
}
