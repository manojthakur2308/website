# New Era Infotech — Company Website

A modern, responsive, and SEO-optimized company website for New Era Infotech built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design** — Mobile-first approach, fully responsive across all devices
- **Modern UI/UX** — Beautiful components with smooth animations using Framer Motion
- **SEO Optimized** — Meta tags, structured data, sitemap, and robots.txt
- **Performance** — Built with Vite for fast development and optimized builds
- **Accessibility** — Semantic HTML, keyboard navigation, contrast ratio compliance
- **Multiple Pages** — Home, About, Services, Projects, Careers, Contact, Privacy Policy
- **Integration Ready** — Google Forms integration for contact and job applications
- **Analytics Ready** — Google Analytics ready configuration

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── JobCard.tsx
│   ├── TestimonialCarousel.tsx
│   ├── Stats.tsx
│   └── Modal.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Careers.tsx
│   ├── Contact.tsx
│   ├── PrivacyPolicy.tsx
│   └── NotFound.tsx
├── layouts/            # Layout components
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── App.css             # App styles
├── index.css           # Global styles with Tailwind
└── main.tsx            # Entry point
```

## 🛠️ Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first CSS framework
- **Vite** — Build tool and dev server
- **React Router** — Client-side routing
- **Framer Motion** — Animation library
- **React Helmet Async** — Meta tag management
- **ESLint** — Code quality

## 📋 Prerequisites

- Node.js 16+ or higher
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Then edit `.env` to add your Google Form links:

```
VITE_GOOGLE_FORM_CONTACT=https://forms.gle/YOUR_FORM_ID
VITE_GOOGLE_FORM_CAREERS=https://forms.gle/YOUR_FORM_ID
```

### 3. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Google Forms Integration

To integrate Google Forms for contact and job applications:

1. Create a Google Form for contact inquiries
2. Create another Google Form for job applications
3. Get the form share links and add them to `.env`
4. Update the `GOOGLE_FORM_LINK` variables in components

### Customization

Key files to customize:

- **Colors**: Update `tailwind.config.js` for brand colors
- **Content**: Edit individual page components in `src/pages/`
- **Components**: Modify or extend components in `src/components/`
- **Typography**: Update font in `src/index.css`

## 📊 SEO & Meta Tags

Each page includes:
- Meta description
- OG (Open Graph) tags
- Twitter card tags
- Structured data (JSON-LD)

Update meta tags in each page component using `react-helmet-async`:

```tsx
<Helmet>
  <title>Page Title</title>
  <meta name="description" content="Page description" />
</Helmet>
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Custom utilities are defined in `src/index.css`:

- `.btn-primary` — Primary button style
- `.btn-secondary` — Secondary button style

## 📱 Responsive Breakpoints

- `sm` — 640px
- `md` — 768px
- `lg` — 1024px
- `xl` — 1280px

## 🔒 Privacy & Data

- Contact form data is collected by Google Forms
- Google Analytics is configured for analytics (optional)
- Privacy Policy page is included
- GDPR-compliant data handling

## 📈 Performance Optimization

- Images should be optimized (use Cloudinary or similar)
- Code splitting is handled by Vite
- Production build is minified and optimized
- Lighthouse performance score target: 85+ (desktop), 70+ (mobile)

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🧪 Testing

To add testing:

```bash
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

## 📝 License

This project is licensed under the MIT License.

## 👥 Support

For issues or questions, please contact: info@newerait.com

---

**Built with ❤️ by New Era Infotech**
