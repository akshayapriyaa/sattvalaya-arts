# Sattvalaya Arts — Web Platform

The official digital presence for **Sattvalaya Arts**, a premier academy for classical Veena instruction and integrated holistic wellness founded by Rajalakshmi Roshan in 2022. 

This platform is built with a focus on a high-end, "Boutique Editorial" aesthetic, utilizing smooth scroll animations, glassmorphism, and elegant typography to reflect the calm and structured nature of the academy.

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Google Fonts (Jost & Cormorant Garamond)

---

## 🎨 Design System: "Boutique Editorial"

To maintain the premium, museum-like quality of the website, all future developments must adhere to these established UI/UX design tokens:

### Color Palette
* **Backgrounds:** `bg-[#FCFBFA]` (Soft Pearl) — *Primary background, replacing harsh whites.*
* **Secondary Backgrounds:** `bg-[#F8F9FA]` (Soft Gray) and `bg-[#E8EDF5]` (Pastel Slate).
* **Primary Accent:** `text-[#B4C4D9]` / `bg-[#B4C4D9]` (Muted Slate-Blue).
* **Text Colors:** `text-slate-900` (Headings) and `text-slate-600` (Body). 
* *Note: Strictly avoid pure black, dark mode, or bright/harsh primary colors.*

### Typography & "Font Pairing"
We use a specific font-pairing strategy for editorial emphasis. Main headings utilize a clean sans-serif, while emphasis words use an elegant, light, italicized serif. 
* **Example Code:** `<h1>Welcome to <span className="font-serif italic text-slate-500 font-light">Sattvalaya</span></h1>`

### Shapes & Textures
* **Border Radius:** Extreme curves using `rounded-[2.5rem]` or `rounded-[3rem]`.
* **Architectural Arches:** Used on hero and feature images: `rounded-t-full rounded-b-[4rem]`.
* **Frosted Glass (Glassmorphism):** Used for floating cards and sticky headers: `bg-white/70 backdrop-blur-xl border border-white/50`.
* **Shadows:** Soft, tinted, massive spreads: `shadow-xl shadow-[#B4C4D9]/10`.

---

## 📂 Project Architecture

The project utilizes the Next.js App Router paradigm. Key routes include:

* `app/page.tsx` — The Home Page (Hero, Soulful Essence, Class Highlights Carousel).
* `app/about/page.tsx` — The About Page (75/25 Asymmetrical Teacher Bio, Core Values, Mission).
* `app/classes/page.tsx` — The Classes Page (Editorial Portrait Grid, Formats Logistics).
* `app/gallery/page.tsx` — The Gallery Page (Masonry Layout, Framer Motion Lightbox).
* `app/contact/page.tsx` — The Contact Page (Glassmorphism Form, Google Maps Integration, FAQs).
* `components/` — Shared UI elements (Header, Footer).

---

## ⚙️ Configuration Notes

### Next.js Image Optimization
This project uses the Next.js `<Image />` component. If fetching placeholder images from external domains (e.g., Unsplash), they **must** be whitelisted in the `next.config.mjs` file:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' }
    ],
  },
};
export default nextConfig;

```

---

## 🚀 Getting Started

First, install the required dependencies:

```bash
npm install
# or
yarn install

```

Run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

