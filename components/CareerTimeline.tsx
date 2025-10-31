'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const careerData = [
  { year: '2024', role: 'Izabrani zastupnik u Europskom parlamentu' },
  { year: '2024', role: 'Izabrani zastupnik u jedanaestom sazivu Hrvatskog sabora' },
  { year: '2020', role: 'Zastupnik u desetom sazivu Hrvatskog sabora. Potpredsjednik Odbora za međuparlamentarnu suradnju' },
  { year: '2017', role: 'Zastupnik u devetom sazivu Hrvatskog sabora. Član izaslanstva pri Parlamentarnoj skupštini Vijeća Europe' },
  { year: '2016', role: 'Potpredsjednik Vlade i ministar vanjskih i europskih poslova' },
  { year: '2014', role: 'Zastupnik u Europskom parlamentu. Koordinator EPP-a za razvojnu suradnju' },
  { year: '2013', role: 'Zastupnik u Europskom parlamentu. Član Odbora za vanjsku politiku' },
  { year: '2011', role: 'Zastupnik u sedmom sazivu Hrvatskog sabora. Potpredsjednik Odbora za vanjsku politiku' },
  { year: '2009', role: 'Posebni izaslanik predsjednice Vlade za euroatlantsku suradnju' },
  { year: '2008', role: 'Savjetnik u Uredu predsjednika Vlade Republike Hrvatske' },
  { year: '2003', role: 'Savjetnik u Stalnoj misiji RH pri NATO i zamjenik šefa misije' },
  { year: '2002', role: 'Prvi tajnik u Odjelu za međunarodnu sigurnost u Ministarstvu vanjskih poslova' },
  { year: '1998', role: 'Drugi tajnik u Veleposlanstvu RH u Washingtonu' },
  { year: '1997', role: 'Treći tajnik u Odjelu za Sjevernu Ameriku u Ministarstvu vanjskih poslova' },
  { year: '1996', role: 'Mlađi pristav u Odjelu za protokol u Ministarstvu vanjskih poslova' },
];

export default function CareerTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-hdz-blue transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {careerData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Year Badge */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-hdz-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                {item.year}
              </div>

              {/* Content Card */}
              <div
                className={`ml-28 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                }`}
              >
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <p className="text-gray-700 leading-relaxed">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
