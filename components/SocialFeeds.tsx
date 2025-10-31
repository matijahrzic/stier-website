'use client';

import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function SocialFeeds() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Twitter/X Feed */}
      <div className="card p-6">
        <div className="flex items-center mb-4">
          <FaXTwitter className="text-hdz-blue mr-3" size={24} />
          <h3 className="text-xl font-bold">X (Twitter)</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-hidden">
          {/* Placeholder for Twitter embed */}
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <FaXTwitter size={48} className="mb-4 opacity-30" />
            <p className="text-center">
              Pratite me na X-u
              <br />
              <a
                href="https://x.com/DavorIvoStier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hdz-blue hover:underline mt-2 inline-block"
              >
                @DavorIvoStier
              </a>
            </p>
            {/* Note: Actual Twitter embed would be added here with Twitter API */}
            <div className="mt-4 text-xs text-gray-400">
              Twitter feed će biti integriran sa Twitter API-jem
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="card p-6">
        <div className="flex items-center mb-4">
          <FaInstagram className="text-hdz-blue mr-3" size={24} />
          <h3 className="text-xl font-bold">Instagram</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-hidden">
          {/* Placeholder for Instagram embed */}
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <FaInstagram size={48} className="mb-4 opacity-30" />
            <p className="text-center">
              Pratite me na Instagramu
              <br />
              <a
                href="https://www.instagram.com/davor_ivo_stier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hdz-blue hover:underline mt-2 inline-block"
              >
                @davor_ivo_stier
              </a>
            </p>
            {/* Note: Actual Instagram embed would be added here with Instagram API */}
            <div className="mt-4 text-xs text-gray-400">
              Instagram feed će biti integriran sa Instagram Basic Display API-jem
            </div>
          </div>
        </div>
      </div>

      {/* Facebook Feed */}
      <div className="card p-6">
        <div className="flex items-center mb-4">
          <FaFacebookF className="text-hdz-blue mr-3" size={24} />
          <h3 className="text-xl font-bold">Facebook</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-hidden">
          {/* Placeholder for Facebook embed */}
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <FaFacebookF size={48} className="mb-4 opacity-30" />
            <p className="text-center">
              Pratite me na Facebooku
              <br />
              <a
                href="https://www.facebook.com/davorstier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hdz-blue hover:underline mt-2 inline-block"
              >
                @davorstier
              </a>
            </p>
            {/* Note: Actual Facebook embed would be added here with Facebook SDK */}
            <div className="mt-4 text-xs text-gray-400">
              Facebook feed će biti integriran sa Facebook SDK-om
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
