import fs from 'fs';
import path from 'path';

// SVG string for Magdio Logo matching description:
// "rising blue bar chart with a gold upward arrow, MAGDIO in bold white, and tagline THE AI GROWTH STUDIO"
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" width="500" height="120">
  <defs>
    <linearGradient id="blueBarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#1E4FD8" />
      <stop offset="100%" stop-color="#2F6BFF" />
    </linearGradient>
    <linearGradient id="goldArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F5B82E" />
      <stop offset="100%" stop-color="#FFD166" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Icon: Rising Blue Bar Chart + Gold Upward Arrow -->
  <g transform="translate(10, 15)">
    <!-- Grid lines subtle -->
    <line x1="0" y1="85" x2="85" y2="85" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
    
    <!-- 3 Rising Blue Bars -->
    <rect x="5" y="55" width="18" height="30" rx="4" fill="url(#blueBarGrad)" opacity="0.75" />
    <rect x="30" y="38" width="18" height="47" rx="4" fill="url(#blueBarGrad)" opacity="0.9" />
    <rect x="55" y="18" width="18" height="67" rx="4" fill="url(#blueBarGrad)" />

    <!-- Gold Upward Growth Arrow Trending across top of bars -->
    <path d="M 5 60 L 32 40 L 58 15 L 78 8" fill="none" stroke="url(#goldArrowGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)" />
    <!-- Arrowhead -->
    <path d="M 64 6 L 82 6 L 82 24" fill="none" stroke="url(#goldArrowGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)" />
  </g>

  <!-- Typography -->
  <!-- MAGDIO in bold white -->
  <text x="120" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="52" fill="#FFFFFF" letter-spacing="2">MAGDIO</text>
  
  <!-- Tagline: THE AI GROWTH STUDIO in gold/muted -->
  <text x="122" y="92" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#F5B82E" letter-spacing="4">THE AI GROWTH STUDIO</text>
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0F1F" />
      <stop offset="100%" stop-color="#151D3B" />
    </linearGradient>
    <linearGradient id="blueBarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#1E4FD8" />
      <stop offset="100%" stop-color="#2F6BFF" />
    </linearGradient>
    <linearGradient id="goldArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F5B82E" />
      <stop offset="100%" stop-color="#FFD166" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#bgGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  <g transform="translate(10, 10)">
    <rect x="10" y="50" width="16" height="30" rx="3" fill="url(#blueBarGrad)" opacity="0.8" />
    <rect x="32" y="35" width="16" height="45" rx="3" fill="url(#blueBarGrad)" opacity="0.9" />
    <rect x="54" y="18" width="16" height="62" rx="3" fill="url(#blueBarGrad)" />
    <path d="M 8 58 L 34 38 L 56 16 L 74 10" fill="none" stroke="url(#goldArrowGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 60 8 L 76 8 L 76 24" fill="none" stroke="url(#goldArrowGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
</svg>`;

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public', { recursive: true });
}

fs.writeFileSync('./public/magdio-logo.svg', logoSvg);
fs.writeFileSync('./public/favicon.svg', faviconSvg);
console.log('Created logo and favicon SVGs');
