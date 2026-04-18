import { ArrowLeft, Beaker, Zap, Activity, ShieldCheck, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import FooterTapedDesign from "@/components/ui/footer-taped-design";
import { siteConfig } from "@/config/site";

const LabCard = ({ icon: Icon, title, desc, tag, dark = false }: any) => (
  <div className={`p-8 flex flex-col gap-6 relative overflow-hidden ${dark ? 'bg-vexo-inverse-surface text-white' : 'bg-vexo-surface-container'}`}>
    <div className={`size-12 flex items-center justify-center ${dark ? 'bg-vexo-primary-container text-vexo-on-primary-fixed' : 'bg-vexo-inverse-surface text-white'}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex flex-col gap-2 relative z-10">
      <span className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 italic">{tag}</span>
      <h3 className="font-headline text-2xl font-black italic uppercase tracking-tighter leading-none">{title}</h3>
      <p className="text-sm leading-relaxed opacity-80 font-medium">{desc}</p>
    </div>
    {dark && <Zap className="absolute -bottom-4 -right-4 size-32 text-white/5 rotate-12" />}
  </div>
);

const MobileLab = () => {
  return (
    <div className="bg-vexo-background font-body text-vexo-on-background selection:bg-vexo-primary-container selection:text-vexo-on-primary-fixed min-h-screen pb-32">
      {/* Header */}
      <header className="bg-vexo-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-black/5">
        <nav className="flex justify-between items-center px-6 py-4">
          <Link to="/">
            <ArrowLeft className="w-6 h-6 text-vexo-primary" />
          </Link>
          <div className="font-headline italic uppercase tracking-tighter text-xl font-black text-vexo-on-background">
            THE LAB
          </div>
          <div className="size-6" />
        </nav>
      </header>

      <main className="pt-24 px-6 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="flex flex-col gap-4">
          <span className="text-vexo-primary font-headline text-xs font-black tracking-[0.4em] uppercase">Phase 04 // Deployment</span>
          <h1 className="font-headline text-6xl font-black italic uppercase tracking-tighter leading-[0.8] mb-2">
            RESEARCH &<br/>RECOVERY
          </h1>
          <p className="text-lg font-medium opacity-80 leading-tight">
            Where elite textile engineering meets kinetic data analysis. Our field-testing facility in the {siteConfig.contact.address}.
          </p>
        </section>

        {/* Lab Stats */}
        <div className="grid grid-cols-2 gap-px bg-vexo-outline-variant/20">
          <div className="bg-vexo-surface p-6 flex flex-col gap-1">
            <span className="font-headline text-3xl font-black italic text-vexo-primary">4,200+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Hours Lab Tested</span>
          </div>
          <div className="bg-vexo-surface p-6 flex flex-col gap-1">
            <span className="font-headline text-3xl font-black italic text-vexo-primary">128</span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Pro Athletes</span>
          </div>
        </div>

        {/* Research Areas */}
        <section className="flex flex-col gap-1">
          <LabCard 
            icon={Activity}
            title="Kinetic Warp"
            tag="Aero-Dynamics"
            desc="Analyzing muscle oscillation during peak anaerobic output to reduce parasitic energy loss."
          />
          <LabCard 
            icon={ShieldCheck}
            title="Nano-Shield"
            tag="Textile Tech"
            desc="Developing membrane technology that provides 100% weather resistance without sacrificing breathability."
            dark={true}
          />
          <LabCard 
            icon={Microscope}
            title="Cellular Fix"
            tag="Recovery"
            desc="Infusing infrared-reflective minerals into fibers to accelerate muscle oxygenation."
          />
        </section>

        {/* Lab Contact */}
        <section className="bg-vexo-primary-container p-8 flex flex-col gap-6">
          <h2 className="font-headline text-3xl font-black italic uppercase tracking-tighter text-vexo-on-primary-fixed leading-[0.9]">Apply for<br/>Beta Testing</h2>
          <p className="text-sm font-medium text-vexo-on-primary-fixed/80">Join our elite group of field testers and get access to unreleased Lab prototypes.</p>
          <button className="bg-vexo-inverse-surface text-white font-headline font-black py-4 uppercase tracking-widest transition-transform active:scale-95">
            Submit Credentials
          </button>
        </section>
      </main>

      <FooterTapedDesign />

      <MobileBottomNav />
    </div>
  );
};

export default MobileLab;
