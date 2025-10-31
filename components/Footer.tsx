'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hdz-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Davor Ivo Stier</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Zastupnik u Europskom parlamentu
              <br />
              <span className="italic">Hrvatske vrijednosti, europska snaga</span>
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <a
                href="https://www.facebook.com/davorstier/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/davor_ivo_stier/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/DavorIvoStier"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/davor-ivo-stier/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-meni" className="text-gray-300 hover:text-white transition-colors">
                  O meni
                </Link>
              </li>
              <li>
                <Link href="/aktivnosti" className="text-gray-300 hover:text-white transition-colors">
                  Aktivnosti
                </Link>
              </li>
              <li>
                <Link href="/govori" className="text-gray-300 hover:text-white transition-colors">
                  Govori
                </Link>
              </li>
              <li>
                <Link href="/mediji" className="text-gray-300 hover:text-white transition-colors">
                  Iz medija
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <strong className="text-white">Bruxelles</strong>
                <br />
                Parlement européen
                <br />
                Bât. ALTIERO SPINELLI
                <br />
                60 rue Wiertz, B-1047
                <br />
                Tel: +32 2 28 45798
              </li>
              <li className="mt-4">
                <strong className="text-white">Strasbourg</strong>
                <br />
                Parlement européen
                <br />
                Bât. LOUISE WEISS
                <br />
                F-67070 Strasbourg
                <br />
                Tel: +33 3 88 1 75798
              </li>
              <li className="mt-4 flex items-center">
                <HiMail className="mr-2" size={16} />
                <a
                  href="mailto:davorivo.stier@europarl.europa.eu"
                  className="hover:text-white transition-colors break-all"
                >
                  davorivo.stier@europarl.europa.eu
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-xl font-bold mb-4">Partneri</h3>
            <div className="space-y-4">
              <a
                href="https://hdz.hr"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-hdz-blue font-bold text-center">HDZ</div>
                <div className="text-xs text-gray-600 text-center">
                  Hrvatska demokratska zajednica
                </div>
              </a>
              <a
                href="https://www.eppgroup.eu/hr"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-hdz-blue font-bold text-center">EPP Group</div>
                <div className="text-xs text-gray-600 text-center">
                  European People's Party
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Davor Ivo Stier. Sva prava pridržana.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/politika-privatnosti" className="hover:text-white transition-colors">
                Politika privatnosti
              </Link>
              <Link href="/uvjeti-koristenja" className="hover:text-white transition-colors">
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
