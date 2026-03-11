# Shapiro Law Office - Next.js

A modern legal services website for Shapiro Law Office, built with Next.js, React, and TypeScript.

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
shapiro-laws/
├── app/                    # Next.js app directory
│   ├── (home)/            # Home page route group
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services listing
│   │   └── [slug]/        # Service detail (dynamic route)
│   ├── layout.tsx         # Root layout
│   ├── providers.tsx      # React Context providers
│   └── not-found.tsx      # 404 page
├── src/
│   ├── components/        # React components
│   ├── data/             # Data files and constants
│   ├── lib/              # Utility functions
│   ├── index.css         # Global styles
│   └── assets/           # Images and static files
├── public/               # Static files
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies
```

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.sk/)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Conversion from Vite to Next.js

This project was converted from a Vite-based React application to Next.js. Key changes:

1. **Routing**: Moved from React Router to Next.js App Router
2. **File Structure**: Reorganized from `src/pages/` to `app/`
3. **Components**: Updated `Link` components from react-router to Next.js
4. **Configuration**: Replaced `vite.config.ts` with `next.config.ts`
5. **Dependencies**: Removed `react-router-dom`, added `next`
6. **Build Scripts**: Updated from Vite commands to Next.js commands

## Features

- Responsive design
- Dark/Light mode support
- Multiple practice areas showcase
- Service detail pages
- Contact form
- Testimonials section
- CTA sections
- 24/7 availability messaging

## Development

The project uses:
- **ESLint** for code quality
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** for component library

## License

This project is proprietary and confidential.


# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
