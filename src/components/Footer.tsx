import { FiCoffee, FiMapPin, FiPhone, FiMail, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-200 pt-20 pb-10 border-t border-coffee-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-white mb-6">
              <FiCoffee className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-bold tracking-tight">قهوة المزاج</span>
            </a>
            <p className="text-coffee-300 leading-relaxed mb-6">
              نقدم لكم تجربة قهوة استثنائية تجمع بين أصالة الماضي وحداثة الحاضر في كل كوب.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gold-500 transition-colors">الرئيسية</a></li>
              <li><a href="#menu" className="hover:text-gold-500 transition-colors">قائمتنا</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">قصتنا</a></li>
              <li><a href="#gallery" className="hover:text-gold-500 transition-colors">المعرض</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <span>الرياض، طريق الملك فهد، حي الملقا</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-gold-500 shrink-0" />
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>hello@almazaj.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">ساعات العمل</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-coffee-800 pb-2">
                <span>الأحد - الخميس</span>
                <span className="text-gold-400">7 ص - 12 م</span>
              </li>
              <li className="flex justify-between items-center border-b border-coffee-800 pb-2">
                <span>الجمعة</span>
                <span className="text-gold-400">4 م - 1 ص</span>
              </li>
              <li className="flex justify-between items-center">
                <span>السبت</span>
                <span className="text-gold-400">8 ص - 1 ص</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-coffee-800 text-sm text-coffee-400">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} قهوة المزاج.</p>
        </div>
      </div>
    </footer>
  );
}
