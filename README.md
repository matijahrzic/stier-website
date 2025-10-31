# Davor Ivo Stier - Službena Web Stranica

Moderna, responsivna web stranica za Davora Ivu Stiera, zastupnika u Europskom parlamentu.

**Slogan:** "Hrvatske vrijednosti, europska snaga"

---

## 🚀 Features

### Stranice
- ✅ **Naslovna stranica** - Hero sekcija, dostignuća slider, prioriteti, najnovije vijesti, social feedovi
- ✅ **O meni** - Biografija, career timeline, jezici, nagrade i priznanja
- ✅ **Govori** - 52 govora sa filterima po kategorijama i pretraživanjem
- ✅ **Iz medija** - 200+ medijskih objava sa filterima
- ✅ **Kontakt** - Kontakt forma i informacije ureda (Bruxelles, Strasbourg)

### Moderne Funkcionalnosti
- 🎨 **Accessibility Features** - Font sizing (A/A+/A++), kontrast modeovi (WCAG 2.1 AA compliant)
- 📱 **Full Responsive Design** - Mobile, tablet, desktop optimizirano
- ⚡ **Performance Optimizacije** - Lazy loading, code splitting, image optimization
- 🌍 **Multilingval Ready** - Spreman za HR/EN verzije
- 🎬 **Animacije** - Framer Motion smooth transitions
- 📧 **Newsletter Popup** - Sa EmailJS integracijom (ready)
- ⬆️ **Scroll to Top** - Floating button
- 🔍 **Search Functionality** - Pretraživanje govora i medija
- 📊 **Analytics Ready** - Plausible Analytics (privacy-friendly)

