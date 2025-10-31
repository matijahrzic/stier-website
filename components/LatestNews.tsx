'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi';

// Sample news data - prva 6 vijesti iz istraživanja
const newsData = [
  {
    id: 1,
    title: 'N1 – Davor Ivo Stier: Nije slučajno da su u Egiptu bili Giorgia Meloni i Emmanuel Macron',
    date: '14.10.2025',
    source: 'N1',
    excerpt: 'Geopolitička analiza evropske diplomacije na Bliskom istoku...',
    category: 'Vanjska politika',
    link: '/mediji/n1-egipat-meloni-macron',
  },
  {
    id: 2,
    title: 'Direktno – Stier nije mogao šutjeti, zagrmio usred HRT-a',
    date: '12.10.2025',
    source: 'Direktno',
    excerpt: 'Govor o aktualnim političkim temama u Hrvatskoj...',
    category: 'Hrvatska politika',
    link: '/mediji/direktno-hrt',
  },
  {
    id: 3,
    title: 'Stier: "Europa mora ponovno otkriti svoje prirodne saveznike..."',
    date: '11.10.2025',
    source: 'Dnevnik.hr',
    excerpt: 'O strateškim partnerstvima Europe u svijetu...',
    category: 'EU politika',
    link: '/mediji/dnevnik-saveznici',
  },
  {
    id: 4,
    title: 'Davor Ivo Stier o srpskom svjetu i izbornom zakonu',
    date: '10.10.2025',
    source: 'Klix.ba',
    excerpt: 'Izjava o situaciji u Bosni i Hercegovini...',
    category: 'Balkan',
    link: '/mediji/klix-bih',
  },
  {
    id: 5,
    title: 'Otvoreno – Prva faza prekida vatre na Bliskom istoku',
    date: '09.10.2025',
    source: 'Otvoreno',
    excerpt: 'Analiza mirovnih napora na Bliskom istoku...',
    category: 'Vanjska politika',
    link: '/mediji/otvoreno-bliski-istok',
  },
  {
    id: 6,
    title: 'Europa mora biti brža ili će je Kina istisnuti iz Latinske Amerike',
    date: '09.10.2025',
    source: '24 sata',
    excerpt: 'O strateškoj konkurenciji EU i Kine u Latinskoj Americi...',
    category: 'Geopolitika',
    link: '/mediji/24sata-latinska-amerika',
  },
];

export default function LatestNews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={news.link}>
              <div className="card p-6 h-full hover:shadow-2xl transition-all duration-300 group">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-hdz-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-hdz-blue transition-colors line-clamp-3">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-2">{news.excerpt}</p>

                {/* Source & Read More */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">{news.source}</span>
                  <span className="flex items-center text-hdz-blue font-semibold group-hover:translate-x-1 transition-transform">
                    Čitaj više
                    <HiArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link
          href="/mediji"
          className="btn btn-primary inline-flex items-center text-lg"
        >
          Sve vijesti
          <HiArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  );
}
