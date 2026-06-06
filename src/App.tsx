import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <Gallery />
        <Footer />
      </main>
    </CartProvider>
  );
}
