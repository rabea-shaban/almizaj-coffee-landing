import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">
              عدسة المزاج
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900">
              تابعنا على <span className="text-coffee-500">انستقرام</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-block font-bold text-coffee-900 border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors">
            @almazaj_coffee
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 || index === 3 ? "row-span-2 h-full min-h-[350px]" : "h-64"
              }`}
            >
              <img
                src={src}
                alt="Gallery image"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-coffee-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <span className="text-white font-bold tracking-widest text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  ♥
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-block font-bold text-coffee-900 border-b-2 border-gold-500 pb-1">
            @almazaj_coffee
          </a>
        </div>
      </div>
    </section>
  );
}
