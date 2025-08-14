# Project Structure

This document outlines the organized structure of the chronark.com Next.js project.

## Directory Structure

```
chronark.com/
├── src/                          # Source code directory
│   ├── app/                      # Next.js App Router pages
│   │   ├── About/               # About page
│   │   ├── api/                 # API routes
│   │   │   └── incr/           # Page view increment API
│   │   ├── contact/            # Contact page
│   │   ├── projects/           # Projects listing and detail pages
│   │   │   └── [slug]/         # Dynamic project pages
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable React components
│   │   ├── analytics.tsx       # Analytics component
│   │   ├── card.tsx           # Card component
│   │   ├── mdx.tsx            # MDX rendering component
│   │   ├── nav.tsx            # Navigation component
│   │   └── particles.tsx      # Particle animation component
│   ├── hooks/                  # Custom React hooks (for future use)
│   ├── lib/                    # Utility libraries (for future use)
│   ├── constants/              # Application constants (for future use)
│   ├── styles/                 # Stylesheets
│   │   └── global.css         # Global CSS styles
│   ├── types/                  # TypeScript type definitions
│   │   └── mdx.d.ts           # MDX type definitions
│   ├── utils/                  # Utility functions
│   │   └── mouse.ts           # Mouse position utilities
│   └── mdx-components.tsx      # MDX component overrides
├── content/                    # Content files (Contentlayer)
│   └── projects/              # Project markdown files
├── public/                     # Static assets
│   ├── fonts/                 # Font files
│   ├── project-images/        # Project images
│   └── ...                    # Other static assets
├── .contentlayer/             # Generated Contentlayer files
├── .next/                     # Next.js build output
├── node_modules/              # Dependencies
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── contentlayer.config.js     # Contentlayer configuration
└── ...                        # Other config files
```

## Key Features

### Technology Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Contentlayer** for content management
- **MDX** for rich content
- **Framer Motion** for animations
- **Upstash Redis** for analytics

### Project Organization Benefits

1. **Clear Separation**: All source code is organized under the `src/` directory
2. **Scalable Structure**: Dedicated folders for components, utilities, types, and hooks
3. **Type Safety**: Proper TypeScript configuration with path mapping
4. **Modern Next.js**: Uses App Router with proper file-based routing
5. **Content Management**: Contentlayer integration for markdown-based content

### Path Mapping

The project uses TypeScript path mapping for clean imports:
- `@/*` maps to `./src/*`
- `contentlayer/generated` maps to `./.contentlayer/generated`

### Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Code formatting
npm run fmt
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `ParticleAnimation.tsx`)
- **Pages**: lowercase with hyphens (e.g., `about/page.tsx`)
- **Utilities**: camelCase (e.g., `mouseUtils.ts`)
- **Types**: PascalCase (e.g., `ProjectTypes.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

## Import Guidelines

- Use absolute imports with `@/` prefix for src files
- Use relative imports only for files in the same directory
- Group imports: external libraries, internal modules, relative imports
- Use named exports for utilities and components
- Use default exports for pages and main components

## Future Enhancements

The organized structure supports easy addition of:
- Custom hooks in `src/hooks/`
- Shared utilities in `src/lib/`
- Application constants in `src/constants/`
- Additional components in `src/components/`
- More complex routing in `src/app/`