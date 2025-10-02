# Next.js Blog Site 📝

A modern, responsive blog website built with Next.js 15, TypeScript, and Tailwind CSS. This project features a complete blog system with markdown content management, a beautiful landing page, and a professional design system.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Content Management**: Markdown-based blog posts with Contentlayer
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Design System**: Custom UI components with shadcn/ui integration
- **Landing Page**: Professional landing page with multiple sections
- **Blog System**: Complete blog with post listing and individual post pages
- **Author Support**: Author information with avatars
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized for Core Web Vitals

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - User interface library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework

### Content & Styling
- **Contentlayer** - Type-safe markdown content management
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful icon library
- **React Markdown** - Markdown rendering with remark-gfm

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities

## 📁 Project Structure

```
site-blog/
├── public/                     # Static assets
│   ├── assets/                # Blog post images
│   └── *.svg                  # Icons and graphics
├── posts/                     # Markdown blog posts
│   ├── primeiro-post.md
│   ├── segundo-post.md
│   └── terceiro-post.md
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx          # Landing page
│   │   ├── blog/             # Blog routes
│   │   │   ├── page.tsx      # Blog listing
│   │   │   └── [slug]/       # Individual post pages
│   │   └── layout.tsx        # Root layout
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Header and footer
│   │   ├── avatar/          # Avatar components
│   │   ├── search/          # Search functionality
│   │   └── markdown/        # Markdown renderer
│   ├── templates/           # Page templates
│   │   ├── landing-page/    # Landing page sections
│   │   └── blog/            # Blog templates
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── contentlayer.config.ts   # Content configuration
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Design System

The project implements a comprehensive design system with:

### Color Palette
- **Blue Variants**: Primary brand colors (#2C85FC, #2266C1, #0D284C)
- **Cyan Accents**: Secondary highlights (#2DEBFC, #187D86)
- **Neutral Grays**: Text and background colors
- **Semantic Colors**: Success, warning, and error states

### Components
- **Avatar System**: Flexible avatar components with container, image, title, and description
- **Layout Components**: Header, footer, and navigation
- **Blog Components**: Post cards, grids, and sharing functionality
- **UI Components**: Buttons, breadcrumbs, and form elements

## 📝 Content Management

### Blog Posts
Blog posts are written in Markdown and stored in the `/posts` directory. Each post includes:

```yaml
---
title: "Post Title"
description: "Post description"
date: 2024-12-20 10:20:00
image: "/assets/post-image.png"
author:
  name: "Author Name"
  avatar: "/author-avatar.svg"
---
```

### Content Features
- **Frontmatter Support**: YAML metadata for posts
- **Author Information**: Name and avatar for each post
- **Image Support**: Featured images for posts
- **Date-based Sorting**: Automatic chronological ordering
- **Slug Generation**: URL-friendly post slugs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd site-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧩 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 Pages

### Landing Page (`/`)
A professional landing page featuring:
- **Hero Section**: Main value proposition
- **Feature Section**: Key product features
- **Support Section**: Customer support information
- **Customer Story Section**: Testimonials and case studies

### Blog Pages
- **Blog List** (`/blog`): Displays all blog posts in chronological order
- **Individual Posts** (`/blog/[slug]`): Detailed post view with content and metadata

## 🎯 Features in Detail

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interfaces

### Performance Optimizations
- Static site generation (SSG)
- Image optimization
- Code splitting
- Tree shaking

### SEO & Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Meta tags and Open Graph support

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure build settings (automatic with Next.js)
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📋 Roadmap

- [ ] Search functionality
- [ ] Tags and categories
- [ ] Comment system
- [ ] Newsletter subscription
- [ ] RSS feed
- [ ] Dark mode support
- [ ] Internationalization

## 📞 Support

For questions and support, please open an issue in the repository or contact the development team.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using Next.js and modern web technologies.
