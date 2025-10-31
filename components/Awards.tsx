'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const awards = [
  {
    id: 1,
    title: 'Red kneza Branimira',
    description: 'Hrvatsko državno odličje',
    icon: '🏅',
    color: 'bg-croatia-red',
  },
  {
    id: 2,
    title: 'Križ Konstantina velikog',
    description: 'Međunarodno priznanje',
    icon: '✝️',
    color: 'bg-hdz-blue',
  },
  {
    id: 3,
    title: 'MEP Award 2015',
    description: 'Nagrada za najboljeg zastupnika u Europskom parlamentu na području razvojne suradnje',
    icon: '🏆',
    color: 'bg-yellow-500',
  },
];

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <h2 className="text-4xl font-bold mb-12 text-center text-hdz-blue">
        Nagrade i priznanja
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="card p-8 text-center hover:scale-105 transition-transform"
          >
            <div className={`${award.color} w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6`}>
              {award.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {award.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
