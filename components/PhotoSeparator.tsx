'use client';

import { motion } from 'framer-motion';

interface PhotoSeparatorProps {
  imagePath: string;
  alt?: string;
  height?: string;
  objectPosition?: string;
}

export default function PhotoSeparator({
  imagePath,
  alt = 'Davor Ivo Stier',
  height = 'h-96',
  objectPosition = 'center top'
}: PhotoSeparatorProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative w-full ${height} overflow-hidden`}
    >
      <img
        src={imagePath}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition, objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-hdz-blue/20 to-transparent" />
    </motion.section>
  );
}
