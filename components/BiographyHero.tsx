'use client';

import { motion } from 'framer-motion';

export default function BiographyHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-r from-hdz-blue to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/images/24-10-09_Stier_portraits_1.jpg"
                alt="Davor Ivo Stier"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Davor Ivo Stier</h1>
            <p className="text-2xl mb-4 italic">
              &ldquo;Hrvatske vrijednosti, europska snaga&rdquo;
            </p>
            <p className="text-xl mb-8">
              Zastupnik u Europskom parlamentu
            </p>
            <div className="flex gap-4">
              <div className="bg-white px-6 py-3 rounded-lg">
                <p className="text-hdz-blue font-bold text-xl">HDZ</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg">
                <p className="text-hdz-blue font-bold text-xl">EPP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