### Design
- 🇭🇷 **Hrvatska domoljubna tema** - HDZ plava (#003D7A), Hrvatska crvena (#FF0000)
- ♟️ **Šahovnica pattern** - Suptilni watermark
- 🎯 **Clean & Modern** - Profesionalan izgled
- 🏛️ **HDZ + EPP Branding** - Logotipi i boje

---

## 🛠️ Tehnologije

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons (HeroIcons, FontAwesome 6)
- **Forms:** EmailJS (ready for integration)
- **Analytics:** Plausible (privacy-friendly, no cookies)

---

## 📦 Instalacija i Pokretanje

### Preduvjeti
- Node.js 20.x ili noviji
- npm 9.x ili noviji

### Lokalno pokretanje (Development)

1. **Kloniraj ili preuzmi projekt:**
   ```bash
   cd stier-website
   ```

2. **Instaliraj dependencies:**
   ```bash
   npm install
   ```

3. **Pokreni development server:**
   ```bash
   npm run dev
   ```

4. **Otvori browser:**
   ```
   http://localhost:3000
   ```

   Stranica će se automatski osvježavati kod promjena (hot reload).

---

## 🏗️ Production Build

### Build za deployment

```bash
npm run build
```

Ova komanda kreira optimizirani production build u `.next` folderu.

### Testiranje production builda lokalno

```bash
npm run build
npm start
```

Otvori `http://localhost:3000` da vidiš production verziju.

---

## 🌐 Deployment

### Opcija 1: Tradicionalni Hosting (cPanel, DirectAdmin, itd.)

1. **Build projekta:**
   ```bash
   npm run build
   ```

2. **Export static files (ako hosting ne podržava Node.js):**

   Dodaj u `next.config.js`:
   ```js
   module.exports = {
     output: 'export',
     // ... ostale opcije
   }
   ```

   Zatim:
   ```bash
   npm run build
   ```

   Ovo kreira `out` folder sa static HTML/CSS/JS datotekama.

3. **Upload:**
   - Upload `out` folder (ili `.next` + `node_modules` + `package.json` za Node.js hosting)
   - Postavi entry point na `npm start` (za Node.js hosting)

### Opcija 2: Vercel (Najlakše - besplatno)

1. Push kod na GitHub/GitLab
2. Idi na [vercel.com](https://vercel.com)
3. Import repository
4. Deploy - gotovo!

### Opcija 3: Netlify

1. Push kod na GitHub
2. Idi na [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Opcija 4: VPS (Linux server)

```bash
# Install Node.js i npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Upload projekta
scp -r stier-website user@your-server:/var/www/

# Na serveru
cd /var/www/stier-website
npm install
npm run build

# Setup PM2 za process management
npm install -g pm2
pm2 start npm --name "stier-website" -- start
pm2 save
pm2 startup

# Setup nginx kao reverse proxy
# ... nginx config
```

---

## 📁 Struktura Projekta

```
stier-website/
├── app/                      # Next.js App Router stranice
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Naslovna stranica
│   ├── o-meni/             # O meni stranica
│   ├── govori/             # Govori stranica
│   ├── mediji/             # Iz medija stranica
│   ├── kontakt/            # Kontakt stranica
│   └── globals.css         # Global styles
├── components/              # React komponente
│   ├── Header.tsx          # Navigacija
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero sekcija
│   ├── AccessibilityBar.tsx # Accessibility features
│   ├── AchievementsSlider.tsx
│   ├── Priorities.tsx
│   ├── LatestNews.tsx
│   ├── SocialFeeds.tsx
│   ├── NewsletterPopup.tsx
│   ├── ScrollToTop.tsx
│   ├── BiographyHero.tsx
│   ├── CareerTimeline.tsx
│   ├── Languages.tsx
│   └── Awards.tsx
├── lib/                     # Data i utility functions
│   └── speeches-data.ts    # 52 govora data
├── public/                  # Static assets
│   └── images/             # Slike
├── tailwind.config.ts      # Tailwind konfiguracija
├── next.config.js          # Next.js konfiguracija
├── tsconfig.json           # TypeScript konfiguracija
└── package.json            # Dependencies

```

---

## 🎨 Customizacija

### Boje

Editiraj `tailwind.config.ts`:

```typescript
colors: {
  'hdz-blue': '#003D7A',
  'croatia-red': '#FF0000',
  'croatia-white': '#FFFFFF',
  'text-dark': '#1F2937',
  'bg-light': '#F9FAFB',
}
```

### Sadržaj

- **Govori:** `lib/speeches-data.ts`
- **Vijesti (homepage):** `components/LatestNews.tsx`
- **Biografija:** `app/o-meni/page.tsx`

### Dodavanje slika

1. Dodaj slike u `public/images/`
2. Koristi Next.js Image komponentu:
   ```tsx
   import Image from 'next/image';
   <Image src="/images/hero-background.jpg" alt="..." width={1920} height={1080} />
   ```

---

## 🔧 Konfiguracija

### EmailJS (Newsletter & Contact Form)

1. Registriraj se na [emailjs.com](https://www.emailjs.com/)
2. Kreiraj email service i template
3. Dodaj `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   ```

4. Update `components/NewsletterPopup.tsx` i `app/kontakt/page.tsx` sa EmailJS kodom

### Google Analytics / Plausible

Dodaj tracking kod u `app/layout.tsx`

---

## 📷 Slike - TODO

**VAŽNO:** Zamijeni placeholder slike sa pravim slikama sa www.stier.hr:

- [ ] `/public/images/hero-background.jpg` - Hero pozadinska slika
- [ ] Profilna slika za "O meni" stranicu
- [ ] HDZ i EPP logotipi
- [ ] Fotografije za galeriju (ako se doda)

---

## 🌍 Multilingvalnost (HR/EN)

Projekt je spreman za multilingvalnost. Za implementaciju:

1. Instaliraj `next-intl` ili `next-i18next`
2. Kreiraj `messages/hr.json` i `messages/en.json`
3. Update komponente sa translation keys

---

## ✅ Checklist prije Deploya

- [ ] Zamijeni sve placeholder slike sa pravim slikama
- [ ] Dodaj prave YouTube video linkove za govore
- [ ] Setup EmailJS za newsletter i kontakt formu
- [ ] Dodaj Google Analytics / Plausible tracking
- [ ] Testiranje na mobilnim uređajima
- [ ] Testiranje accessibility features
- [ ] Provjeravanje svih linkova
- [ ] SEO optimizacija (meta tags, Open Graph)
- [ ] Setup custom domena (www.stier.hr)
- [ ] SSL certifikat
- [ ] Backup plan

---

## 📞 Kontakt & Podrška

Za pitanja ili podršku kontaktirajte developera ili pogledajte dokumentaciju:

- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion/)

---

## 📝 Licenca

© 2025 Davor Ivo Stier. Sva prava pridržana.

---

**🇭🇷 Hrvatske vrijednosti, europska snaga 🇪🇺**
