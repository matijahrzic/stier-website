'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryPhotos = [
  '/images/SASA5901xs.jpg',
  '/images/SASA5905xs.jpg',
  '/images/SASA5908xs.jpg',
  '/images/SASA5910xs.jpg',
  '/images/SASA5928xs.jpg',
  '/images/SASA5931xs.jpg',
  '/images/IMG_1489.jpeg',
  '/images/IMG_1677.jpeg',
  '/images/IMG_1804.jpeg',
];

export default function PhotoGallery() {
  return (
    <section id="galerija" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-hdz-blue"
        >
          U radu za Hrvatsku i Europu
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
            >
              <Image
                src={photo}
                alt={`Davor Ivo Stier - ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hdz-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
