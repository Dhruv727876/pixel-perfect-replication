import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { CreditCard, Truck, ShieldCheck, ArrowLeft } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    cardNum: "",
    expiry: "",
    cvv: ""
  });

  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return acc + price * item.quantity;
  }, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Your bag is empty</h2>
        <Button onClick={() => navigate("/")} className="rounded-full px-8">Continue Shopping</Button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please sign in to place your order");
      navigate("/auth");
      return;
    }

    // Validation
    const requiredFields = ['firstName', 'lastName', 'address', 'city', 'zip'];
    const missingFields = requiredFields.filter(f => !formData[f as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast.error("Please fill in all shipping details");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const newOrder: Order = {
        id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString(),
        items: [...items],
        total: total,
        status: 'Processing' as const
      };

      addOrder(newOrder);
      clearCart();
      setIsProcessing(false);

      toast.success("Order placed successfully!");
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="bg-card rounded-3xl overflow-hidden shadow-sm min-h-[90vh]">
          <Navbar />
          <div className="mx-6 border-t border-border/60" />

          <div className="p-8 md:p-12">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to shop
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Shipping & Payment Form */}
              <div className="lg:col-span-7 space-y-8">
                <section className="animate-fade-up">
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="text-primary" size={20} />
                    <h3 className="text-xl font-bold uppercase tracking-tight">Shipping Information</h3>
                  </div>
                  <form className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <Label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">First Name</Label>
                      <Input id="firstName" placeholder="John" className="rounded-xl py-6" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <Label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="rounded-xl py-6" value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Address</Label>
                      <Input id="address" placeholder="123 Street Name" className="rounded-xl py-6" value={formData.address} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">City</Label>
                      <Input id="city" placeholder="New Delhi" className="rounded-xl py-6" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ZIP Code</Label>
                      <Input id="zip" placeholder="110001" className="rounded-xl py-6" value={formData.zip} onChange={handleInputChange} required />
                    </div>
                  </form>
                </section>

                <section className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="text-primary" size={20} />
                    <h3 className="text-xl font-bold uppercase tracking-tight">Payment Method</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-2 border-primary bg-primary/5 p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CreditCard size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Credit / Debit Card</p>
                          <p className="text-xs text-muted-foreground">Secure payment via Stripe</p>
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full border-4 border-primary" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNum" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Card Number</Label>
                      <Input id="cardNum" placeholder="**** **** **** ****" className="rounded-xl py-6" value={formData.cardNum} onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="rounded-xl py-6" value={formData.expiry} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">CVV</Label>
                        <Input id="cvv" placeholder="***" className="rounded-xl py-6" value={formData.cvv} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-5">
                <Card className="rounded-3xl border-none bg-muted/30 sticky top-8 p-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-black uppercase tracking-tight">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-16 h-16 bg-muted rounded-xl overflow-hidden flex-shrink-0 border border-border/40">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold leading-tight line-clamp-1 uppercase">{item.name}</p>
                            <p className="text-[10px] text-muted-foreground uppercase">{item.quantity} × {item.price}</p>
                          </div>
                          <p className="text-xs font-bold">₹{(parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-border/40" />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">Subtotal</span>
                        <span className="font-bold">₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">Shipping</span>
                        <span className="font-bold text-green-600 uppercase">Free</span>
                      </div>
                      <Separator className="my-2 bg-border/40" />
                      <div className="flex justify-between text-lg items-center pt-2">
                        <span className="font-bold text-sm uppercase tracking-widest">Total</span>
                        <span className="text-2xl font-black tracking-tight">₹{total.toLocaleString()}</span>
                      </div>
                    </div>

                    <Button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="w-full rounded-full py-8 text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl shadow-primary/20"
                    >
                      {isProcessing ? "Processing..." : "Place Order"}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      <ShieldCheck size={14} className="text-green-600" /> Secure Checkout Guaranteed
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
