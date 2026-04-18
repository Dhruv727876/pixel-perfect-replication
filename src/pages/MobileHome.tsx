import { Menu, Search, ShoppingCart, ArrowRight, Star } from "lucide-react";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import { products } from "@/lib/data";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import FooterTapedDesign from "@/components/ui/footer-taped-design";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { siteConfig } from "@/config/site";

const testimonials = [
  {
    text: "The quality of the fabric is next-level. I've washed my VEXO set dozens of times and it still looks and feels like day one.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Fitness Influencer",
  },
  {
    text: "Finally an apparel brand that actually cares about the fit. The sizing guide was 100% accurate, and the packaging was beautiful.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Marathon Runner",
  },
  {
    text: "Fastest delivery I've ever had for online shopping. Ordered on Tuesday, wearing it by Thursday. Incredible service!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Yoga Instructor",
  },
  {
    text: "The design aesthetic is so clean. I can wear my VEXO pieces to the studio and then straight out to lunch without missing a beat.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Creative Director",
  },
  {
    text: "The compression tech in these leggings is a game changer for my recovery. Worth every penny for the performance alone.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Athletic Coach",
  },
  {
    text: "I was skeptical about ordering apparel online, but the returns process was so seamless it took all the risk away. Great experience.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Lifestyle Blogger",
  },
];

