'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="o-meni" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tekst lijevo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-hdz-blue">
              O meni
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Davor Ivo Stier rođen je 1972. godine u Buenos Airesu, Argentina.
                Oženjen je i otac troje djece.
              </p>
              <p>
                Zastupnik je u Europskom parlamentu od 2013. godine, gdje aktivno
                radi na promicanju hrvatskih interesa i europskih vrijednosti.
              </p>
              <p>
                Trenutno je koordinator Europske pučke stranke (EPP) u Odboru za
                vanjske poslove Europskog parlamenta te predsjednik Potpod odbora za
                sigurnost i obranu.
              </p>
              <p>
                Kao dugogodišnji član HDZ-a i jedan od osnivača stranke, Davor Ivo
                Stier je predan radu za bolju Hrvatsku unutar jake i ujedinjene Europe.
              </p>
              <p className="font-semibold text-hdz-blue text-lg mt-6 italic">
                "Hrvatske vrijednosti, europska snaga"
              </p>
            </div>
          </motion.div>

          {/* Fotografija desno */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/24-10-09_Stier_portraits_1.jpg"
              alt="Davor Ivo Stier"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hdz-blue/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
