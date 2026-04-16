import featuredModel from "@/assets/featured-model.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DeliverySection = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
        <span className="text-[8rem] md:text-[10rem] font-black uppercase tracking-tight leading-none text-stroke-light opacity-40">
          For Your Ne
        </span>
        <span className="text-[8rem] md:text-[10rem] font-black uppercase tracking-tight leading-none text-stroke-light opacity-40">
          xt Workout
        </span>
      </div>

      <div className={`relative z-10 flex justify-center opacity-0 ${isVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: '0.1s' }}>
        <div className="w-[360px] rounded-2xl overflow-hidden bg-gradient-to-b from-foreground/60 to-foreground/85 shadow-2xl">
          <div className="p-5 flex items-start justify-between">
            <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wider leading-relaxed">
              Liner Short & Inner<br />Thermal
            </span>
            <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wider text-right leading-relaxed">
              12/08/2024<br />Delivery
            </span>
          </div>
          <div className="relative">
            <img src={featuredModel} alt="Delivery feature" className="w-full h-[350px] object-cover object-top" loading="lazy" width={640} height={896} />
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

export default DeliverySection;
