'use client';

import { useState } from 'react';
import { HiAdjustments } from 'react-icons/hi';

export default function AccessibilityBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [contrast, setContrast] = useState<'normal' | 'high' | 'yellow-blue' | 'black-green'>('normal');

  const handleFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    setFontSize(size);
    document.body.classList.remove('font-normal', 'font-large', 'font-xlarge');
    document.body.classList.add(`font-${size}`);
  };

  const handleContrast = (mode: 'normal' | 'high' | 'yellow-blue' | 'black-green') => {
    setContrast(mode);
    document.body.classList.remove('contrast-normal', 'contrast-high', 'contrast-yellow-blue', 'contrast-black-green');
    document.body.classList.add(`contrast-${mode}`);
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-hdz-blue text-white p-3 rounded-r-lg shadow-lg z-50 hover:bg-opacity-90 transition-all"
        aria-label="Accessibility options"
      >
        <HiAdjustments size={24} />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 ml-12 bg-white rounded-lg shadow-2xl z-50 p-6 w-80">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-hdz-blue">Pristupačnost</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Font Size Controls */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Veličina teksta
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => handleFontSize('normal')}
                className={`px-4 py-2 rounded-md border-2 transition-colors ${
                  fontSize === 'normal'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                A
              </button>
              <button
                onClick={() => handleFontSize('large')}
                className={`px-4 py-2 rounded-md border-2 transition-colors text-lg ${
                  fontSize === 'large'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => handleFontSize('xlarge')}
                className={`px-4 py-2 rounded-md border-2 transition-colors text-xl ${
                  fontSize === 'xlarge'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                A++
              </button>
            </div>
          </div>

          {/* Contrast Controls */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Kontrast
            </label>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleContrast('normal')}
                className={`px-4 py-2 rounded-md border-2 transition-colors text-left ${
                  contrast === 'normal'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                Normalan
              </button>
              <button
                onClick={() => handleContrast('high')}
                className={`px-4 py-2 rounded-md border-2 transition-colors text-left ${
                  contrast === 'high'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                Visoki kontrast (crno-bijeli)
              </button>
              <button
                onClick={() => handleContrast('yellow-blue')}
                className={`px-4 py-2 rounded-md border-2 transition-colors text-left ${
                  contrast === 'yellow-blue'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                Žuto-plavi
              </button>
              <button
                onClick={() => handleContrast('black-green')}
                className={`px-4 py-2 rounded-md border-2 transition-colors text-left ${
                  contrast === 'black-green'
                    ? 'border-hdz-blue bg-hdz-blue text-white'
                    : 'border-gray-300 hover:border-hdz-blue'
                }`}
              >
                Crno-zeleni
              </button>
            </div>
          </div>

          {/* WCAG Notice */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              WCAG 2.1 AA usklađeno
            </p>
          </div>
        </div>
      )}

      {/* Overlay when panel is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
