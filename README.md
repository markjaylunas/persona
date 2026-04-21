# Persona
[Persona](https://persona.makje.com) is a high-performance, all-in-one identity platform designed for creators and professionals to unify their digital presence into a single, portable URL.

A modern full-stack React application with server-side rendering, built with the latest web technologies and best practices.

## 🚀 Features

- **React 19** - Latest React with hooks and modern patterns
- **TanStack Start** - Full-stack React framework with SSR support
- **TypeScript** - Type-safe development with full type checking
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality accessible component library
- **TanStack Router** - Type-safe routing with SSR support
- **TanStack Form** - Headless form state management
- **Cloudflare Workers** - Deploy on the edge with Cloudflare Workers runtime
- **Biome** - Fast formatter and linter in Rust
- **Vite** - Next-generation frontend tooling with lightning-fast HMR
- **Vitest** - Unit testing powered by Vite

## 📋 Prerequisites

- **Node.js** 18+ or higher
- **pnpm** 8+ (recommended) or npm/yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/markjaylunas/persona.git
cd persona
```

2. Install dependencies:
```bash
pnpm install
```

## 💻 Development

Start the development server on port 3000:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000` with hot module replacement (HMR) enabled.

## 📦 Building

Build the project for production:

```bash
pnpm build
```

This command:
- Bundles the application with Vite
- Performs TypeScript type checking
- Generates optimized production assets

## 🚢 Deployment

Deploy to Cloudflare Workers:

```bash
pnpm deploy
```

This runs the build process and deploys using Wrangler.

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

## 🎨 Code Quality

Format code with Biome:

```bash
pnpm format
```

Lint the codebase:

```bash
pnpm lint
```

Run all checks (format, lint, check, type-check):

```bash
pnpm check:all
```

## 📝 Project Structure

```
persona/
├── src/                 # Source code
├── public/             # Static assets
├── .vscode/            # VS Code settings
├── components.json     # shadcn/ui config
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── wrangler.jsonc      # Cloudflare Workers config
├── biome.json          # Biome linter config
└── package.json        # Project dependencies
```

## 🔧 Technology Stack

### Core
- **React** 19.2.0 - UI library
- **TypeScript** 5.7.2 - Type safety
- **Vite** 8.0.0 - Build tool

### Routing & State Management
- **TanStack Router** - Type-safe routing
- **TanStack Start** - Full-stack framework
- **TanStack Form** - Form state management
- **TanStack React Query** - Server state management

### Styling
- **Tailwind CSS** 4.1.18 - Utility CSS
- **Tailwind Merge** - Merge Tailwind classes
- **TW Animate CSS** - Animation utilities
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library

### Development Tools
- **Biome** 2.4.5 - Formatter and linter
- **Babel React Compiler** - React optimizer
- **Vitest** 3.0.5 - Unit testing
- **Wrangler** 4.82.2 - Cloudflare Workers CLI

### Utilities
- **Zod** 4.3.6 - Schema validation
- **LZ String** 1.5.0 - String compression

## 📄 License

This project is open source. Check the repository for license details.

## 👤 Author

[Mark Jay Lunas](https://github.com/markjaylunas)

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.