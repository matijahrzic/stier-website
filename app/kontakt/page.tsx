'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityBar from '@/components/AccessibilityBar';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <AccessibilityBar />
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-r from-hdz-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl text-gray-200">Stupite u kontakt sa mnom</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-hdz-blue">Pošaljite poruku</h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ime i prezime</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue"
                      placeholder="Vaše ime"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue"
                      placeholder="vas.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Predmet</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue"
                      placeholder="Predmet poruke"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Poruka</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hdz-blue"
                      placeholder="Vaša poruka..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full text-lg">
                    Pošalji poruku
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Hvala!</h3>
                  <p className="text-gray-700">Vaša poruka je uspješno poslana. Odgovorit ću u najkraćem roku.</p>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-hdz-blue">Kontakt informacije</h2>

              <div className="space-y-6">
                {/* Bruxelles Office */}
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center text-hdz-blue">
                    <HiLocationMarker className="mr-2" />
                    Bruxelles, Belgium
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Parlement européen<br />
                    Bât. ALTIERO SPINELLI, 12E217<br />
                    60 rue Wiertz<br />
                    B-1047 Bruxelles
                  </p>
                  <p className="flex items-center text-gray-700 mt-4">
                    <HiPhone className="mr-2 text-hdz-blue" />
                    +32 2 28 45798
                  </p>
                </div>

                {/* Strasbourg Office */}
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center text-hdz-blue">
                    <HiLocationMarker className="mr-2" />
                    Strasbourg, France
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Parlement européen<br />
                    Bât. LOUISE WEISS, T08045<br />
                    1 avenue du Président Robert Schuman<br />
                    CS 91024, F-67070 Strasbourg Cedex
                  </p>
                  <p className="flex items-center text-gray-700 mt-4">
                    <HiPhone className="mr-2 text-hdz-blue" />
                    +33 3 88 1 75798
                  </p>
                </div>

                {/* Email */}
                <div className="card p-6 bg-hdz-blue text-white">
                  <h3 className="font-bold text-xl mb-4 flex items-center">
                    <HiMail className="mr-2" />
                    Email
                  </h3>
                  <a
                    href="mailto:davorivo.stier@europarl.europa.eu"
                    className="hover:underline break-all"
                  >
                    davorivo.stier@europarl.europa.eu
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
