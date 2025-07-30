# Project Images Organization

This folder contains all project gallery images organized by project slug.

## Folder Structure
```
public/images/projects/
├── chatbot-adaptive-cards/
├── ai-cloud-research-redesign/
├── intercompany-transactions/
├── polco-accessibility-audit/
├── digital-goods-for-good/
└── crypto-integrations/
```

## Image Naming Convention
- Use descriptive names: `hero.jpg`, `gallery-1.jpg`, `gallery-2.jpg`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Recommended size: 1200px+ width for gallery images

## Usage in Code
Reference images using paths like:
```typescript
imageUrl: "/images/projects/project-slug/hero.jpg"
gallery: [
  "/images/projects/project-slug/gallery-1.jpg",
  "/images/projects/project-slug/gallery-2.jpg"
]
```
