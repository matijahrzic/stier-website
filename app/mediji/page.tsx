'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityBar from '@/components/AccessibilityBar';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { HiNewspaper, HiExternalLink, HiCalendar } from 'react-icons/hi';

// Lista Stierovih slika za thumbnails
const mediaImages = [
  '/images/24-10-09_Stier_portraits_1.jpg',
  '/images/24-10-09_Stier_portraits_3.jpg',
  '/images/24-10-09_Stier_portraits_10.jpg',
  '/images/24-10-09_Stier_portraits_15.jpg',
  '/images/24-10-09_Stier_portraits_20.jpg',
  '/images/24-10-09_Stier_portraits_26.jpg',
  '/images/24-10-09_Stier_portraits_30.jpg',
  '/images/IMG_1479.jpeg',
  '/images/IMG_1489.jpeg',
  '/images/IMG_1490.jpeg',
  '/images/IMG_1492.jpeg',
  '/images/IMG_1500.jpeg',
];

// Sample media data - first 12 from research
const mediaData = [
  { id: 1, date: '14.10.2025', title: 'N1 – Davor Ivo Stier: Nije slučajno da su u Egiptu bili Giorgia Meloni i Emmanuel Macron', source: 'N1', category: 'Vanjska politika' },
  { id: 2, date: '12.10.2025', title: 'Direktno – Stier nije mogao šutjeti, zagrmio usred HRT-a', source: 'Direktno', category: 'Hrvatska politika' },
  { id: 3, date: '11.10.2025', title: 'Dnevnik.hr – Stier: "Europa mora ponovno otkriti svoje prirodne saveznike..."', source: 'Dnevnik.hr', category: 'EU politika' },
  { id: 4, date: '10.10.2025', title: 'Klix.ba – Davor Ivo Stier o srpskom svjetu i izbornom zakonu', source: 'Klix.ba', category: 'Balkan' },
  { id: 5, date: '09.10.2025', title: 'Otvoreno – Prva faza prekida vatre na Bliskom istoku', source: 'Otvoreno', category: 'Vanjska politika' },
  { id: 6, date: '09.10.2025', title: 'Europa mora biti brža ili će je Kina istisnuti iz Latinske Amerike', source: '24 sata', category: 'Geopolitika' },
  { id: 7, date: '30.09.2025', title: 'Film o židovskoj obitelji iz Zagreba u EU parlamentu', source: 'Index.hr', category: 'Kultura' },
  { id: 8, date: '18.09.2025', title: 'Stier političarima u BiH: Vrijeme vam istječe', source: 'Index.hr', category: 'Balkan' },
  { id: 9, date: '08.06.2025', title: 'Rat i nesigurnost jačaju povjerenje u EU', source: 'HRT', category: 'EU politika' },
  { id: 10, date: '12.06.2025', title: 'U EP-u citiran Balašević', source: 'Večernji', category: 'Kultura' },
  { id: 11, date: '19.07.2025', title: 'Najviše hrvatskih eurozastupnika u Odboru za vanjsku politiku', source: 'Nacional', category: 'Hrvatska politika' },
  { id: 12, date: '05.06.2025', title: 'Stier: Evropa ne može u sukob sa vlastitom istorijom', source: 'Vijesti.ba', category: 'EU politika' },
];

const sources = ['Sve', 'N1', 'Index.hr', 'HRT', 'Večernji', '24 sata', 'Dnevnik.hr', 'Klix.ba'];

export default function MediaPage() {
  const [selectedSource, setSelectedSource] = useState('Sve');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedia = mediaData.filter((item) => {
    const matchesSource = selectedSource === 'Sve' || item.source === selectedSource;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSource && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <AccessibilityBar />
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-r from-hdz-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Iz medija</h1>
            <p className="text-xl text-gray-200">Medijski nastupi i objave</p>
            <p className="text-lg text-gray-300 mt-2">Ukupno: {filteredMedia.length}+ objava</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-bg-light border-b">
        <div className="container mx-auto px-4">
          <input
            type="text"
            placeholder="Pretraži vijesti..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue mb-6"
          />
          <div className="flex flex-wrap gap-2">
            {sources.map((source) => (
              <button
                key={source}
                onClick={() => setSelectedSource(source)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedSource === source ? 'bg-hdz-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {source}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card overflow-hidden hover:shadow-2xl transition-all group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={mediaImages[index % mediaImages.length]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-hdz-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="flex items-center text-sm text-gray-600">
                      <HiCalendar className="mr-1" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3 group-hover:text-hdz-blue transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-sm font-semibold text-gray-700 flex items-center">
                      <HiNewspaper className="mr-1" />
                      {item.source}
                    </span>
                    <span className="flex items-center text-hdz-blue font-semibold">
                      Čitaj više
                      <HiExternalLink className="ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
