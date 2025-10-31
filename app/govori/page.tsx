'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityBar from '@/components/AccessibilityBar';
import ScrollToTop from '@/components/ScrollToTop';
import { speechesData, categories } from '@/lib/speeches-data';
import { motion } from 'framer-motion';
import { HiPlay, HiCalendar, HiTag } from 'react-icons/hi';

// Lista Stierovih slika za thumbnails
const speechImages = [
  '/images/SASA5899xs.jpg',
  '/images/SASA5901xs.jpg',
  '/images/SASA5905xs.jpg',
  '/images/SASA5908xs.jpg',
  '/images/SASA5910xs.jpg',
  '/images/SASA5928xs.jpg',
  '/images/SASA5931xs.jpg',
  '/images/SASA5934xs.jpg',
  '/images/SASA5940xs.jpg',
  '/images/SASA5948xs.jpg',
  '/images/SASA5952xs.jpg',
  '/images/SASA5962xs.jpg',
  '/images/SASA5969xs.jpg',
  '/images/IMG_1479.jpeg',
  '/images/IMG_1489.jpeg',
  '/images/IMG_1490.jpeg',
  '/images/IMG_1492.jpeg',
  '/images/IMG_1500.jpeg',
  '/images/IMG_1677.jpeg',
  '/images/IMG_1804.jpeg',
];

export default function SpeechesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Sve');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpeeches = speechesData.filter((speech) => {
    const matchesCategory = selectedCategory === 'Sve' || speech.category === selectedCategory;
    const matchesSearch = speech.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <AccessibilityBar />
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-hdz-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Govori</h1>
            <p className="text-xl text-gray-200">
              Svi govori i nastupi u Europskom parlamentu
            </p>
            <p className="text-lg text-gray-300 mt-2">
              Ukupno: {filteredSpeeches.length} govora
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-bg-light border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Pretraži govore..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-hdz-blue text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Speeches Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpeeches.map((speech, index) => (
              <motion.div
                key={speech.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card p-6 hover:shadow-2xl transition-all group"
              >
                {/* Video Thumbnail */}
                <div className="rounded-lg h-48 flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src={speechImages[index % speechImages.length]}
                    alt={speech.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <HiPlay className="text-white text-6xl opacity-90 drop-shadow-lg" />
                  </div>
                </div>

                {/* Date and Category */}
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-sm text-gray-600">
                    <HiCalendar className="mr-1" />
                    {speech.date}
                  </span>
                  <span className="bg-hdz-blue text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                    <HiTag className="mr-1" size={12} />
                    {speech.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-3 group-hover:text-hdz-blue transition-colors">
                  {speech.title}
                </h3>

                {/* Description */}
                {speech.description && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {speech.description}
                  </p>
                )}

                {/* Watch Button */}
                <button className="btn btn-primary w-full flex items-center justify-center">
                  <HiPlay className="mr-2" />
                  Pogledaj
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredSpeeches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nema govora koji odgovaraju vašem pretraživanju.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
