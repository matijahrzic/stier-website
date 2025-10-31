'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityBar from '@/components/AccessibilityBar';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { HiUserGroup, HiDocumentText, HiGlobe, HiLightningBolt } from 'react-icons/hi';
import AnimatedCounter from '@/components/AnimatedCounter';

const committees = [
  {
    id: 1,
    name: 'Odbor za vanjsku politiku (AFET)',
    role: 'Član odbora',
    description: 'Aktivno sudjelujem u radu Odbora za vanjsku politiku, fokusirajući se na vanjske odnose EU-a, posebno s Latinskom Amerikom i Balkanom.',
    icon: '🌍',
  },
  {
    id: 2,
    name: 'Koordinator EPP-a za razvojnu suradnju',
    role: 'Koordinator',
    description: 'Kao koordinator EPP grupe za razvojnu suradnju, vodim političku liniju najjače europske političke grupe u ovom ključnom području.',
    icon: '🤝',
  },
  {
    id: 3,
    name: 'Parlamentarna skupština Vijeća Europe (PSCE)',
    role: 'Predsjednik kluba EPP-a',
    description: 'Od 2024. vodim Klub zastupnika Europske pučke stranke u Parlamentarnoj skupštini Vijeća Europe.',
    icon: '🏛️',
  },
];

const activities = [
  {
    id: 1,
    title: 'Izvješća Komisije o proširenju EU-a',
    category: 'Izvješća',
    date: '2024-2025',
    description: 'Aktivno radim na izvješćima o napretku zemalja kandidatkinja za pristupanje EU-u, s fokusom na Balkan.',
  },
  {
    id: 2,
    title: 'Politička strategija EU-a za Latinsku Ameriku',
    category: 'Vanjska politika',
    date: '2025',
    description: 'Jačanje odnosa EU-a s Latinskom Amerikom kroz nove strateške programe i partnerstva.',
  },
  {
    id: 3,
    title: 'Rezolucije o situaciji na Bliskom istoku',
    category: 'Vanjska politika',
    date: '2024-2025',
    description: 'Zalaganje za mir i stabilnost na Bliskom istoku kroz diplomatske inicijative EU-a.',
  },
  {
    id: 4,
    title: 'Amandmani za jačanje kohezijske politike',
    category: 'Gospodarstvo',
    date: '2024',
    description: 'Predlaganje izmjena koje pomažu hrvatskim regijama u pristupu EU fondovima.',
  },
  {
    id: 5,
    title: 'Podrška Ukrajini',
    category: 'Vanjska politika',
    date: '2022-2025',
    description: 'Kontinuirana financijska i vojna podrška Ukrajini u obrani od ruske agresije.',
  },
  {
    id: 6,
    title: 'Zaštita kršćana u svijetu',
    category: 'Ljudska prava',
    date: '2023-2025',
    description: 'Zalaganje za zaštitu proganjanih kršćana, posebno u Africi i na Bliskom istoku.',
  },
];

const categories = ['Sve', 'Vanjska politika', 'Izvješća', 'Gospodarstvo', 'Ljudska prava'];

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Sve');

  const filteredActivities = activities.filter(
    (activity) => selectedCategory === 'Sve' || activity.category === selectedCategory
  );

  return (
    <main className="min-h-screen">
      <AccessibilityBar />
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-hdz-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Aktivnosti</h1>
            <p className="text-xl text-gray-200">
              Moj rad u Europskom parlamentu i međunarodnim institucijama
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-hdz-blue">
            Odbori i funkcije
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card p-8 hover:shadow-2xl transition-all"
              >
                <div className="text-6xl mb-4 text-center">{committee.icon}</div>
                <h3 className="text-xl font-bold text-hdz-blue mb-2 text-center">
                  {committee.name}
                </h3>
                <div className="bg-bg-light px-3 py-1 rounded-full text-sm font-semibold text-center mb-4 inline-block w-full">
                  {committee.role}
                </div>
                <p className="text-gray-700 leading-relaxed">{committee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="card p-6 text-center">
              <AnimatedCounter
                target={150}
                suffix="+"
                className="text-4xl font-bold text-hdz-blue mb-2"
              />
              <div className="text-gray-600 dark:text-gray-400">Govora u EP-u</div>
            </div>
            <div className="card p-6 text-center">
              <AnimatedCounter
                target={50}
                suffix="+"
                className="text-4xl font-bold text-hdz-blue mb-2"
              />
              <div className="text-gray-600 dark:text-gray-400">Amandmana</div>
            </div>
            <div className="card p-6 text-center">
              <AnimatedCounter
                target={1000}
                suffix="+"
                className="text-4xl font-bold text-hdz-blue mb-2"
              />
              <div className="text-gray-600 dark:text-gray-400">Glasovanja</div>
            </div>
            <div className="card p-6 text-center">
              <AnimatedCounter
                target={10}
                suffix="+"
                className="text-4xl font-bold text-hdz-blue mb-2"
              />
              <div className="text-gray-600 dark:text-gray-400">Godina rada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-hdz-blue">
            Nedavne aktivnosti
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-hdz-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:shadow-2xl transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-hdz-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {activity.category}
                  </span>
                  <span className="text-sm text-gray-600">{activity.date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-hdz-blue transition-colors">
                  {activity.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-hdz-blue">
            Područja fokusa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8 hover:shadow-xl transition-all">
              <HiGlobe className="text-5xl text-hdz-blue mb-4" />
              <h3 className="text-2xl font-bold text-hdz-blue mb-3">
                Vanjska politika EU-a
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Jačanje uloge EU-a na globalnoj sceni, s posebnim naglaskom na odnose s Latinskom Amerikom,
                Balkanom i transatlantske odnose.
              </p>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all">
              <HiUserGroup className="text-5xl text-hdz-blue mb-4" />
              <h3 className="text-2xl font-bold text-hdz-blue mb-3">
                Proširenje EU-a
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rad na integraciji zemalja zapadnog Balkana u EU, uz očuvanje visokih standarda
                i poštovanje vladavine prava.
              </p>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all">
              <HiDocumentText className="text-5xl text-hdz-blue mb-4" />
              <h3 className="text-2xl font-bold text-hdz-blue mb-3">
                Razvojna suradnja
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Kao koordinator EPP-a za razvojnu suradnju, vodim politike koje pomažu najsiromašnijim
                regijama svijeta u razvoju i stabilnosti.
              </p>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all">
              <HiLightningBolt className="text-5xl text-hdz-blue mb-4" />
              <h3 className="text-2xl font-bold text-hdz-blue mb-3">
                Ljudska prava
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Zaštita temeljnih sloboda, vjerskih prava i demokracije u EU-u i širom svijeta,
                s fokusom na proganjene kršćanske zajednice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
