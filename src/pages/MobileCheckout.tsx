import { ArrowLeft, CreditCard, ShieldCheck, Truck, ShoppingBag, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { toast } from "sonner";
import FooterTapedDesign from "@/components/ui/footer-taped-design";

const MobileCheckout = () => {
  const navigate = useNavigate();
  const { items, removeItem, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return acc + price * item.quantity;
  }, 0);
  
  const total = subtotal;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      setIsProcessing(false);
      navigate("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-vexo-background flex flex-col items-center justify-center p-6 text-center">
        <ShoppingBag className="w-16 h-16 text-vexo-surface-container-highest mb-6" />
        <h2 className="font-headline text-3xl font-black uppercase italic tracking-tighter mb-4">Your Bag is Empty</h2>
        <p className="text-vexo-on-surface-variant font-medium mb-8">Ready to upgrade your performance? Explore the Lab for elite gear.</p>
        <Link to="/" className="w-full bg-vexo-primary-container text-vexo-on-primary-fixed font-headline font-black py-4 uppercase tracking-widest text-center shadow-lg">
          Explore Labs
        </Link>
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
            Checkout
          </div>
          <div className="size-6" />
        </nav>
      </header>

      <main className="pt-24 px-6 flex flex-col gap-8">
        {/* Order Summary */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-black italic uppercase tracking-tighter">Summary</h2>
            <span className="bg-vexo-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{items.length} Items</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-vexo-surface-container-low p-3 relative">
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute -top-1 -right-1 size-6 bg-vexo-inverse-surface text-white rounded-full flex items-center justify-center border-2 border-vexo-background"
                >
                  <X className="w-3 h-3" />
                </button>
                <div className="w-20 h-24 bg-vexo-surface-container-highest flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-headline font-bold text-xs uppercase leading-none mb-1">{item.name}</h3>
                    <p className="text-[10px] text-vexo-on-surface-variant uppercase tracking-widest">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold opacity-60">QTY: {item.quantity}</span>
                    <span className="font-headline font-black text-vexo-primary">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Totals */}
        <div className="bg-vexo-inverse-surface text-white p-8 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Subtotal</span>
            <span className="font-headline text-lg font-bold">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Shipping</span>
            <span className="text-[10px] font-black text-vexo-primary-container uppercase tracking-widest italic">Complimentary</span>
          </div>
          <div className="h-px bg-white/10 my-2" />
          <div className="flex justify-between items-center">
            <span className="font-headline text-lg font-black italic uppercase tracking-tighter text-vexo-primary-container">Total</span>
            <span className="font-headline text-3xl font-black italic">₹{total.toLocaleString()}</span>
          </div>
        </div>

        {/* Shipping Form Simulation */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline text-2xl font-black italic uppercase tracking-tighter flex items-center gap-2">
            <Truck className="w-5 h-5 text-vexo-primary" />
            Shipping
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <input className="col-span-1 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="First Name" />
            <input className="col-span-1 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="Last Name" />
            <input className="col-span-2 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="Street Address" />
            <input className="col-span-1 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="City" />
            <input className="col-span-1 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="Postcode" />
          </div>
        </section>

        {/* Payment Simulation */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline text-2xl font-black italic uppercase tracking-tighter flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-vexo-primary" />
            Payment
          </h2>
          <div className="flex flex-col gap-2">
            <input className="bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="Card Number" />
            <div className="grid grid-cols-2 gap-2">
              <input className="col-span-1 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="MM / YY" />
              <input className="col-span-1 bg-vexo-surface-container-low border-none py-4 px-4 font-headline font-bold text-[10px] tracking-widest placeholder:text-vexo-outline uppercase" placeholder="CVV" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col gap-4 mt-4">
          <button 
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="w-full bg-vexo-primary-container text-vexo-on-primary-fixed h-20 font-headline font-black text-2xl uppercase tracking-tighter italic flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-2xl"
          >
            {isProcessing ? "Processing..." : "Complete Order"}
            {!isProcessing && <ShieldCheck className="w-6 h-6" />}
          </button>
          <p className="text-[10px] text-center font-bold uppercase tracking-widest opacity-40">Secure Encrypted Transaction</p>
        </div>
      </main>

      <FooterTapedDesign />
    </div>
  );
};

export default MobileCheckout;
