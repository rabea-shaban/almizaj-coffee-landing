# Goal

Build a modern, premium, fully responsive Landing Page for an Arabic coffee shop brand called "قهوة المزاج". The site will feature a clean and elegant UI with a warm and cozy coffee-themed atmosphere (dark brown, cream, soft beige, and gold accents). It will be built using Next.js, Tailwind CSS, and Framer Motion for smooth animations, with a mobile-first approach and full RTL (Right-to-Left) support for Arabic layout and typography.

## User Review Required

> [!IMPORTANT]  
> Please confirm if you have any specific Arabic font preference (e.g., 'Tajawal', 'Cairo', or 'Almarai' from Google Fonts). I will use 'Tajawal' by default for an elegant and modern look.

> [!NOTE]  
> I will initialize a new Next.js application in the current directory (`d:\Fainal\New folder`), replacing any existing files if necessary (currently empty). Is this correct?

## Open Questions

- Do you have any specific images or logos to use, or should I use high-quality coffee stock imagery and generate placeholder assets using AI?
- Should the "Order Now" and "Book a Table" buttons link to mock sections/pages, or do you have a specific booking/ordering system in mind?

## Proposed Changes

### Setup and Configuration
- **Next.js Initialization**: Run `npx create-next-app@latest ./ --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm` to create the project.
- **Dependencies**: Install `framer-motion` for animations and `lucide-react` for premium icons.
- **Tailwind Configuration**: Extend the theme with custom coffee-inspired colors, glassmorphism utilities, and typography settings.
- **Global CSS**: Setup RTL layout (`dir="rtl"`) on the main document and add custom font imports from Google Fonts.

### UI Components & Sections

#### Navbar & Footer
- **Navbar**: Sticky header with glassmorphism, responsive mobile menu, and call-to-action buttons.
- **Footer**: Social links, quick links, and newsletter subscription.

#### Landing Page Sections (`src/app/page.tsx`)
- **Hero Section**: High-quality coffee imagery, headline ("Fresh Coffee, Perfect Moments" / "قهوة طازجة، لحظات مثالية"), and CTAs.
- **Featured Drinks & Menu Cards**: Grid layout displaying signature coffee drinks with prices and descriptions.
- **Best Seller Coffee**: Highlight section for top-selling items with subtle hover animations.
- **About the Café Story**: Section describing "قهوة المزاج", its origins, and cozy atmosphere.
- **Customer Testimonials**: Carousel or grid of reviews with elegant typography.
- **Gallery Section**: Masonry or grid layout showcasing the café's interior and coffee art.
- **Special Offers Banner**: Full-width promotional banner with a call-to-action.
- **Statistics Section**: Animated counters (e.g., Cups Served, Happy Customers).
- **Contact Form**: Form with location map placeholder and opening hours.

## Verification Plan

### Automated Tests
- Run `npm run lint` and `npm run build` to ensure the Next.js app builds successfully without errors.

### Manual Verification
- Start the development server using `npm run dev`.
- Verify that the layout is correctly RTL.
- Test mobile responsiveness across all sections.
- Ensure Framer Motion animations trigger correctly on scroll.
- Validate that the chosen color palette provides a premium, cozy coffee shop feel.
