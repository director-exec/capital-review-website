# Capital Review Management - Modern Finance Website

A modern, responsive website for Capital Review Management built with Next.js 14, TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Features

- **Modern Design**: Finance-focused design with professional aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 14 and Image optimization
- **Accessibility**: Built with accessibility in mind using Radix UI
- **Type Safety**: Full TypeScript support
- **Component Library**: Reusable UI components with variants
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## 🎨 Design Highlights

- **Finance-Focused Color Scheme**: Professional blues, greens, and golds
- **High-Quality Images**: Unsplash integration for professional stock photos
- **Social Media Integration**: Proper logos for LinkedIn, Google Business, and certifications
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Glass Morphism**: Modern glass effects and backdrop blur
- **Gradient Backgrounds**: Professional gradient patterns

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom variants
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage component
├── components/
│   └── ui/                  # Reusable UI components
│       ├── button.tsx       # Button with variants
│       ├── card.tsx         # Card components
│       ├── badge.tsx        # Badge component
│       ├── navigation-menu.tsx # Navigation menu
│       ├── sheet.tsx        # Mobile navigation
│       └── separator.tsx    # Visual dividers
├── lib/
│   └── utils.ts             # Utility functions
├── LOGO/                    # Company logos
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```

## 🎯 Key Components

### Header
- Sticky navigation with backdrop blur
- Dropdown menus for About, Consumer Tools, and Solutions
- Mobile-responsive with slide-out navigation
- Company logo and branding

### Hero Section
- Gradient background with finance pattern overlay
- Professional typography and call-to-action buttons
- Trust indicators and company tagline

### Services Section
- Card-based layout with high-quality images
- Hover effects and animations
- Clear call-to-action buttons

### About Section
- Feature highlights with icons and descriptions
- Professional imagery integration
- Company values and culture

### Compliance Section
- Certification badges and standards
- Professional layout with trust indicators
- Industry compliance information

### Contact Section
- Multiple contact methods
- Professional gradient background
- Clear call-to-action

### Footer
- Company information and legal disclaimers
- Social media links with proper logos
- Site resources and navigation

## 🎨 Design System

### Colors
- **Primary**: `#1a365d` (Deep Blue)
- **Secondary**: `#2d5aa0` (Medium Blue)
- **Accent**: `#38a169` (Green)
- **Gold**: `#f59e0b` (Accent Gold)
- **Silver**: `#94a3b8` (Muted Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Fluid typography scaling

### Components
- **Buttons**: Multiple variants (default, elite, outline)
- **Cards**: With images, hover effects, and animations
- **Badges**: For certifications and status indicators
- **Navigation**: Dropdown menus and mobile navigation

## 📱 Responsive Design

- **Mobile**: Optimized for phones and tablets
- **Desktop**: Professional layout for larger screens
- **Navigation**: Adaptive menu system
- **Images**: Responsive image optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS**: Can be deployed to AWS Amplify
- **Self-hosted**: Build and deploy to any server

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
elite: {
  primary: "#1a365d",
  secondary: "#2d5aa0",
  accent: "#38a169",
  gold: "#f59e0b",
  silver: "#94a3b8",
}
```

### Content
- Update company information in `app/page.tsx`
- Replace images with your own assets
- Modify navigation links and structure

### Styling
- Custom CSS classes in `app/globals.css`
- Component variants in individual component files
- Tailwind utilities for quick styling

## 📄 License

This project is proprietary to Capital Review Management.

## 🤝 Support

For questions or support, contact the development team.

---

**Built with ❤️ for Capital Review Management** 