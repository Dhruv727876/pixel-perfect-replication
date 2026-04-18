import { ArrowLeft, User, Mail, Box, PackageCheck, LogOut, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import FooterTapedDesign from "@/components/ui/footer-taped-design";

const MobileProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-vexo-background p-6">
        <div className="text-center flex flex-col items-center gap-6">
          <div className="size-20 bg-vexo-surface-container flex items-center justify-center rounded-2xl">
            <User className="size-10 text-vexo-primary opacity-20" />
          </div>
          <h1 className="text-4xl font-headline font-black uppercase italic text-vexo-on-background leading-none">Authentication<br/>Required</h1>
          <Link to="/auth" className="w-full bg-vexo-inverse-surface text-white py-4 px-12 font-headline font-black uppercase tracking-widest text-center shadow-lg">
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-vexo-background font-body text-vexo-on-background min-h-screen pb-32">
       {/* Header */}
       <header className="bg-vexo-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-black/5">
        <nav className="flex justify-between items-center px-6 py-4">
          <Link to="/">
            <ArrowLeft className="w-6 h-6 text-vexo-primary" />
          </Link>
          <div className="font-headline italic uppercase tracking-tighter text-base font-black text-vexo-on-background">
            IDENTITY
          </div>
          <button 
            onClick={() => { logout(); navigate("/"); }}
            className="text-vexo-error"
          >
            <LogOut className="size-5" />
          </button>
        </nav>
      </header>

      <main className="pt-24 px-6 flex flex-col gap-10">
        {/* Profile Card */}
        <section className="bg-vexo-inverse-surface text-white p-8 relative overflow-hidden">
          <User className="absolute -bottom-8 -right-8 size-48 text-white/5 rotate-12" />
          <div className="flex flex-col gap-6 relative z-10">
            <div className="size-16 bg-vexo-primary-container flex items-center justify-center rounded-xl">
              <User className="size-8 text-vexo-on-primary-fixed" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-4xl font-extrabold italic uppercase tracking-tighter leading-none">{user.name}</h2>
              <p className="font-headline text-[10px] font-bold text-vexo-primary-container uppercase tracking-[0.3em] flex items-center gap-2">
                <Mail className="size-3" /> {user.email}
              </p>
            </div>
            <div className="flex gap-4 border-t border-white/10 pt-6 mt-2">
              <div className="flex flex-col">
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Status</span>
                <span className="text-xs font-black italic uppercase text-vexo-primary-container">PRO VETERAN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Joined</span>
                <span className="text-xs font-black italic uppercase">APR 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Orders */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-black italic uppercase tracking-tighter flex items-center gap-2">
              <Box className="size-5 text-vexo-primary" />
              DEPLOYMENTS
            </h2>
            <span className="bg-vexo-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{user.orders.length} TOTAL</span>
          </div>

          {user.orders.length === 0 ? (
            <div className="bg-vexo-surface-container p-12 text-center flex flex-col items-center gap-4">
              <PackageCheck className="size-12 text-vexo-on-surface-variant opacity-20" />
              <p className="text-sm font-bold uppercase tracking-widest text-vexo-on-surface-variant/60">No field data retrieved yet.</p>
              <Link to="/" className="text-vexo-primary font-headline font-black italic uppercase tracking-widest border-b-2 border-vexo-primary">Commence Training</Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {user.orders.map((order) => (
                <div key={order.id} className="bg-vexo-surface-container-low p-6 flex flex-col gap-4 group">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="font-headline text-[10px] font-black italic uppercase text-vexo-primary tracking-widest">{order.id}</span>
                      <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">{order.date}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-headline text-xl font-black italic uppercase tracking-tighter">₹{order.total.toLocaleString()}</span>
                      <span className="bg-vexo-primary-container text-vexo-on-primary-fixed text-[8px] font-black uppercase px-2 py-0.5 mt-1 tracking-widest">{order.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="size-16 flex-shrink-0 bg-vexo-surface-container-high overflow-hidden rounded-lg">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center justify-between text-vexo-primary font-headline text-[10px] font-bold uppercase tracking-widest border-t border-vexo-outline-variant pt-4 mt-2">
                    RETRIEVE TRANSCRIPT
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Support Section */}
        <section className="flex flex-col gap-2">
           {[
            "MANAGE SUBSCRIPTION",
            "LAB PRIVILEGES",
            "RECOVERY PORTAL",
            "FIELD SUPPORT"
           ].map(link => (
            <div key={link} className="bg-vexo-surface-container p-5 flex justify-between items-center font-headline text-xs font-bold uppercase tracking-[0.2em] italic">
              {link}
              <ChevronRight size={14} className="opacity-20" />
            </div>
           ))}
        </section>
      </main>

      <FooterTapedDesign />
      <MobileBottomNav />
    </div>
  );
};

export default MobileProfile;
