import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { siteConfig } from "@/config/site";

const FeaturedSection = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
        <span className="text-[8rem] md:text-[10rem] font-black uppercase tracking-tight leading-none text-stroke-light opacity-40">
          Fresh Fits For
        </span>
        <span className="text-[8rem] md:text-[10rem] font-black uppercase tracking-tight leading-none text-stroke-light opacity-40">
          Your Next Work
        </span>
      </div>

      <div className={`relative z-10 flex justify-center opacity-0 ${isVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: '0.1s' }}>
        <div className="w-[360px] rounded-2xl overflow-hidden bg-gradient-to-b from-foreground/70 to-foreground/90 shadow-2xl">
          <div className="p-6 pt-5">
            <p className="text-center text-primary-foreground/60 text-xs tracking-[0.3em] uppercase font-medium">{siteConfig.name}</p>
            <p className="text-center text-primary-foreground/50 text-[10px] tracking-widest uppercase mt-3">Level Up</p>
            <h3 className="text-center text-primary-foreground text-xl font-bold uppercase mt-1 tracking-wide leading-tight">
              With The Latest In<br />Workout Wear
            </h3>
          </div>
          <div className="relative">
            <img src={siteConfig.hero.desktop.image} alt="Featured outfit" className="w-full h-[380px] object-cover object-top" loading="lazy" width={640} height={896} />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
              <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">Fall / Winter<br />2024</span>
              <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wider text-right">● Shocks<br />Shoe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
