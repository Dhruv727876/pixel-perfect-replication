import { ArrowLeft, ShoppingBag, Droplets, Wind, RefreshCw, Truck, MoveRight, Bolt } from "lucide-react";
import { Link } from "react-router-dom";

const MobilePDP = () => {
  return (
    <div className="bg-vexo-background font-body text-vexo-on-background selection:bg-vexo-primary-container selection:text-vexo-on-primary-fixed min-h-screen pb-24">
      {/* Header */}
      <header className="bg-vexo-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-black/5">
        <nav className="flex justify-between items-center px-6 py-4">
          <Link to="/collections">
            <ArrowLeft className="w-6 h-6 text-vexo-primary" />
          </Link>
          <div className="font-headline italic uppercase tracking-tighter text-xl font-black text-vexo-on-background">
            APEX CORE
          </div>
          <ShoppingBag className="w-6 h-6 text-vexo-on-background" />
        </nav>
      </header>

      <main className="pt-20">
        <div className="max-w-md mx-auto">
          {/* Hero Gallery */}
          <section className="relative aspect-[4/5] bg-vexo-surface-container-high overflow-hidden">
            <img 
              alt="Apex Core Tights" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5bUHcSkHmylhpzThVmkuvYXq9Psb0MnZWHAjGH4H1ltRB5k1LBtbvP56_BwIbAxG6poZeENMq20jj0Q6lxpKUOiq331dnxccMntq9yXqo_aBbFyOnuyU942wBltRlyOJJNBnZiVhMWeXWNUT7M1GD9Q5YCFCEV3KhFEDsX6Rfr8dqOAo934_ySkuwHYvEcjgMyP29nRVd4BWU-1bQCiWPRM-X4vmmX4zhv_n2DEdHhoAiUIbx_9NnJpxFOeSrjqiq3GvJiy3zVE8s"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-vexo-inverse-surface text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase italic">V01 // SHIFT</span>
            </div>
          </section>

          {/* Identity Section */}
          <div className="px-6 py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between overflow-hidden">
                <h1 className="font-headline text-5xl leading-[0.9] font-extrabold italic uppercase tracking-tighter text-vexo-on-background">
                  Apex Core<br/>Tights
                </h1>
                <span className="font-headline text-2xl font-black text-vexo-primary">$185</span>
              </div>
              <p className="font-headline text-xs font-bold text-vexo-primary uppercase tracking-widest mt-2">Zero-Gravity Compression Technology</p>
            </div>

            {/* Description Block */}
            <div className="bg-vexo-inverse-surface text-white p-8 relative overflow-hidden">
              <Bolt className="absolute top-4 right-4 text-white/10 w-16 h-16 fill-current" />
              <p className="text-lg leading-relaxed font-medium relative z-10">
                Engineered for elite performance. The Apex Core utilizes our proprietary <span className="text-vexo-primary-container">Zero-Gravity Compression</span> to maximize blood flow and muscle stabilization.
              </p>
            </div>

            {/* Specs */}
            <div className="flex flex-col gap-1">
              {[
                { icon: <Droplets className="w-5 h-5" />, label: "Moisture-wicking" },
                { icon: <Wind className="w-5 h-5" />, label: "Precision-cut ventilation" },
                { icon: <RefreshCw className="w-5 h-5" />, label: "Eco-fiber blend" }
              ].map((spec) => (
                <div key={spec.label} className="flex items-center gap-4 bg-vexo-surface-container-low p-4">
                  <div className="bg-vexo-primary-container text-vexo-on-primary-fixed p-2 flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <span className="font-headline text-[10px] font-bold uppercase tracking-widest leading-none">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* Size Selector */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-vexo-on-surface-variant">Select Size</span>
                <button className="font-headline text-[10px] font-bold uppercase tracking-widest text-vexo-primary border-b border-vexo-primary">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button key={size} className={`h-14 flex items-center justify-center border-2 font-headline font-bold transition-all ${size === 'M' ? 'border-vexo-primary bg-vexo-primary-container text-vexo-on-primary-fixed' : 'border-vexo-surface-variant hover:border-vexo-primary'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action */}
            <button className="w-full bg-vexo-primary-container text-vexo-on-primary-fixed h-20 font-headline font-black text-2xl uppercase tracking-tighter italic flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-xl">
              Add to Cart
              <MoveRight className="w-6 h-6" />
            </button>

            {/* Footnotes */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-vexo-surface-variant">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-vexo-on-surface-variant" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-vexo-on-surface-variant">Global Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-vexo-on-surface-variant" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-vexo-on-surface-variant">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Science Section */}
          <section className="mt-16 px-6 pb-32">
            <span className="text-vexo-primary font-headline text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Science</span>
            <h2 className="font-headline text-4xl font-black italic uppercase tracking-tighter mb-8 max-w-[200px] leading-none">Kinetic Analysis</h2>
            
            <div className="flex flex-col gap-1">
              {[
                { num: "01", title: "Dynamic Warp", desc: "High-tensile fibers woven in a hex-pattern for multi-directional support." },
                { num: "02", title: "Thermal Mapping", desc: "Strategic laser perforations in high-heat zones for maximum airflow.", dark: true },
                { num: "03", title: "Apex Lock", desc: "Minimalist silicone-grip waistband prevents shifting during peak output." }
              ].map((item) => (
                <div key={item.num} className={`p-10 flex flex-col gap-4 ${item.dark ? 'bg-vexo-inverse-surface text-white' : 'bg-vexo-surface-container'}`}>
                  <span className={`font-headline text-4xl font-black ${item.dark ? 'text-vexo-primary/30' : 'text-vexo-outline-variant/30'}`}>{item.num}</span>
                  <h3 className={`font-headline text-xl font-bold uppercase ${item.dark ? 'text-vexo-primary-container' : ''}`}>{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MobilePDP;
