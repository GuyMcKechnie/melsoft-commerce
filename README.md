<div align="center">

# Melsoft Commerce — Frontend E‑Commerce Capstone

Responsive, client‑side e‑commerce storefront built with React, Tailwind CSS, React Router, and Redux Toolkit. Implements browsing, product detail, cart management, checkout (shipping + payment), and order confirmation — all from a local product catalog with persisted state.

</div>

## Table of Contents

1. Project Overview
2. Tech Stack
3. Features & Requirements Coverage
4. Project Structure
5. State Management
6. Development Scripts
7. Running & Building
8. Testing
9. Architecture & Design Decisions
10. Accessibility & UX Notes
11. Future Enhancements
12. Contributing Workflow
13. License / Usage
14. AI Attribution

## 1. Project Overview

This project recreates a provided Figma design (Melsoft Academy E‑Commerce Store) with focus on: component reuse, predictable global state, form validation, derived pricing logic, and UI fidelity. All data (products, cart, addresses, payment methods) resides in the browser; no backend services.

## 2. Tech Stack

-   React (functional components + hooks)
-   Vite (fast dev server & build tooling)
-   Tailwind CSS (utility‑first styling)
-   React Router DOM (routing/navigation)
-   Redux Toolkit (global state + slices)
-   Lucide React (icons)
-   Testing: Vitest + @testing-library/react

## 3. Features & Requirements Coverage

| Requirement                   | Status      | Notes                                                                 |
| ----------------------------- | ----------- | --------------------------------------------------------------------- |
| Home page product grid        | Implemented | `/` route shows searchable grid                                       |
| Sidebar toggle                | Implemented | `uiSlice` controls `sidebarOpen` state                                |
| Search (local filtering)      | Implemented | Case‑insensitive filter across multiple product fields                |
| Product detail page           | Implemented | `/product/:id` loads product by id; shows images, description, rating |
| Mini cart thumbnails          | Implemented | Displayed on Home & Product detail side panel                         |
| Full cart page                | Implemented | Quantity increment/decrement + remove item                            |
| Derived totals                | Implemented | Memoized selectors + order summary component                          |
| Checkout (shipping + payment) | Implemented | Address & payment selection with validation                           |
| Order success page            | Implemented | `/order-success` static confirmation                                  |
| Cart persistence              | Implemented | localStorage subscribe in `store.js`                                  |
| Product catalog local JS      | Implemented | `src/data/products.js` numeric prices                                 |
| Redux selectors               | Implemented | `selectCartItems`, `selectCartTotalQty`, `selectCartTotalPrice`       |
| UI atoms (buttons, etc.)      | Partial     | Reusable atoms can be extracted next                                  |
| Tests (basic)                 | Partial     | Some component tests exist; need refresh after recent changes         |
| Accessibility                 | Partial     | Basic labels; further improvements outlined below                     |

## 4. Project Structure

```
src/
	App.jsx            # Routes and layout integration
	main.jsx           # Root render & Redux provider
	assets/            # Static images (processed by Vite)
	components/        # Page + UI components (Home, ProductView, Checkout, etc.)
	data/products.js   # Local product catalog & helpers
	redux/             # Slices (cart, payment, address, ui) + store + selectors
	index.css          # Tailwind imports & global styles
```

## 5. State Management

Redux Toolkit slices:

-   `cartSlice`: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
-   `addressSlice`: add/select/setDefault/remove addresses
-   `paymentSlice`: add/select/setDefault/remove payment methods (stored minimally)
-   `uiSlice`: UI toggles (sidebar)

Selectors (`redux/selectors.js`) provide memoized derived data: total quantity & total price. localStorage persistence occurs via `store.subscribe()` for cart/payment/address slices.

## 6. Development Scripts

| Script            | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start Vite dev server (default port 5173) |
| `npm run build`   | Production build into `build/`            |
| `npm run preview` | Preview production build locally          |
| `npm test`        | Run Vitest test suite                     |

## 7. Running & Building

```bash
npm install
npm run dev      # development
npm run build    # optimize & output to build/
npm run preview  # serve build locally
```

## 8. Testing

Framework: Vitest + @testing-library/react.
Existing tests cover: order summary, order success, checkout (legacy expectations). After recent UI adjustments (routing, search, sidebar toggle) tests should be updated to reflect current headings and aria labels. Add selectors tests for correctness of derived totals.

Recommended new tests:

-   Cart quantity update & removal
-   Search filtering (term matches & empty state)
-   Sidebar toggle state change
-   Checkout validation success/failure paths

Run tests:

```bash
npm test
```

## 9. Architecture & Design Decisions

-   Vite chosen for faster feedback loop vs older CRA template originally scaffolded.
-   Numeric product prices ensure reliable arithmetic without `parseFloat` scattering.
-   Derived cart values moved to selectors to minimize re-computation and keep components lean.
-   Sidebar duplication removed; single conditional render improves layout clarity.
-   Search implemented as controlled input with `useMemo` for predictable performance.

## 10. Accessibility & UX Notes

Current steps:

-   Semantic buttons & `aria-label` on actionable icons (e.g., Add to Bag, search input).
-   Focus styles rely on Tailwind defaults; can be enhanced with explicit `focus-visible` utilities.

Suggested improvements:

-   Add `role="navigation"` to sidebar container.
-   Announce cart item count changes with an `aria-live="polite"` region.
-   Provide keyboard shortcuts (e.g., press `/` to focus search).
-   Ensure color contrast meets WCAG (audit dark gray on light backgrounds).

## 11. Future Enhancements

-   Category filtering & sorting (price, rating).
-   Toast notifications instead of `alert()` for add-to-cart feedback.
-   Extract UI atoms: `Button`, `Input`, `Badge`, `Card` with Tailwind `@apply` classes.
-   Dark mode / theme tokens in `tailwind.config.js`.
-   Persist UI preferences (sidebar open state) to localStorage.
-   Add integration mock for payment (e.g., Stripe test keys) if scope expands.

## 12. Contributing Workflow

1. Create feature branch: `feature/<short-description>`.
2. Implement changes with focused commits.
3. Run `npm test` & manually verify UI.
4. Open PR referencing requirement or issue.
5. Request peer review; address comments before merge.

Coding Guidelines:

-   Keep components small & focused.
-   Avoid inline style duplication (leverage Tailwind utilities or custom classes).
-   Prefer selectors & `useMemo` for derived data.

## 13. License / Usage

Internal educational capstone project. If open sourcing, add a license (MIT recommended). Media assets should be verified for redistribution rights.

## 14. AI Attribution

This README file was generated with aid from an AI grammar tool.
