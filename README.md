# Wesley Poth Portfolio

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

The site showcases my projects, work history, skills, and contact information with a clean responsive design and smooth animations.

## Overview

This portfolio is designed to present my work as a software developer with a focus on front-end development, UX/UI, and modern web experiences.

The site includes:

- Responsive landing page
- Featured project section
- VibeForge project highlight
- Project cards with custom animations
- LinkedIn-style experience timeline
- About section
- Contact form
- GitHub and LinkedIn links
- SEO metadata
- Smooth scroll-based animations

## Featured Project: VibeForge

VibeForge is an AI-powered Spotify playlist manager.

Users can log in with Spotify, view and manage their playlists, remove tracks, generate playlist analysis, and discover new tracks based on a selected vibe or artist.

Main technologies used for VibeForge:

- Next.js
- TypeScript
- Tailwind CSS
- NextAuth
- Spotify Web API
- AI integration
- Vercel

## Tech Stack

This portfolio uses:

- **Next.js** — React framework
- **React** — UI library
- **TypeScript** — type-safe JavaScript
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — component animations
- **GSAP** — scroll-based timeline animations
- **Resend** — contact form email handling
- **ESLint** — linting and code quality

## Project Structure

```txt
src
├── app
│   ├── api
│   │   └── send-email
│   │       └── route.ts
│   ├── ClientLayout.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProjectsSection.tsx
│   │
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
│
├── data
│   └── portfolio.ts
│
├── hooks
│   ├── useContactForm.ts
│   └── useTypewriter.ts
│
└── lib
    ├── motion.ts
    └── navigation.tsx
```

## Main Features

### Responsive Design

The portfolio is fully responsive and adapts to desktop, tablet, and mobile screen sizes.

### Animated Navigation

The navigation includes:

- Smooth scrolling to sections
- Active section detection
- Animated underline
- Mobile drawer menu
- Scroll progress indicator

### Project Cards

Projects are displayed with custom card styling, orange accents, hover states, animated tags, and featured project support.

### Experience Timeline

The work history section uses GSAP and ScrollTrigger to create a smooth animated timeline.

It presents education, internship experience, full-time work, and personal project experience in a clean LinkedIn-style layout.

### Contact Form

The contact form sends messages through the `/api/send-email` route using Resend.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wpoth/wpoth.github.io.git
cd wpoth.github.io
```

### 2. Install dependencies

```bash
pnpm install
```

You can also use npm:

```bash
npm install
```

### 3. Create an environment file

Create a `.env.local` file in the root of the project.

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

Depending on your current email route implementation, you may also need to adjust the sender or recipient email inside:

```txt
src/app/api/send-email/route.ts
```

### 4. Start the development server

```bash
pnpm dev
```

Or with npm:

```bash
npm run dev
```

Open the site at:

```txt
http://localhost:3000
```

## Available Scripts

### Start development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Start production server

```bash
pnpm start
```

### Run linting

```bash
pnpm lint
```

## Deployment

This project can be deployed on Vercel.

Recommended deployment steps:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add the required environment variables.
4. Deploy.

The production build can be tested locally with:

```bash
pnpm build
pnpm start
```

## Environment Variables

The contact form requires email configuration.

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

Do not commit `.env.local` to GitHub.

## Customization

Most portfolio content can be edited in:

```txt
src/data/portfolio.ts
```

This includes:

- Hero text
- Featured project
- Project list
- Experience timeline entries
- About text
- Contact links

Navigation items can be edited in:

```txt
src/lib/navigation.tsx
```

Reusable animation variants can be edited in:

```txt
src/lib/motion.ts
```

## Notes

This project previously included a theme switcher, but the theme context was removed because the portfolio no longer uses manual theme switching.

Some dark-mode utility classes may still exist in older components, but they are not required for the current design.

## Author

**Wesley Poth**

- GitHub: [wpoth](https://github.com/wpoth)
- LinkedIn: [Wesley Poth](https://www.linkedin.com/in/wesley-poth-41a1262b4/)
- Email: [w.poth1001@gmail.com](mailto:w.poth1001@gmail.com)

## License

This project is private and intended as a personal portfolio.
