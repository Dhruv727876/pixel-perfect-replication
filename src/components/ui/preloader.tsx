import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "motion/react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const diff = Math.random() * (prev < 60 ? 10 : 2);
        return Math.min(prev + diff, 100);
      });
    }, 80);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { 
        duration: 0.6, 
        ease: [0.7, 0, 0.3, 1]
      }
    }
  };

  const textVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="vexo-refined-preloader"
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#bdc7d4] text-[#1a1a1a] font-sans overflow-hidden"
        >
          {/* Subtle noise floor like the main site */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Accent bar at the top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FF0F67] opacity-20" />

          <div className="relative flex flex-col items-center justify-center w-full px-8 z-10 text-center">
            <div className="overflow-visible mb-8">
              <motion.h1 
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="font-headline font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-tight tracking-[-0.05em] select-none italic"
                style={{ 
                  color: "#1a1a1a",
                  padding: "0.2em 0",
                  textShadow: "0 10px 30px rgba(0,0,0,0.05)"
                }}
              >
                {siteConfig.name}
              </motion.h1>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-full max-w-[320px]">
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">
                  ESTABLISHING FREQUENCY
                </p>
                <span className="text-[12px] font-black tracking-widest font-mono">
                  {Math.round(progress)}%
                </span>
              </div>
              
              <div className="w-full h-1.5 bg-black/10 overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className="h-full bg-[#FF0F67] shadow-[0_0_10px_rgba(255,15,103,0.3)]"
                />
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-30">
            <div className="w-8 h-[2px] bg-black" />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase">{siteConfig.name} ARCHIVE // {siteConfig.hero.desktop.badge}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
