# Ibn Khaldoun School Website

## Overview

This is a bilingual Arabic school website for "مدرسة ابن خلدون" (Ibn Khaldoun Primary School) in Larache, Morocco. The application is a full-stack web platform built with React frontend and Express backend, featuring school information pages, staff directory, activities/news, photo gallery, student resources, and a contact form. The entire UI is designed in Right-to-Left (RTL) layout for Arabic language support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and UI animations
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Typography**: Cairo Google Font for Arabic text rendering

The frontend follows a page-based architecture with reusable components. Pages include Home, About, Staff, Levels (grade levels), Activities, Gallery, Student Space, and Contact. Custom hooks in `use-school-data.ts` abstract all API calls.

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response validation
- **Build System**: Vite for frontend bundling, esbuild for server bundling
- **Development**: Vite dev server with HMR proxied through Express

The server serves both API routes (`/api/*`) and static files. In development, Vite middleware handles frontend assets with hot module replacement.

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Tables**: activities (news/events), staff (teachers/admin), gallery (photos/videos), messages (contact form submissions)
- **Migrations**: Managed via `drizzle-kit push` command

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod insert schemas
- `routes.ts`: API route definitions with paths and response schemas

This pattern ensures type safety across the full stack.

### Build Configuration
- Development: `npm run dev` runs tsx with the Express server which integrates Vite middleware
- Production: `npm run build` uses a custom build script that runs Vite for frontend and esbuild for backend, outputting to `dist/`
- Database: `npm run db:push` applies schema changes to PostgreSQL

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions (if auth is added)

### UI Component Libraries
- **Radix UI**: Headless UI primitives for accessible components (accordion, dialog, dropdown, tabs, toast, etc.)
- **shadcn/ui**: Pre-styled components using Radix primitives with Tailwind CSS
- **Lucide React**: Icon library

### Frontend Utilities
- **date-fns**: Date formatting with Arabic locale (arMA) support
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command palette component
- **vaul**: Drawer component
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Safe Tailwind class merging

### Backend Utilities
- **Zod**: Runtime schema validation for API requests
- **drizzle-zod**: Generates Zod schemas from Drizzle table definitions

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)