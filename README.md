# CRM Automation Pro - Website

A professional, conversion-focused website for CRM automation and web development services targeting Canadian small businesses.

## Overview

This website showcases services for helping Canadian service businesses automate client growth with CRM systems, marketing funnels, and high-converting websites.

## Features

- **Hero Section** - Compelling value proposition with clear CTAs
- **Services** - 3 core service offerings:
  - CRM Setup & Automation
  - Funnel & Website Design
  - Monthly Support & Optimization
- **How It Works** - 3-step process visualization
- **Pricing** - 3 transparent pricing tiers with Canada Digital Adoption Program note
- **Testimonials** - Social proof with stats and client reviews
- **Contact Form** - Lead capture with WhatsApp integration
- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Professional UI transitions

## Tech Stack

- **React** 19.2.3
- **Vite** 5.4.11 - Fast build tool
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Navigate to the project directory:
```bash
cd crm-automation-site
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at http://localhost:3000/

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
crm-automation-site/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Sticky navigation bar
│   │   ├── Hero.jsx          # Hero section with CTAs
│   │   ├── Services.jsx      # Service offerings
│   │   ├── HowItWorks.jsx    # Process steps
│   │   ├── Pricing.jsx       # Pricing tiers
│   │   ├── Testimonials.jsx  # Client reviews & stats
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & Tailwind
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies & scripts
```

## Customization

### Update Content

Edit the component files in `src/components/` to update:
- Business name and branding
- Service descriptions
- Pricing information
- Contact details
- Testimonials

### Update Colors

Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Update these values
  }
}
```

### Update Contact Information

In `src/components/Contact.jsx`:
- Update email address
- Update phone number
- Update WhatsApp link
- Configure form submission endpoint

### Add Form Integration

To integrate with a form service (e.g., Formspree, Netlify Forms, or your backend):

1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Replace the console.log with your form submission logic:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()

  // Example: Formspree integration
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    alert('Thank you! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', business: '', message: '' })
  }
}
```

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Vite configuration

### Traditional Hosting

1. Run `npm run build`
2. Upload the `dist` folder to your web server

## Email Templates

Create matching email templates for client outreach based on the website's design system:
- Use the same color scheme (primary-600: #0284c7)
- Include your logo and branding
- Match the tone and messaging

## Next Steps

1. **Setup Analytics** - Add Google Analytics or similar
2. **Add SEO** - Install react-helmet for meta tags
3. **Form Integration** - Connect contact form to email service
4. **CMS Integration** - Consider Contentful or Sanity for easier content updates
5. **Performance** - Optimize images and add lazy loading
6. **Accessibility** - Add ARIA labels and test with screen readers

## Marketing Assets

Use this website as the foundation for:
- LinkedIn profile/company page
- Facebook business page
- Google Business profile
- Email signatures
- Business cards

## Support

For issues or questions about the website code, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## License

This project is proprietary and confidential.
# crm-site-
