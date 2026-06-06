"use client";

import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "أحمد عبدالله",
    role: "عاشق للقهوة",
    content: "من أفضل المقاهي التي زرتها، جودة القهوة ممتازة والأجواء هادئة جداً ومناسبة للعمل أو الاسترخاء. أنصح بتجربة الفلات وايت.",
    initials: "أ ع",
    color: "from-coffee-600 to-coffee-800 text-coffee-100"
  },
  {
    id: 2,
    name: "سارة محمد",
    role: "صانعة محتوى",
    content: "ديكور المكان رائع والموظفين ودودين جداً. كيكة العسل عندهم خرافية وتتناسب تماماً مع قهوة V60 الأثيوبية.",
    initials: "س م",
    color: "from-gold-400 to-gold-600 text-coffee-950"
  },
  {
    id: 3,
    name: "خالد عبدالرحمن",
    role: "رجل أعمال",
    content: "أعقد جميع اجتماعاتي الصباحية هنا. المكان يبعث على الراحة والخدمة سريعة واحترافية. شكراً لفريق قهوة المزاج.",
    initials: "خ ع",
    color: "from-coffee-700 to-coffee-900 text-coffee-50"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-coffee-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">
            آراء العملاء
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            ماذا يقولون <span className="text-coffee-500">عنا</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-coffee-100 relative"
            >
              <FaQuoteRight className="absolute top-6 right-6 w-10 h-10 text-coffee-100 z-0" />
              <div className="relative z-10">
                <div className="flex text-gold-500 mb-6">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <p className="text-coffee-700 leading-relaxed mb-8">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${testimonial.color} flex items-center justify-center font-bold text-lg shadow-inner border border-coffee-100/10`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900">{testimonial.name}</h4>
                    <p className="text-sm text-coffee-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
