import { motion } from 'framer-motion';
import { FiAward, FiCoffee, FiUsers } from 'react-icons/fi';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-coffee-950 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A017_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 relative h-64 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop"
                alt="Coffee Beans"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-80 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop"
                alt="Cafe Interior"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 font-bold tracking-wider uppercase text-sm mb-2 block">
              قصتنا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              شغفنا يبدأ من <span className="text-gold-500">حبة البن</span>
            </h2>
            <p className="text-coffee-200 text-lg mb-8 leading-relaxed">
              منذ عام 2015، بدأنا رحلتنا في «قهوة المزاج» بشغف كبير نحو القهوة
              المختصة. نجوب العالم لنختار أفضل أنواع البن، ونحمصه بحب لنقدم لكم
              كوباً مثالياً يعكس ثقافتنا واهتمامنا بأدق التفاصيل.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-coffee-800 p-3 rounded-2xl text-gold-400">
                  <FiCoffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">بن مختص %100</h4>
                  <p className="text-sm text-coffee-300">
                    نستورد البن من أفضل المزارع حول العالم.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-coffee-800 p-3 rounded-2xl text-gold-400">
                  <FiAward className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">تحميص محلي</h4>
                  <p className="text-sm text-coffee-300">
                    نحمص قهوتنا محلياً لنضمن طزاجتها.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-coffee-800 p-3 rounded-2xl text-gold-400">
                  <FiUsers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">خبراء القهوة</h4>
                  <p className="text-sm text-coffee-300">
                    باريستا محترفون لصنع كوبك المفضل.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-gold-500 text-coffee-950 px-8 py-4 rounded-full font-bold hover:bg-gold-400 transition-colors">
              اكتشف المزيد عنا
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
