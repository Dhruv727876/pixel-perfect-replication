"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

export function SignupPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      if (!formData.email || !formData.password) {
        toast.error("Please fill in all fields");
        return;
      }
      login(formData.email);
      toast.success("Signed in successfully!");
    } else {
      if (!formData.email || !formData.password || !formData.firstName) {
        toast.error("Please fill in all fields");
        return;
      }
      login(formData.email, `${formData.firstName} ${formData.lastName}`);
      toast.success("Account created successfully!");
    }
    navigate("/");
  };

  return (
    <div className="w-full h-full min-h-screen bg-background flex items-center justify-center p-0 md:p-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl min-h-[80vh] bg-card rounded-none md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-border/50">
        {/* Left Panel */}
        <div className="flex-1 relative overflow-hidden md:block hidden min-h-[600px]">
          <div className="absolute top-8 left-8 z-20">
            <button
              onClick={() => navigate("/")}
              className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/40 transition-all border border-white/20 group"
            >
              <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop"
            alt="VEXO Collection"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
          />
          
          <div className="absolute bottom-12 left-12 z-20 max-w-sm">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Elevate Your <br /> Wardrobe.
            </h2>
            <p className="text-white/80 text-sm font-medium tracking-wide">
              Discover the latest in premium apparel and exclusive collections tailored for your lifestyle.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-card">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-foreground uppercase tracking-tighter mb-2">
              {isLogin ? "Welcome Back" : "Start Your Journey"}
            </h1>
            <p className="text-muted-foreground font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary/80 font-bold transition-colors ml-1 underline underline-offset-4"
              >
                {isLogin ? "Create one" : "Log in"}
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-5 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                    required={!isLogin}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-5 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full px-5 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="flex items-center space-x-3 py-2 pl-1">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary border-border/50 rounded focus:ring-primary bg-muted/30"
                  required
                />
                <label htmlFor="agreeToTerms" className="text-xs text-muted-foreground font-medium">
                  I agree to the{" "}
                  <button type="button" className="text-foreground font-bold hover:underline underline-offset-2">
                    Terms & Conditions
                  </button>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-5 px-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] mt-4"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
