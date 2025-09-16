       🛍️ Mini-storeFront

A mini-ecommerce web app built with Next.js, TailwindCSS, and Clerk authentication.Strongly typed with typescript

🚀 How to Run the Project

Clone the repo

git clone <your-repo-url>
cd <project-folder>


Install dependencies

npm install
# or
yarn install


Set up environment variables
Create a .env.local file with the required keys:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
DATABASE_URL=your_database_url


Run the dev server

npm run dev


The app will be available at http://localhost:3000
.

🏗️ Architecture Notes
Pages / Routes

/ → Home / Product listing

/cart → User’s cart (protected by Clerk)

/orders → Order history (protected)

/sign-in, /sign-up → Clerk auth pages

/api/* → Backend endpoints (for cart, orders, etc.)

State Management

Uses Zustand for client-side state (cart, UI state).

Authentication state handled by Clerk.

Server components fetch product/order data where possible.

Data Flow

Products → fetched from backend or API routes → rendered in pages or app router.

Cart → managed in Zustand store → persisted in local state or backend (depending on implementation).

Orders → created via API route → stored in database → displayed in /orders.

⚖️ Trade-offs / Known Issues

Middleware runtime: Clerk middleware may fall back to Node.js runtime instead of Edge, which reduces performance slightly.

SEO: Some pages (like product listing) are SSR/SSG friendly, but cart/orders are behind auth and not crawlable.

Animations: Custom Tailwind animations (e.g., marquee) might not be perfectly smooth on lower-end devices.

Toast UX: Using toast.promise means order confirmations resolve as soon as the API responds; we add artificial delays for better UX.

Dark Mode: Implemented with next-themes; relies on client hydration, so there may be a flash of unstyled content (FOUC) before theme loads.