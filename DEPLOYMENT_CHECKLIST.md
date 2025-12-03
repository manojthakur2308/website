# Pre-Deployment Checklist

## Before Going Live

### 🔵 Content Updates

- [ ] Update company name and branding throughout
- [ ] Replace all placeholder images with real company photos
- [ ] Update team member information and photos
- [ ] Update project descriptions and images
- [ ] Update service descriptions with actual offerings
- [ ] Update job listings with real positions
- [ ] Update company address and contact information
- [ ] Update testimonials with real client quotes
- [ ] Update statistics (years, projects, clients)

### 🔗 Links & Forms

- [ ] Replace GOOGLE_FORM_LINK with actual contact form URL
- [ ] Set up Google Forms for contact inquiries
- [ ] Set up Google Forms for job applications
- [ ] Update email addresses (info@newerait.com)
- [ ] Update phone numbers
- [ ] Update social media links in footer
- [ ] Update LinkedIn company URL
- [ ] Verify all external links work

### 🌐 SEO & Domain

- [ ] Purchase domain name
- [ ] Update domain in robots.txt (sitemap URL)
- [ ] Update domain in sitemap.xml
- [ ] Update meta descriptions for each page
- [ ] Add Google Analytics tracking code
- [ ] Add Google Search Console verification
- [ ] Add favicon (replace vite.svg)
- [ ] Create og:image social sharing images

### 📊 Analytics & Monitoring

- [ ] Set up Google Analytics 4
- [ ] Add Google Search Console
- [ ] Set up error tracking (Sentry recommended)
- [ ] Set up performance monitoring
- [ ] Create sitemap submission in Google Search Console
- [ ] Set up email notifications for errors

### 🔒 Security

- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set up security headers
- [ ] Add GDPR/privacy compliance notice
- [ ] Review privacy policy for compliance
- [ ] Test form submission security
- [ ] Verify no sensitive data in code

### ⚡ Performance

- [ ] Test Lighthouse score
- [ ] Optimize images with Cloudinary or similar
- [ ] Test on mobile devices
- [ ] Test on slow 3G connection
- [ ] Verify Core Web Vitals
- [ ] Check pagespeed insights

### 🧪 Testing

- [ ] Test all links
- [ ] Test forms submission
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS and Android
- [ ] Test with screen readers
- [ ] Test keyboard navigation
- [ ] Test touch interactions
- [ ] Test with JavaScript disabled (navigation only)

### 📱 Responsive Testing

- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1024px)
- [ ] Large desktop (1025px+)
- [ ] Test orientation change

### 🚀 Deployment

- [ ] Choose hosting (Vercel/Netlify recommended)
- [ ] Configure CI/CD pipeline
- [ ] Set up auto-deploy from Git
- [ ] Test production build locally
- [ ] Deploy to staging first
- [ ] Run production smoke tests
- [ ] Deploy to production
- [ ] Monitor error logs post-deployment

### 📞 Post-Launch

- [ ] Monitor uptime
- [ ] Check analytics for traffic
- [ ] Monitor form submissions
- [ ] Set up error alerting
- [ ] Create feedback mechanism
- [ ] Plan content updates
- [ ] Schedule security updates

### 📝 Documentation

- [ ] Document deployment process
- [ ] Document how to update content
- [ ] Document how to add new projects
- [ ] Document how to add new job listings
- [ ] Create run book for common issues
- [ ] Document admin access procedures

## Configuration Files Checklist

- [x] `package.json` - Dependencies configured
- [x] `vite.config.ts` - Build configuration
- [x] `tsconfig.json` - TypeScript configuration
- [x] `tailwind.config.js` - Tailwind configuration
- [x] `postcss.config.cjs` - PostCSS configuration
- [x] `.env.example` - Environment template
- [x] `.env` - Local environment (needs form URLs)
- [x] `.gitignore` - Git configuration

## Build Artifacts

```
dist/
├── index.html (1.17 KB)
├── assets/
│   ├── index-[hash].css (20.12 KB)
│   └── index-[hash].js (406.92 KB)
├── robots.txt
└── sitemap.xml
```

## Environment Variables Needed

```env
VITE_GOOGLE_FORM_CONTACT=https://forms.gle/YOUR_FORM_ID
VITE_GOOGLE_FORM_CAREERS=https://forms.gle/YOUR_FORM_ID
VITE_GA_ID=G-XXXXXXXXXX (optional)
VITE_API_URL=https://api.example.com (if using backend)
```

## Important Reminders

⚠️ **Replace ALL instances of:**

- `https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM`
- `newerait.com` (with your domain)
- `info@newerait.com` (with your email)
- Placeholder images and content

✅ **Once Updated:**

1. Run `npm run build` to generate production files
2. Test build: `npm run preview`
3. Push to Git
4. Deploy to Vercel/Netlify

🎯 **Key Success Metrics:**

- Lighthouse Desktop Score: 85+
- Lighthouse Mobile Score: 70+
- Core Web Vitals: All Green
- Page Load Time: < 2.5s
- Zero build errors
