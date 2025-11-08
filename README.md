# 🎯 Dev Event - The Hub for Every Dev Event You Can't Miss

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com/)

Sebuah platform modern untuk menemukan dan booking event developer seperti Hackathon, Meetups, dan Conferences. Dibuat dengan teknologi terkini dan dioptimasi untuk performa maksimal.

## ✨ Fitur Utama

- 🎪 **Event Discovery** - Temukan berbagai event developer dalam satu tempat
- 📅 **Booking System** - Sistem reservasi event yang mudah dan cepat
- 🎨 **Modern UI** - Interface yang clean dan responsif dengan animasi menarik
- ⚡ **Optimasi Performa** - Menggunakan Next.js 16 caching & Server Components
- 📱 **Fully Responsive** - Tampilan sempurna di semua device
- 🔍 **SEO Optimized** - Built-in SEO optimization untuk visibility yang lebih baik
- 📊 **Analytics** - Terintegrasi dengan PostHog untuk tracking user behavior

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework dengan App Router dan Server Components
- **[React 19.2](https://react.dev/)** - Library UI terbaru dengan React Server Components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework (latest version)
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Tailwind animation utilities
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon set
- **[Class Variance Authority](https://cva.style/)** - Type-safe variant styling
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional className utilities
- **[OGL](https://github.com/oframe/ogl)** - WebGL library untuk visual effects

### Database & Storage
- **[MongoDB Atlas](https://www.mongodb.com/atlas)** - Cloud-hosted MongoDB database
- **[Mongoose 8.19](https://mongoosejs.com/)** - MongoDB ODM dengan TypeScript support
- **[Cloudinary](https://cloudinary.com/)** - Media management & optimization

### Analytics & Monitoring
- **[PostHog](https://posthog.com/)** - Product analytics & session replay
  - Client-side tracking (`posthog-js`)
  - Server-side events (`posthog-node`)

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting dengan Next.js config
- **[@tailwindcss/postcss](https://tailwindcss.com/docs/using-with-preprocessors)** - PostCSS integration

## 🚀 Getting Started

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js 20.x atau lebih tinggi
- npm / yarn / pnpm / bun
- MongoDB Atlas account (atau MongoDB local)
- Cloudinary account

### Installation

1. **Clone repository**
```bash
git clone https://github.com/MIAR-Riza27/dev-event-nextjs16-crash-course.git
cd dev-event
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
```

3. **Setup environment variables**

Buat file `.env` di root folder dan tambahkan:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Configuration
CLOUDINARY_URL=your_cloudinary_url

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📁 Struktur Project

```
dev-event/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── events/        # Events API endpoints
│   ├── events/            # Event pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── BookEvent.tsx      # Booking component
│   ├── EventCard.tsx      # Event card display
│   ├── EventDetails.tsx   # Event detail view
│   ├── ExploreBtn.tsx     # Explore button
│   ├── LightRays.tsx      # Visual effects
│   └── Navbar.tsx         # Navigation bar
├── database/              # Database models
│   ├── booking.model.ts   # Booking schema
│   ├── event.model.ts     # Event schema
│   └── index.ts           # DB exports
├── lib/                   # Utility libraries
│   ├── actions/           # Server actions
│   ├── constants.ts       # App constants
│   ├── mongodb.ts         # MongoDB connection
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   ├── icons/
│   └── images/
└── instrumentation-client.ts  # PostHog client setup
```

## 🎨 Fitur Teknologi Khusus

### Next.js 16 Features
- ✅ **Server Components** - Rendering di server untuk performa optimal
- ✅ **App Router** - Routing system modern dengan layouts
- ✅ **Server Actions** - Direct server mutations tanpa API route
- ✅ **Cache API** - Built-in caching dengan `cacheLife()` dan `use cache`
- ✅ **Image Optimization** - Automatic image optimization dengan `next/image`
- ✅ **Font Optimization** - Automatic font optimization dengan `next/font`

### Database Architecture
- **Mongoose Models** - Type-safe database schemas
- **Connection Caching** - Efficient connection pooling untuk serverless
- **Data Models**: Events & Bookings dengan relasi yang proper

### Styling Approach
- **Component Variants** - Reusable styled components dengan CVA
- **Responsive Design** - Mobile-first approach
- **Dark Mode Ready** - Prepared untuk dark mode implementation
- **Animation** - Smooth transitions dan micro-interactions

## 🌐 Deployment

### Deployment di Vercel (Rekomendasi)

Project ini sudah berhasil di-deploy ke Vercel setelah 3 kali percobaan! 🎉

1. **Push ke GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import ke Vercel**
   - Buka [Vercel Dashboard](https://vercel.com/new)
   - Import repository GitHub Anda
   - Vercel akan auto-detect Next.js

3. **Configure Environment Variables**
   
   Tambahkan semua environment variables di Vercel Dashboard:
   - `MONGODB_URI`
   - `CLOUDINARY_URL`
   - `NEXT_PUBLIC_POSTHOG_KEY`
   - `NEXT_PUBLIC_POSTHOG_HOST`
   - `NEXT_PUBLIC_BASE_URL` (gunakan URL Vercel Anda)

4. **Deploy!**
   
   Vercel akan otomatis build dan deploy. Setiap push ke main branch akan trigger automatic deployment.

### Tips Deployment
- ✅ Pastikan `typescript.ignoreBuildErrors` di `next.config.ts` sudah di-set (untuk development)
- ✅ Test build locally dengan `npm run build` sebelum push
- ✅ Periksa logs di Vercel Dashboard jika ada error
- ✅ Update `NEXT_PUBLIC_BASE_URL` setelah deploy

## 📝 Available Scripts

```bash
# Development mode dengan hot reload
npm run dev

# Build untuk production
npm run build

# Run production build locally
npm run start

# Run ESLint
npm run lint
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration dengan PostHog rewrites
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS customization
- `eslint.config.mjs` - ESLint rules
- `components.json` - shadcn/ui configuration

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Next.js repository

### Related Technologies
- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created with ❤️ by [MIAR-Riza27](https://github.com/MIAR-Riza27)

---

⭐ Jangan lupa kasih star jika project ini membantu Anda!
