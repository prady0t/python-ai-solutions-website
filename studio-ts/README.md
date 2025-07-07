# Python AI Solutions Website

A modern, responsive website for Python AI Solutions built with Next.js, TypeScript, and Tailwind CSS. This website showcases AI solutions, services, and expertise in Python-based artificial intelligence development.

## 🚀 Features

- **Modern Design**: Clean, professional design built with Tailwind CSS
- **Responsive**: Fully responsive across all devices
- **TypeScript**: Type-safe development with TypeScript
- **MDX Support**: Rich content with Markdown and JSX
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Optimized for search engines
- **Animation**: Smooth animations with Framer Motion

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd python-ai-solutions-website
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

### 4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
studio-ts/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog pages
│   │   ├── contact/      # Contact page
│   │   ├── work/         # Portfolio/work pages
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable components
│   ├── images/          # Static images
│   └── styles/          # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

### Styling
- Modify `src/styles/` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Component styles are co-located with components

### Content
- Blog posts: Add MDX files in `src/app/blog/`
- Work/Portfolio: Add MDX files in `src/app/work/`
- Images: Place in `src/images/` or `public/`

### Components
- Reusable components are in `src/components/`
- Each component is self-contained with its styles

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export as static site
- `npm run deploy` - Build for deployment

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory

### Static Export
```bash
npm run export
```
This creates a static export in the `out` directory.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Tailwind CSS
Configuration is in `tailwind.config.js`. Customize colors, fonts, and other design tokens here.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/docs/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
