import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCoffee, FiMenu, FiX, FiShoppingBag, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, totalItems, totalPrice, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "قائمتنا", href: "#menu" },
    { name: "قصتنا", href: "#about" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "المعرض", href: "#gallery" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-coffee-900 group">
            <FiCoffee className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tight">قهوة المزاج</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-coffee-800 hover:text-gold-500 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-coffee-800 hover:text-gold-500 transition-colors"
              >
                <FiShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-0 right-0 w-4 h-4 bg-gold-500 text-white text-[10px] flex items-center justify-center rounded-full"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <a
                href="#book"
                className="bg-coffee-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-coffee-800 transition-colors shadow-md shadow-coffee-900/20"
              >
                احجز طاولة
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-coffee-800 hover:text-gold-500 transition-colors"
            >
              <FiShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold-500 text-white text-[10px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-coffee-900 p-2"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-coffee-100 md:hidden"
            >
              <ul className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-coffee-800 font-medium border-b border-coffee-50"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="#book"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-coffee-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-coffee-800 transition-colors"
                  >
                    احجز طاولة
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-coffee-100 flex items-center justify-between bg-coffee-50">
                <h2 className="text-xl font-bold text-coffee-900 flex items-center gap-2">
                  <FiShoppingBag className="text-gold-500" />
                  سلة المشتريات
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-coffee-500 hover:text-coffee-900 transition-colors bg-white rounded-full shadow-sm"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-coffee-400 gap-4">
                    <FiShoppingBag className="w-16 h-16 opacity-20" />
                    <p className="text-lg">سلتك فارغة حالياً</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-gold-600 font-bold hover:underline"
                    >
                      تصفح المنيو
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={item.id} 
                      className="flex gap-4 border-b border-coffee-50 pb-4"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-coffee-900">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-600 transition-colors p-1"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3 bg-coffee-50 rounded-full px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-coffee-900 hover:text-gold-500 transition-colors"
                            >
                              <FiMinus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-coffee-900 hover:text-gold-500 transition-colors"
                            >
                              <FiPlus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-gold-600">{item.price * item.quantity} ر.س</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-coffee-100 bg-coffee-50">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-coffee-600 font-medium">الإجمالي</span>
                    <span className="text-2xl font-bold text-coffee-900">{totalPrice} ر.س</span>
                  </div>
                  <button className="w-full bg-coffee-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-500 transition-colors shadow-lg shadow-coffee-900/20">
                    إتمام الطلب
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
