'use client';

import { motion } from 'framer-motion';

interface CroatianFlagProps {
  size?: 'small' | 'medium' | 'large';
  position?: 'hero' | 'sticky' | 'inline';
}

export default function CroatianFlag({ size = 'medium', position = 'hero' }: CroatianFlagProps) {
  const dimensions = {
    small: { width: 120, height: 80 },
    medium: { width: 180, height: 120 },
    large: { width: 240, height: 160 },
  };

  const { width, height } = dimensions[size];

  const positionClasses = {
    hero: 'absolute top-8 right-8 z-20',
    sticky: 'fixed bottom-8 right-8 z-50',
    inline: 'relative',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={positionClasses[position]}
      style={{ width, height }}
    >
      <div className="relative w-full h-full shadow-2xl rounded-sm overflow-hidden">
        {/* Croatian flag with wave animation */}
        <svg
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
        >
          <defs>
            {/* Wave pattern for realistic flag movement */}
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0,50 Q25,45 50,50 T100,50"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>

            {/* Animated wave distortion */}
            <filter id="wave-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.03"
                numOctaves="3"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  from="0.01 0.03"
                  to="0.02 0.04"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            {/* Checkerboard pattern - Croatian coat of arms simplified */}
            <pattern id="checkerboard" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="25" height="25" fill="#DC143C" />
              <rect x="25" width="25" height="25" fill="white" />
              <rect y="25" width="25" height="25" fill="white" />
              <rect x="25" y="25" width="25" height="25" fill="#DC143C" />
            </pattern>
          </defs>

          {/* Flag base with wave filter */}
          <g filter="url(#wave-filter)">
            {/* Red stripe */}
            <rect width="900" height="200" fill="#DC143C" />

            {/* White stripe with checkerboard in center */}
            <rect y="200" width="900" height="200" fill="white" />

            {/* Blue stripe */}
            <rect y="400" width="900" height="200" fill="#0093DD" />

            {/* Central checkerboard coat of arms */}
            <g transform="translate(350, 150)">
              <rect
                width="200"
                height="300"
                fill="url(#checkerboard)"
                opacity="0.95"
                rx="10"
              />
              {/* Shield border */}
              <rect
                width="200"
                height="300"
                fill="none"
                stroke="#003D7A"
                strokeWidth="4"
                rx="10"
              />
            </g>
          </g>

          {/* Subtle wave overlay */}
          <rect width="900" height="600" fill="url(#wave)" opacity="0.3" />

          {/* Edge shadow for depth */}
          <rect
            width="900"
            height="600"
            fill="url(#gradient-shadow)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradient-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" stopOpacity="0.3" />
              <stop offset="50%" stopColor="black" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* CSS wave animation overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="wave-animation"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(0) scaleX(1);
          }
          25% {
            transform: translateX(2px) scaleX(0.98);
          }
          50% {
            transform: translateX(0) scaleX(1.01);
          }
          75% {
            transform: translateX(-2px) scaleX(0.99);
          }
        }

        .wave-animation {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          animation: wave 2.5s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}
