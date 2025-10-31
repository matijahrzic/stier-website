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
      className="py-8 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          {/* Force 16:9 aspect ratio */}
          <div style={{ paddingTop: '56.25%', position: 'relative' }}>
            <img
              src={imagePath}
              alt={alt}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hdz-blue/20 to-transparent" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
