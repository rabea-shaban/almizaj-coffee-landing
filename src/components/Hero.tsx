import { motion } from "framer-motion";
import { FiCoffee, FiArrowLeft } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-coffee-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-coffee-100 rounded-bl-[100px] -z-10 opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-coffee-300/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-100 text-coffee-800 font-medium mb-6">
              <FiCoffee className="w-4 h-4 text-gold-500" />
              <span>أفضل قهوة مختصة في المدينة</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-coffee-900 leading-tight mb-6">
              قهوة طازجة، <br />
              <span className="text-gold-500">لحظات مثالية</span>
            </h1>
            
            <p className="text-lg md:text-xl text-coffee-700 mb-8 leading-relaxed max-w-lg">
              استمتع بأجود أنواع البن المحمص بعناية، والمحضر بحب ليمنحك تجربة قهوة لا تُنسى في أجواء هادئة ومريحة.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#order"
                className="bg-coffee-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-coffee-800 transition-colors shadow-xl shadow-coffee-900/20 flex items-center gap-2 group"
              >
                <span>اطلب الآن</span>
                <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#book"
                className="bg-white text-coffee-900 border-2 border-coffee-200 px-8 py-4 rounded-full font-bold text-lg hover:border-gold-500 hover:text-gold-600 transition-colors"
              >
                احجز طاولة
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4 -space-x-reverse">
                {[
                  { name: "أحمد", color: "bg-coffee-600 text-coffee-100" },
                  { name: "سارة", color: "bg-gold-500 text-coffee-950" },
                  { name: "خالد", color: "bg-coffee-800 text-coffee-50" },
                  { name: "منى", color: "bg-coffee-400 text-coffee-950" },
                ].map((user, idx) => (
                  <div key={idx} className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs shadow-sm ${user.color}`}>
                    {user.name[0]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-500 mb-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <p className="text-sm text-coffee-700 font-medium">أكثر من 2,000 تقييم إيجابي</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square rounded-full border border-coffee-200 p-8">
              <div className="absolute inset-0 border border-dashed border-gold-400/50 rounded-full animate-spin-slow" style={{ animationDuration: "30s" }} />
              <img
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop"
                alt="Latte Art"
                className="w-full h-full object-cover rounded-full shadow-2xl animate-fade-in"
              />
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="font-bold text-coffee-900">بن عضوي %100</p>
                  <p className="text-sm text-coffee-600">محمص يومياً</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 glass p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="bg-coffee-900 text-gold-400 p-3 rounded-full font-bold text-lg">
                  4.9
                </div>
                <div>
                  <p className="font-bold text-coffee-900">أفضل تقييم</p>
                  <p className="text-sm text-coffee-600">من عملائنا</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
