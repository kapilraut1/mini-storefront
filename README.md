🛍️ Mini-storeFront

A mini-ecommerce web app built with Next.js, TailwindCSS, and Clerk authentication.Strongly typed with typescript

🚀 How to Run the Project

Clone the repo

git clone <https://github.com/kapilraut1/mini-storefront.git>
cd <project-folder>

Now Install dependencies

npm install
 ||
yarn install


Set up environment variables
Create a .env.local file with the required keys:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CURRENCY_SYMBOL = 'Required currency'

Run the dev server

npm run dev

The app will be available at http://localhost:3000

 🛠️ Tech Stack used
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/) – Styling
- [Clerk](https://clerk.com/) – Authentication
- [Zustand](https://zustand-demo.pmnd.rs/) – State management

🏗️ Architecture Notes
Pages /            Routes

/                  → Home 

/product/productId → Single product with recommendations

/cart              → cart (protected by Clerk)

/orders            → Order (protected)

/sign-in, /sign-up → Clerk auth pages

/api/*             → Backend endpoints


State Management
Uses Zustand for client-side state. It is available in store folder.

Authentication state handled by Clerk.


🛍️ Data Flow

1. User lands on /        → sees navbar, hero component, products and footer.

2. When clicked a product → routes to /product/[prodcut.id] where we can add product to cart and recommendations shown below.

3. User goes to /cart     → sees selected items and can place order.

4. Order is created       → user is redirected to /orders.


⚖️  Known Issues

1. Middleware runtime: I found the Clerk middleware falling back to Node.js runtime instead of Edge, which reduced performance slightly.

2. SEO: Some pages (like product listing) are SEO friendly, but cart/orders are behind auth.

3. TypeScript typing : Some areas still use `unknown`, which could be improved with standard types in future.

4. Your .env app should be in the **project root folder**. 