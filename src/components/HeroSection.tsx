import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";

/** 
 * HeroSection: Kinetic Editorial
 * Replicating the pixel-perfect design from Stitch (Screen 8d7808)
 */
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[85vh] w-full mt-4 rounded-[2rem] overflow-hidden flex flex-col md:grid md:grid-cols-12 isolate"
      style={{
        background: 'linear-gradient(to right, var(--vexo-surface-container) 0%, var(--vexo-surface-container) 40%, var(--vexo-surface-container-lowest) 60%, var(--vexo-surface-container-lowest) 100%)'
      }}
    >
      
      {/* Editorial Content Side */}
      <div className="md:col-span-6 p-8 md:p-20 flex flex-col justify-center relative z-20">
        
        {/* Kinetic Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-[10px] md:text-xs font-headline font-bold uppercase tracking-[0.3em] text-vexo-on-surface-variant">
            {siteConfig.hero.desktop.badge}
          </span>
        </motion.div>

        {/* Brutalist Typography */}
        <div className="relative isolate">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[8.5vw] font-headline font-bold leading-[0.85] tracking-[calc(-0.06em)] mb-10 text-left md:w-[150%] md:ml-[-2px] relative z-30 select-none"
          >
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-vexo-on-surface via-vexo-on-surface to-vexo-on-surface/40"
              style={{ backgroundSize: '200% 100%', backgroundPosition: 'left center' }}
            >
              {siteConfig.hero.desktop.title}
            </span>
            <br />
            <span className="bg-vexo-inverse-surface text-white italic inline-block px-4 py-1 mt-4 skew-x-[-6deg] font-black tracking-normal">
              {siteConfig.hero.desktop.subtitle}
            </span>
          </motion.h1>
        </div>

        {/* Narrative */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-vexo-secondary max-w-md mb-12 leading-relaxed font-sans"
        >
          {siteConfig.hero.desktop.description}
        </motion.p>

        {/* Dynamic Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-6 items-center"
        >
          <button className="group relative overflow-hidden bg-vexo-inverse-surface text-white font-headline font-black px-12 py-6 rounded-xl hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/20">
            <span className="relative z-10 tracking-widest uppercase">EXPLORE THE LAB</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          
          <button className="group text-vexo-on-surface font-headline font-bold px-4 py-2 flex items-center gap-3 relative">
            <span className="tracking-widest uppercase text-sm border-b-2 border-vexo-on-surface/30 group-hover:border-vexo-on-surface transition-colors pb-1">
              VIEW DROPS
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Kinetic Asset Side */}
      <div className="md:col-span-6 h-[500px] md:h-auto relative overflow-hidden">
        
        {/* Soft edge gradient for editorial blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-vexo-surface-container via-transparent to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-l from-vexo-surface-lowest/20 via-transparent to-transparent z-10 hidden md:block" />
        
        <motion.div
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full"
        >
          <img 
            src={siteConfig.hero.desktop.image}
            alt={`${siteConfig.name} performance`}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[2000ms] grayscale-[0.2] hover:grayscale-0"
          />
        </motion.div>

        {/* Signature Branding */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block">
           <span className="text-[5vw] font-headline font-black text-white/5 pointer-events-none select-none uppercase tracking-tighter">
              {siteConfig.name}©
           </span>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
