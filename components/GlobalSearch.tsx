'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiX } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

const searchableContent: SearchResult[] = [
  // Homepage
  { title: 'Naslovna', description: 'Početna stranica - Hrvatske vrijednosti, europska snaga', url: '/', category: 'Stranice' },

  // O meni
  { title: 'O meni', description: 'Biografija i profesionalni put', url: '/o-meni', category: 'Stranice' },
  { title: 'Obrazovanje', description: 'Političke znanosti, novinarstvo, Diplomatska akademija', url: '/o-meni', category: 'Biografija' },
  { title: 'Jezici', description: 'Španjolski, Hrvatski, Engleski, Talijanski, Francuski', url: '/o-meni', category: 'Biografija' },

  // Aktivnosti
  { title: 'Aktivnosti', description: 'Moj rad u Europskom parlamentu', url: '/aktivnosti', category: 'Stranice' },
  { title: 'Odbor za vanjsku politiku (AFET)', description: 'Član odbora za vanjsku politiku', url: '/aktivnosti', category: 'Odbori' },
  { title: 'EPP koordinator', description: 'Koordinator za razvojnu suradnju', url: '/aktivnosti', category: 'Odbori' },
  { title: 'PSCE - Predsjednik kluba EPP', description: 'Predsjednik kluba u Parlamentarnoj skupštini', url: '/aktivnosti', category: 'Odbori' },

  // Govori
  { title: 'Govori', description: 'Moji govori u Europskom parlamentu', url: '/govori', category: 'Stranice' },

  // Mediji
  { title: 'Iz medija', description: 'Medijski nastupi i objave', url: '/mediji', category: 'Stranice' },

  // Kontakt
  { title: 'Kontakt', description: 'Kontaktirajte me - Brussels i Strasbourg', url: '/kontakt', category: 'Stranice' },

  // Prioriteti
  { title: 'Hrvatska obitelj', description: 'Zaštita tradicionalnih vrijednosti i demografska obnova', url: '/', category: 'Prioriteti' },
  { title: 'Europska sigurnost', description: 'Jačanje vanjske politike EU i sigurnost granica', url: '/', category: 'Prioriteti' },
  { title: 'Gospodarski rast', description: 'Podrška poduzetnicima i pristup EU fondovima', url: '/', category: 'Prioriteti' },

  // Teme
  { title: 'Vanjska politika', description: 'EU vanjska politika i međunarodni odnosi', url: '/aktivnosti', category: 'Teme' },
  { title: 'Proširenje EU', description: 'Integracija zemalja zapadnog Balkana', url: '/aktivnosti', category: 'Teme' },
  { title: 'Razvojna suradnja', description: 'Pomoć najsiromašnijim regijama svijeta', url: '/aktivnosti', category: 'Teme' },
  { title: 'Ljudska prava', description: 'Zaštita temeljnih sloboda i vjerskih prava', url: '/aktivnosti', category: 'Teme' },
  { title: 'HDZ', description: 'Hrvatska demokratska zajednica', url: '/', category: 'Organizacije' },
  { title: 'EPP', description: 'Europska pučka stranka', url: '/', category: 'Organizacije' },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // CMD/CTRL + K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    setResults(filtered.slice(0, 8)); // Max 8 results
    setSelectedIndex(0);
  }, [searchQuery]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (result: SearchResult) => {
    router.push(result.url);
    setIsOpen(false);
    setSearchQuery('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4"
        onClick={() => setIsOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Search Modal */}
        <motion.div
          initial={{ scale: 0.95, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
            <HiSearch className="text-2xl text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pretraži stranicu..."
              className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <HiX className="text-xl text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.trim() === '' ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <HiSearch className="text-5xl mx-auto mb-3 opacity-30" />
                <p className="text-sm">Počni pisati za pretraživanje...</p>
                <p className="text-xs mt-2 opacity-60">
                  Koristi <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">↑</kbd>{' '}
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">↓</kbd> za navigaciju,{' '}
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Enter</kbd> za odabir
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <p>Nema rezultata za "{searchQuery}"</p>
              </div>
            ) : (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(result)}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-hdz-blue text-white'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{result.title}</div>
                        <div
                          className={`text-sm ${
                            index === selectedIndex ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          {result.description}
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          index === selectedIndex
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {result.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex gap-4">
              <span>
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                  ESC
                </kbd>{' '}
                za zatvaranje
              </span>
            </div>
            <span>
              <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                ⌘K
              </kbd>{' '}
              za otvaranje
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
