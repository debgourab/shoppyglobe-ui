# ShoppyGlobe UI

A modern, responsive e-commerce frontend built with **React**, **Redux Toolkit**, **React Router**, and **Vite**. The project demonstrates practical frontend engineering skills including API integration, authentication flows, shopping-cart state management, lazy loading, responsive design, reusable components, route-based code splitting, and production deployment with Vercel.

## Project Overview

ShoppyGlobe UI is the frontend of an e-commerce experience where users can browse products, view product details, create an account, sign in, manage a shopping cart, and continue through checkout. The application is designed as a portfolio-ready project with a clean component structure and production-friendly configuration.

## Key Features

- Responsive e-commerce interface for desktop, tablet, and mobile
- Product browsing and product-detail pages
- Category-based shopping experience
- User registration and login flows
- Redux Toolkit state management
- Persistent authentication session handling
- Shopping cart with quantity updates and removal
- Checkout interface with INR currency formatting
- Lazy-loaded routes and product images
- Loading, error, empty, and 404 states
- API abstraction through reusable service modules
- React Router browser routing with Vercel SPA rewrites
- Security-focused deployment headers
- Vite development proxy for backend API requests

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, JavaScript ES6+ |
| State Management | Redux Toolkit, React Redux |
| Routing | React Router DOM |
| Build Tool | Vite |
| Styling | CSS3, responsive layouts |
| Image Optimization | react-lazy-load-image-component |
| API Communication | Fetch-based reusable API modules |
| Deployment | Vercel |
| Backend Integration | Node.js / Express API hosted separately |

## Project Structure

```text
shoppyglobe-ui/
├── public/
│   └── robots.txt
├── src/
│   ├── api/            # API client and endpoint modules
│   ├── components/     # Reusable UI and commerce components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Route-level pages
│   ├── store/          # Redux store, slices and selectors
│   ├── styles/         # Global and responsive styling
│   ├── utils/          # Utility helpers such as currency formatting
│   ├── App.jsx         # Router and application layout
│   └── main.jsx        # React application entry point
├── .env.example
├── .gitignore
├── .nvmrc
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 24
- npm

### Installation

```bash
git clone https://github.com/debgourab/shoppyglobe-ui.git
cd shoppyglobe-ui
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env
```

On Windows Command Prompt:

```cmd
copy .env.example .env
```

Start the development server:

```bash
npm run dev
```

The application runs on `http://localhost:4000` by default.

## Environment Variables

```env
VITE_API_URL=https://your-backend-domain.com/api
VITE_DEV_API_PROXY_TARGET=https://your-backend-domain.com
```

`VITE_API_URL` is used by the production frontend. `VITE_DEV_API_PROXY_TARGET` is optional and controls where local `/api` requests are proxied during development.

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create an optimized production build
npm run preview  # Preview the production build locally
```

## Deployment

The project is configured for Vercel with SPA routing support.

1. Import this GitHub repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Add `VITE_API_URL` in Vercel Environment Variables.
6. Add the deployed Vercel URL to the backend's allowed CORS origins.

## Engineering Highlights

This project demonstrates skills relevant to junior Frontend, React, and MERN-stack roles:

- Component-based UI development
- Global state management with Redux Toolkit
- REST API integration and separation of API concerns
- Authentication-aware application state
- Client-side routing and route-level lazy loading
- Reusable loading and error states
- Responsive CSS architecture
- Environment-based configuration
- Production deployment configuration
- Git and GitHub workflow practices

## Author

**Deb Gourab Biswas**  
Frontend / React / MERN Stack Developer

GitHub: https://github.com/debgourab  
Repository: https://github.com/debgourab/shoppyglobe-ui

## Repository

https://github.com/debgourab/shoppyglobe-ui.git
