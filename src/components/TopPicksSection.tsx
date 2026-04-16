import picksWinter from "@/assets/picks-winter.jpg";
import picksSummer from "@/assets/picks-summer.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TopPicksSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="px-8 py-16">
      <div ref={headerRef} className={`flex items-start justify-between mb-10 opacity-0 ${headerVisible ? 'animate-fade-up' : ''}`}>
        <div>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Our Top Picks</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-[1.05] tracking-tight">
            Top Workout Gear For<br />Peak Performance!
          </h2>
        </div>
        <p className="max-w-[220px] text-xs leading-relaxed text-muted-foreground mt-2">
          Discover the best of our collection, designed to power your workouts all year round
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-2 gap-6">
        <div className={`relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer opacity-0 ${cardsVisible ? 'animate-slide-left' : ''}`}>
          <img src={picksWinter} alt="Winter collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={640} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute top-6 right-6">
            <span className="text-xs tracking-wider text-primary-foreground/70 italic">01/WINTER<br />_2025</span>
          </div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-black uppercase leading-tight text-primary-foreground/90">
              Top<br />Workout<br />Gear For<br /><span className="text-primary-foreground/50">Peak<br />Performa<br />nce!</span>
            </h3>
          </div>
        </div>

        <div className={`relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer opacity-0 ${cardsVisible ? 'animate-slide-right' : ''}`} style={{ animationDelay: '0.15s' }}>
          <img src={picksSummer} alt="Summer collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={640} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute top-6 right-6">
            <span className="text-xs tracking-wider text-primary-foreground/70 italic">02/SUMMER<br />_2026</span>
          </div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-black uppercase leading-tight text-primary-foreground/90">
              Latest<br />Styles And<br /><span className="text-primary-foreground/50">Innovati</span>ons<br />In Workout<br /><span className="text-primary-foreground/50">Gear.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPicksSection;
