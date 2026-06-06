import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const menuCategories = ["الكل", "قهوة ساخنة", "قهوة باردة", "حلويات", "مخبوزات"];

const menuItems = [
  {
    id: 1,
    name: 'فلات وايت',
    description: 'إسبريسو مزدوج مع حليب مبخر ورغوة خفيفة',
    price: 18,
    category: 'قهوة ساخنة',
    image:
      'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'آيس سبانيش لاتيه',
    description: 'إسبريسو مع حليب مكثف وحليب طازج وثلج',
    price: 22,
    category: 'قهوة باردة',
    image: 'https://sweet-saray.com/image/cache/catalog/coffee-latte-1-1%20(1)-1200x630.jpg',
  },
  {
    id: 3,
    name: 'كورتادو',
    description: 'كميات متساوية من الإسبريسو والحليب المبخر',
    price: 16,
    category: 'قهوة ساخنة',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'كيكة العسل الروسية',
    description: 'طبقات رقيقة من كيك العسل مع كريمة الجبن',
    price: 28,
    category: 'حلويات',
    image:
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'V60',
    description: 'قهوة مختصة مقطرة يدوياً (إثيوبي/كولومبي)',
    price: 24,
    category: 'قهوة ساخنة',
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'كرواسون سادة',
    description: 'كرواسون فرنسي طازج ومقرمش مخبوز بالزبدة',
    price: 12,
    category: 'مخبوزات',
    image: 'https://www.exception-group.com/wp-content/uploads/2023/07/gall-4BK0201110-1.webp',
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "الكل" || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">
            قائمتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            اختر <span className="text-coffee-500">مزاجك</span>
          </h2>
          <p className="text-coffee-600 max-w-2xl mx-auto text-lg">
            نقدم تشكيلة واسعة من القهوة المختصة والحلويات المحضرة يومياً لتناسب جميع الأذواق.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-coffee-900 text-white shadow-md"
                  : "bg-coffee-50 text-coffee-700 hover:bg-coffee-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-coffee-50 rounded-3xl overflow-hidden group hover:shadow-xl hover:shadow-coffee-900/5 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-coffee-900 z-10">
                    {item.price} <span className="text-xs">ر.س</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-coffee-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gold-600 font-medium">{item.category}</p>
                    </div>
                  </div>
                  <p className="text-coffee-600 mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="text-coffee-900 font-bold hover:text-gold-500 transition-colors">
                      التفاصيل
                    </button>
                    <button 
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                      className="w-10 h-10 rounded-full bg-coffee-900 text-white flex items-center justify-center hover:bg-gold-500 transition-colors shadow-md transform hover:scale-110 active:scale-95"
                    >
                      <FiPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="border-2 border-coffee-900 text-coffee-900 px-8 py-3 rounded-full font-bold hover:bg-coffee-900 hover:text-white transition-colors">
            عرض القائمة كاملة
          </button>
        </div>
      </div>
    </section>
  );
}
