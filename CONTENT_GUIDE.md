
# Portfolio Content Management Guide

This guide explains how to create and modify content for your portfolio website.

## Overview

Your portfolio is built with React, TypeScript, and Tailwind CSS. The content is organized into several main sections that you can easily customize.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Main landing section
│   ├── ProjectGrid.tsx # Projects showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact information
│   ├── Navbar.tsx      # Navigation bar
│   └── Footer.tsx      # Page footer
└── pages/
    └── Index.tsx       # Main page layout
```

## Modifying Content

### 1. Hero Section (`src/components/Hero.tsx`)

**What to change:**
- Title and tagline
- Description text
- Professional role/title

**How to modify:**
```typescript
// Update the role badge
<span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
  Your Role Here  // Change this
</span>

// Update the main heading
<h1 className="mt-4 font-medium leading-tight tracking-tighter">
  Your main headline here  // Change this
</h1>

// Update the description
<p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
  Your description here  // Change this
</p>
```

### 2. Projects Section (`src/components/ProjectGrid.tsx`)

**Adding/Editing Projects:**

Find the `projects` array and modify or add new entries:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Brief description of your project",
    category: "Project Type", // e.g., "UX/UI Design", "Web Design"
    imageUrl: "https://images.unsplash.com/photo-xxxxx" // Use Unsplash or your own images
  },
  // Add more projects here
];
```

**Image Requirements:**
- Use high-quality images (recommended: 1200x800px or similar aspect ratio)
- Unsplash URLs work great for placeholder images
- For custom images, upload them to your hosting service

### 3. About Section (`src/components/About.tsx`)

**What to customize:**
- Personal description paragraphs
- Skills and tools
- Profile image

**Key areas to update:**
```typescript
// Update description paragraphs
<p>
  Your experience and background description
</p>

// Update skills grid
<div className="space-y-1">
  <h4 className="text-sm font-medium text-foreground">Skill Category</h4>
  <p className="text-sm text-muted-foreground">Your tools/skills</p>
</div>

// Update profile image
<img 
  src="your-image-url-here" 
  alt="Your name" 
  className="w-full h-full object-cover"
/>
```

### 4. Contact Section (`src/components/Contact.tsx`)

**Update contact information:**
```typescript
// Phone number
<p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>

// Email address
<p className="text-muted-foreground text-sm">your-email@domain.com</p>

// Social links
<a href="your-linkedin-url" className="hover:text-foreground transition-colors">LinkedIn</a>
<a href="your-dribbble-url" className="hover:text-foreground transition-colors">Dribbble</a>
```

### 5. Navigation (`src/components/Navbar.tsx`)

**Update brand name:**
```typescript
<span className="text-primary">Your Brand.</span>
```

**Modify navigation links:**
```typescript
<a href="#projects" className="nav-link">Projects</a>
<a href="#about" className="nav-link">About</a>
<a href="#contact" className="nav-link">Contact</a>
// Add more links as needed
```

## Adding New Sections

### 1. Create a New Component

Create a new file in `src/components/`, for example `Services.tsx`:

```typescript
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container-width">
        <h2>My Services</h2>
        {/* Your content here */}
      </div>
    </section>
  );
};

export default Services;
```

### 2. Add to Main Page

Update `src/pages/Index.tsx`:

```typescript
import Services from '@/components/Services';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Services />  {/* Add your new section */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
```

### 3. Update Navigation

Add the new section to the navbar in `src/components/Navbar.tsx`:

```typescript
<a href="#services" className="nav-link">Services</a>
```

## Styling Guidelines

### CSS Classes Used

- `section`: Standard section spacing and padding
- `container-width`: Maximum width container for content
- `nav-link`: Navigation link styling
- `project-card`: Project card component styling

### Color Scheme

The site uses CSS custom properties for theming:
- `--primary`: Main brand color
- `--secondary`: Secondary background color
- `--muted-foreground`: Subdued text color
- `--background`: Main background color

### Responsive Design

All components are built mobile-first with Tailwind CSS:
- `md:`: Medium screens and up (768px+)
- `lg:`: Large screens and up (1024px+)

## Images and Assets

### Recommended Image Sources

1. **Unsplash** (Free): https://unsplash.com/
2. **Pexels** (Free): https://pexels.com/
3. **Your own photography/designs**

### Image Optimization Tips

- Use WebP format when possible
- Compress images before uploading
- Use appropriate dimensions (don't upload 4K images for small thumbnails)
- Add descriptive alt text for accessibility

## Development Workflow

### Making Changes

1. Edit the relevant component file
2. Save the file
3. The development server will automatically reload
4. Check your changes in the browser

### Adding Dependencies

If you need new packages, use the package manager:
```bash
npm install package-name
```

### Testing

- Test on different screen sizes
- Check both light and dark modes
- Verify all links work correctly
- Test smooth scrolling between sections

## Common Customizations

### Changing Colors

Update the Tailwind config or CSS custom properties in `src/index.css`

### Adding Animations

Use Tailwind's animation classes or CSS animations:
- `animate-fade-in`
- `animate-slide-down`
- Custom animations in CSS

### Form Integration

For contact forms, you'll need to integrate with a service like:
- Formspree
- Netlify Forms
- EmailJS

## Deployment

The site can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Need Help?

- Check the component files for examples
- Refer to Tailwind CSS documentation
- Use the browser developer tools to inspect elements
- Test changes in small increments

---

**Remember**: Always backup your content before making major changes!