const MobileHome = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-vexo-background text-vexo-on-background font-body pb-24">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-vexo-surface/80 backdrop-blur-md px-4 py-3 justify-between border-b border-vexo-outline-variant/15">
        <div className="flex items-center gap-4">
          <h2 className="text-vexo-on-surface font-headline text-2xl font-black italic tracking-tighter">{siteConfig.name}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/checkout" className="flex size-10 items-center justify-center text-vexo-on-surface relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-vexo-primary-container text-vexo-on-primary-fixed text-[10px] font-bold px-1 rounded-sm min-w-[16px] text-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section - Animated Entrance */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(12, 15, 15, 0.2) 0%, rgba(12, 15, 15, 0.8) 100%), url('${siteConfig.hero.mobile.image}')` 
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-6 pb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span className="text-white font-label font-bold text-sm tracking-widest uppercase">{siteConfig.hero.mobile.badge}</span>
              <h1 className="text-white text-6xl font-headline font-black italic leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
                {siteConfig.hero.mobile.title}{"\n"}{siteConfig.hero.mobile.subtitle}
              </h1>
              <p className="text-vexo-surface-variant text-lg max-w-[80%] font-medium leading-tight">
                {siteConfig.hero.mobile.description}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col gap-3"
            >
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/lab')}
                className="w-full bg-white text-black font-headline font-black py-4 text-center tracking-wider uppercase transition-all"
              >
                Explore the Lab
              </motion.button>
              <Link to="/collections">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-headline font-black py-4 text-center tracking-wider uppercase transition-all"
                >
                  View Collections
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip - Staggered entrance */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          className="grid grid-cols-3 bg-vexo-inverse-surface py-4 px-2 divide-x divide-vexo-outline/20"
        >
          {[
            { tag: "24%", label: "Faster Recovery" },
            { tag: "1.2kg", label: "Avg. Weight reduction" },
            { tag: "PRO", label: "Grade Compression" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="flex flex-col items-center"
            >
              <span className="text-vexo-primary-container font-headline font-bold text-lg">{stat.tag}</span>
              <span className="text-vexo-outline-variant text-[10px] uppercase font-bold tracking-tighter">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Collections Carousel - Scroll animation */}
        <section className="py-6 bg-vexo-surface relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-6 mb-4"
          >
            <h2 className="text-vexo-on-background font-headline text-3xl font-black italic uppercase leading-none tracking-tighter">Collections</h2>
            <div className="h-1 w-12 bg-vexo-primary-container mt-2"></div>
          </motion.div>
          <FeatureCarousel />
        </section>

        {/* Testimonials */}
        <section className="bg-vexo-surface py-24 relative overflow-hidden border-t border-vexo-outline-variant/10">
          <div className="px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
            >
              <div className="flex justify-center">
                <div className="border border-vexo-outline/20 py-1.5 px-4 rounded-full bg-white/50 text-vexo-on-surface text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm shadow-sm">
                  Testimonials
                </div>
              </div>

              <h2 className="text-3xl font-headline font-black italic tracking-tighter mt-6 text-center uppercase leading-[0.85]">
                What our<br/>users say
              </h2>
            </motion.div>

            <div className="flex justify-center gap-3 mt-10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] h-[600px] overflow-hidden">
              <TestimonialsColumn 
                testimonials={testimonials.slice(0, 3)} 
                duration={20} 
                className="w-1/2 flex flex-col items-center scale-90 -translate-x-2"
              />
              <TestimonialsColumn 
                testimonials={testimonials.slice(3, 6)} 
                duration={28} 
                className="w-1/2 flex flex-col items-center scale-90 translate-x-2"
              />
            </div>
          </div>
          
          {/* Kinetic Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-vexo-primary-container/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </section>

        {/* Newsletter Section - Redesigned Lab Access Portal */}
        <section className="relative px-4 py-20 overflow-hidden bg-vexo-background">
          {/* Background Technical Elements */}
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-vexo-primary-container/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300px] border-[0.5px] border-vexo-primary-container/5 rotate-12 pointer-events-none" />
          <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-vexo-primary-container/20 to-transparent opacity-30" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-md mx-auto"
          >
            <div className="bg-vexo-surface border border-vexo-outline-variant/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative group">
              {/* Inner accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-vexo-primary-container/5 blur-3xl group-hover:bg-vexo-primary-container/10 transition-colors duration-700" />
              
              <div className="flex flex-col gap-8">
                {/* Header with technical ID */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="size-2 bg-vexo-primary-container rounded-full animate-pulse" />
                    <span className="font-label text-[10px] font-black tracking-[0.3em] text-vexo-primary uppercase">Portal Access : VXR-09</span>
                  </div>
                  
                  <h2 className="text-vexo-on-surface font-headline text-5xl font-black italic uppercase leading-[0.85] tracking-tighter">
                    Join the<br/>
                    <span className="text-vexo-primary-container">Inner Circle</span>
                  </h2>
                  
                  <p className="text-vexo-on-surface/60 text-sm font-medium leading-relaxed max-w-[90%]">
                    Secure elite early access to Lab Drops, performance biometric data, and exclusive technical gear.
                  </p>
                </div>

                {/* Technical Data Points */}
                <div className="grid grid-cols-2 gap-x-4 border-y border-vexo-outline-variant/10 py-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-vexo-outline uppercase tracking-widest">Protocol</span>
                    <span className="text-xs font-headline font-black italic text-vexo-on-surface uppercase">Direct Encryption</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-vexo-outline uppercase tracking-widest">Priority</span>
                    <span className="text-xs font-headline font-black italic text-vexo-on-surface uppercase">Level 04 Beta</span>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <input 
                      className="w-full bg-vexo-surface-container-low border border-vexo-outline-variant/10 rounded-2xl py-5 px-6 font-label font-bold text-[11px] tracking-widest placeholder:text-vexo-outline/40 focus:ring-1 focus:ring-vexo-primary-container focus:border-vexo-primary-container/50 outline-none transition-all" 
                      placeholder="SECURE_EMAIL_ADDRESS" 
                      type="email"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-vexo-primary-container opacity-30 select-none uppercase tracking-tighter">Required*</div>
                  </div>
                  
                  <button className="relative group w-full overflow-hidden rounded-2xl bg-vexo-inverse-surface py-5 flex items-center justify-center transition-all hover:scale-[1.02] active:scale-95 shadow-xl">
                    <div className="absolute inset-0 bg-vexo-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    <span className="relative z-10 text-white group-hover:text-vexo-on-primary-fixed font-headline font-black italic text-lg uppercase tracking-wider transition-colors">
                      Authorize Access
                    </span>
                  </button>
                </div>

                {/* Bottom Technical Footer */}
                <div className="flex items-center justify-between opacity-30">
                  <span className="text-[8px] font-mono tracking-widest uppercase">ENCRYPTION: AES-256</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-1 bg-vexo-primary-container rounded-full" />
                    <div className="w-1 h-1 bg-vexo-outline-variant rounded-full" />
                    <div className="w-1 h-1 bg-vexo-outline-variant rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <FooterTapedDesign />

      <MobileBottomNav />
    </div>
  );
};

export default MobileHome;
