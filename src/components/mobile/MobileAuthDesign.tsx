import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileAuthDesign() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter an email");
      return;
    }
    // Simulate auth
    login(formData.email, formData.firstName || "Athlete");
    toast.success(isLogin ? "IDENTITY VERIFIED" : "CREDENTIALS CREATED");
    navigate("/");
  };

  return (
    <div className="bg-vexo-background font-body text-vexo-on-background min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Kinetic Element */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
          <div className="absolute -top-20 -right-20 font-headline text-[40rem] font-black italic uppercase leading-none select-none">
            {siteConfig.name}
          </div>
      </div>

      <div className="flex-1 flex flex-col p-8 z-10">
        <header className="flex items-center justify-between mb-12">
           <button
            onClick={() => navigate("/")}
            className="size-12 bg-vexo-surface-container flex items-center justify-center transition-transform active:scale-90"
          >
            <ArrowLeft className="w-5 h-5 text-vexo-primary" />
          </button>
          <div className="font-headline italic text-2xl font-black uppercase tracking-tighter text-vexo-on-background">
            {siteConfig.name}
          </div>
          <div className="size-12 opacity-0" />
        </header>

        <div className="flex flex-col gap-2 mb-10">
          <span className="text-vexo-primary font-headline text-[10px] font-black tracking-[0.4em] uppercase">Phase 01 // Authentication</span>
          <h1 className="font-headline text-5xl font-extrabold italic uppercase tracking-tighter leading-[0.85]">
            {isLogin ? <>Log In<br/>to Hub</> : <>Join the<br/>Program</>}
          </h1>
          <p className="text-sm font-medium opacity-60 mt-2">
            {isLogin ? "Access your performance data and lab retrievals." : "Engineered for the elite. Start your data-driven journey."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            {!isLogin && (
              <div className="flex flex-col gap-1 mb-4">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest opacity-40 px-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="ATHLETE_NAME"
                  className="bg-vexo-surface-container-low border-none h-14 px-4 font-headline font-bold text-sm tracking-widest placeholder:text-vexo-outline uppercase focus:ring-2 focus:ring-vexo-primary"
                />
              </div>
            )}
            
            <div className="flex flex-col gap-1 mb-4">
              <label className="font-headline text-[10px] font-bold uppercase tracking-widest opacity-40 px-1">Email ID</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={`USER@HUB.${siteConfig.name.toUpperCase()}`}
                className="bg-vexo-surface-container-low border-none h-14 px-4 font-headline font-bold text-sm tracking-widest placeholder:text-vexo-outline uppercase focus:ring-2 focus:ring-vexo-primary"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-headline text-[10px] font-bold uppercase tracking-widest opacity-40 px-1">Access Key</label>
              <input
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="********"
                className="bg-vexo-surface-container-low border-none h-14 px-4 font-headline font-bold text-sm tracking-widest placeholder:text-vexo-outline focus:ring-2 focus:ring-vexo-primary"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-vexo-inverse-surface text-white h-16 font-headline font-black text-xl uppercase tracking-[0.2em] italic flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
          >
            {isLogin ? "Authorize" : "Deploy Profile"}
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-vexo-outline-variant/20" />
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest opacity-30 italic">Third Party Login</span>
            <div className="h-px flex-1 bg-vexo-outline-variant/20" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-vexo-surface-container h-14 flex items-center justify-center gap-2 font-headline text-[10px] font-bold uppercase tracking-widest active:scale-95 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
               Google
            </button>
            <button className="bg-vexo-surface-container h-14 flex items-center justify-center gap-2 font-headline text-[10px] font-bold uppercase tracking-widest active:scale-95 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
               Meta
            </button>
          </div>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-center gap-2 font-headline text-[10px] font-black uppercase tracking-widest italic opacity-40">
          {isLogin ? "Status Unknown?" : "Already Authorized?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-vexo-primary border-b border-vexo-primary"
          >
            {isLogin ? "Register Now" : "Sign In Hub"}
          </button>
        </div>
      </div>
    </div>
  );
}
