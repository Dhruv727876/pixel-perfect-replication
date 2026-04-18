import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { Box, User, Mail, Calendar, ChevronRight, PackageCheck } from "lucide-react";

import { useEffect, useState } from "react";
import MobileProfile from "./MobileProfile";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileProfile />;
  }

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="bg-card rounded-3xl overflow-hidden shadow-sm min-h-[90vh]">
          <Navbar />
          <div className="mx-6 border-t border-border/60" />

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* User Info */}
              <div className="lg:col-span-4 space-y-8 animate-fade-up">
                <div className="text-center md:text-left space-y-4">
                  <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto md:mx-0 shadow-xl shadow-primary/20">
                    <User size={48} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight">{user.name}</h2>
                    <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
                      <Mail size={14} /> {user.email}
                    </p>
                  </div>
                </div>

                <Card className="rounded-3xl border-none bg-muted/30">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Account Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium uppercase tracking-wider">Member Since</span>
                      <span className="text-xs font-bold">April 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium uppercase tracking-wider">Total Orders</span>
                      <span className="text-xs font-bold">{user.orders.length}</span>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={() => { logout(); navigate("/"); }} 
                  variant="outline" 
                  className="w-full rounded-full border-2 py-6 text-xs font-bold tracking-[0.2em] uppercase text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                >
                  Logout Account
                </Button>
              </div>

              {/* Orders History */}
              <div className="lg:col-span-8 space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Box className="text-primary" size={24} />
                    <h3 className="text-2xl font-black uppercase tracking-tight">Order History</h3>
                  </div>
                  {user.orders.length > 0 && <Badge variant="secondary" className="rounded-full px-4">{user.orders.length} Orders</Badge>}
                </div>

                {user.orders.length === 0 ? (
                  <div className="bg-muted/20 rounded-3xl p-12 text-center border-2 border-dashed border-border/60">
                    <PackageCheck size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                    <h4 className="text-lg font-bold mb-2">No orders yet</h4>
                    <p className="text-sm text-muted-foreground mb-6">Your style journey hasn't started yet. Let's change that!</p>
                    <Button onClick={() => navigate("/")} className="rounded-full px-8">Shop New Arrivals</Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {user.orders.map((order) => (
                      <Card key={order.id} className="rounded-2xl border-none bg-muted/30 overflow-hidden hover:shadow-md transition-all group">
                        <div className="p-6">
                          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{order.id}</p>
                              <div className="flex items-center gap-2 text-sm font-bold">
                                <Calendar size={14} className="text-muted-foreground" /> {order.date}
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Total</p>
                                <p className="text-lg font-black tracking-tight">${order.total.toFixed(2)}</p>
                              </div>
                              <Badge className="bg-green-600/10 text-green-600 hover:bg-green-600/20 rounded-full px-4 border-none font-bold uppercase text-[10px] tracking-widest">
                                {order.status}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                            {order.items.map((item, idx) => (
                              <div key={`${order.id}-${idx}`} className="w-16 h-16 rounded-xl overflow-hidden bg-card flex-shrink-0 border border-border/40">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-primary/5 px-6 py-3 flex justify-between items-center group-hover:bg-primary/10 transition-colors cursor-pointer">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">View Details</span>
                          <ChevronRight size={14} className="text-primary" />
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
