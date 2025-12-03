# Developer Quick Reference

## Essential Commands

### Development
```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Common Tasks

#### Adding a New Page
1. Create component in `src/pages/YourPage.tsx`
2. Import in `src/App.tsx`
3. Add route: `<Route path="/your-page" element={<YourPage />} />`
4. Add navigation link in `Header.tsx`

#### Adding a New Component
1. Create component in `src/components/YourComponent.tsx`
2. Define props interface
3. Add TypeScript types
4. Export for use in pages

#### Updating Colors/Theme
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#0891b2',
      secondary: '#22c55e',
    },
  },
}
```

#### Adding Google Form
1. Create form at forms.google.com
2. Get share link
3. Update `.env`:
   ```env
   VITE_GOOGLE_FORM_CONTACT=https://forms.gle/YOUR_ID
   ```
4. Update component: `const GOOGLE_FORM_LINK = 'https://forms.gle/YOUR_ID'`

#### Updating Meta Tags
In page component:
```tsx
<Helmet>
  <title>Your Page Title</title>
  <meta name="description" content="Your description" />
</Helmet>
```

## Project Structure Reference

```
src/
├── components/        # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── ...
├── layouts/          # Layout wrappers
├── utils/            # Utility functions
├── App.tsx           # Routes configuration
├── App.css
├── index.css         # Global styles + Tailwind
└── main.tsx          # App entry point

public/
├── sitemap.xml       # SEO sitemap
└── robots.txt        # Robot directives
```

## Responsive Breakpoints

- `sm`: 640px - Tablets
- `md`: 768px - Small laptops
- `lg`: 1024px - Desktops
- `xl`: 1280px - Large desktops

Usage:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Custom Button Styles

```tsx
// Primary button (gradient cyan to green)
<button className="btn-primary">Click me</button>

// Secondary button (outline style)
<button className="btn-secondary">Click me</button>
```

## Animation Examples

Using Framer Motion:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

## TypeScript Tips

Always use type-only imports for types:
```tsx
// ✅ Correct
import type { ComponentProps } from './Component';
import { Component } from './Component';

// ❌ Wrong
import { Component, ComponentProps } from './Component';
```

## Git Workflow

```bash
git status              # Check changes
git add .              # Stage changes
git commit -m "message" # Commit
git push origin main   # Push to GitHub
```

## Deployment Commands

### Vercel
```bash
npm i -g vercel
vercel login
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

## Environment Setup

```bash
# Copy template
cp .env.example .env

# Edit .env with your values
nano .env

# Verify dependencies
npm list react react-dom react-router-dom framer-motion
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

### Build failing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS not working
1. Check Tailwind classes are correct
2. Verify `@tailwind` directives in `src/index.css`
3. Restart dev server

### TypeScript errors
```bash
npm run lint  # Check for issues
tsc --noEmit  # Run type checker
```

## File Size Monitoring

After build:
```bash
# Check build output
ls -lh dist/assets/

# Expected sizes:
# CSS: ~20KB gzipped
# JS: ~130KB gzipped
```

## Performance Tips

1. **Lazy load routes** - Use React.lazy() for code splitting
2. **Optimize images** - Use Cloudinary or similar
3. **Minimize animations** - Check performance impact
4. **Remove unused CSS** - Tailwind purges by default
5. **Monitor bundle size** - Keep gzipped JS under 200KB

## Browser DevTools Tips

### Performance
- Check Lighthouse scores
- Monitor Core Web Vitals
- Use Network tab for assets

### Console
- Check for errors or warnings
- Monitor API responses
- Test in different browsers

## Useful Extensions

- VS Code Extensions:
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Vue Plugin
  - Prettier Code Formatter

## Key Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.1.1",
  "framer-motion": "^11.15.0",
  "react-helmet-async": "^2.0.4",
  "tailwindcss": "^3.4.0"
}
```

## Support Links

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vite.dev
- React Router: https://reactrouter.com
- Framer Motion: https://www.framer.com/motion
- TypeScript: https://www.typescriptlang.org

---

**Happy coding! 🚀**
