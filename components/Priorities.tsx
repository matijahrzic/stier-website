'use client';

import ScrollReveal from './ScrollReveal';

const priorities = [
  {
    id: 1,
    title: 'Hrvatska obitelj',
    description: 'Zaštita tradicionalnih vrijednosti, podrška obiteljima i demografska obnova Hrvatske.',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-croatia-red',
  },
  {
    id: 2,
    title: 'Europska sigurnost',
    description: 'Jačanje vanjske politike EU, transatlantske veze i sigurnost europskih granica.',
    icon: '🛡️',
    color: 'bg-hdz-blue',
  },
  {
    id: 3,
    title: 'Gospodarski rast',
    description: 'Podrška hrvatskim poduzetnicima, pristup EU fondovima i održivi razvoj.',
    icon: '📈',
    color: 'bg-green-600',
  },
];

export default function Priorities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {priorities.map((priority, index) => (
        <ScrollReveal
          key={priority.id}
          direction="up"
          delay={index * 0.15}
          scale={true}
          rotate={true}
        >
          <div className="card p-8 hover:scale-105 transition-transform duration-300">
            <div className={`${priority.color} w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6`}>
              {priority.icon}
            </div>
            <h3 className="text-2xl font-bold text-hdz-blue dark:text-blue-400 mb-4 text-center">
              {priority.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              {priority.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
