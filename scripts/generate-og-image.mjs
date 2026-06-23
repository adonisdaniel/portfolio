import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "..", "public", "og-image.png");
mkdirSync(dirname(outPath), { recursive: true });

const W = 1200;
const H = 630;

const palette = {
  bgTop: { r: 5, g: 25, b: 35 },
  bgBot: { r: 0, g: 53, b: 84 },
  primary: { r: 0, g: 166, b: 251 },
  primaryDark: { r: 0, g: 100, b: 148 },
  text: { r: 255, g: 255, b: 255 },
  muted: { r: 200, g: 220, b: 240 },
};

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgb(${palette.bgTop.r},${palette.bgTop.g},${palette.bgTop.b})"/>
      <stop offset="100%" stop-color="rgb(${palette.bgBot.r},${palette.bgBot.g},${palette.bgBot.b})"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="rgb(${palette.primary.r},${palette.primary.g},${palette.primary.b})"/>
      <stop offset="100%" stop-color="rgb(${palette.primaryDark.r},${palette.primaryDark.g},${palette.primaryDark.b})"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.18" cy="0.2" r="0.5">
      <stop offset="0%" stop-color="rgba(0,166,251,0.35)"/>
      <stop offset="100%" stop-color="rgba(0,166,251,0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.85" cy="0.85" r="0.55">
      <stop offset="0%" stop-color="rgba(0,166,251,0.22)"/>
      <stop offset="100%" stop-color="rgba(0,166,251,0)"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <g fill="white" opacity="0.55">
    <circle cx="120" cy="120" r="1.6"/>
    <circle cx="220" cy="80" r="1.2"/>
    <circle cx="340" cy="160" r="1"/>
    <circle cx="540" cy="90" r="1.6"/>
    <circle cx="780" cy="140" r="1.2"/>
    <circle cx="960" cy="100" r="1.4"/>
    <circle cx="1100" cy="180" r="1"/>
    <circle cx="160" cy="500" r="1.2"/>
    <circle cx="420" cy="560" r="1.6"/>
    <circle cx="700" cy="510" r="1"/>
    <circle cx="980" cy="540" r="1.4"/>
    <circle cx="1140" cy="460" r="1.2"/>
  </g>

  <text x="90" y="180" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="500" letter-spacing="6" fill="rgb(${palette.muted.r},${palette.muted.g},${palette.muted.b})">PORTFOLIO</text>

  <text x="90" y="330" font-family="Inter, system-ui, sans-serif" font-size="92" font-weight="800" fill="white">Adonis Mendoza</text>

  <rect x="90" y="370" width="120" height="6" fill="url(#accent)"/>

  <text x="90" y="450" font-family="Inter, system-ui, sans-serif" font-size="44" font-weight="600" fill="rgb(${palette.primary.r},${palette.primary.g},${palette.primary.b})">Full Stack Developer</text>

  <text x="90" y="510" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="400" fill="rgb(${palette.muted.r},${palette.muted.g},${palette.muted.b})">Vue.js · AdonisJS · Node.js · MongoDB</text>

  <g font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="500" fill="rgb(${palette.muted.r},${palette.muted.g},${palette.muted.b})">
    <text x="90" y="585">github.com/adonisdaniel</text>
  </g>
</svg>
`;

const buf = Buffer.from(svg);

await sharp(buf)
  .png({ compressionLevel: 9 })
  .toFile(outPath);

console.log(`Wrote ${outPath}`);
