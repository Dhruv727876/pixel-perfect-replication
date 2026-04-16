import { useCart } from "@/hooks/use-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CartSidebar = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-900 transition-all relative group shadow-lg active:scale-95">
          <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary-custom text-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white shadow-sm">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-[480px] flex flex-col p-0 border-none bg-white shadow-[-20px_0_80px_rgba(0,0,0,0.1)]">
        {/* Editorial Header */}
        <div className="p-8 pb-4">
          <SheetHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-4xl font-display font-black tracking-tighter uppercase italic leading-none">
                VEXO ARCHIVE
              </SheetTitle>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300">Bag // 2026</span>
            </div>
            <SheetDescription className="text-xs font-bold uppercase tracking-widest text-neutral-400">
               Current Selection: {items.length} {items.length === 1 ? 'item' : 'items'}
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 overflow-hidden px-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative w-32 h-32 bg-neutral-50 rounded-full flex items-center justify-center group">
                 <div className="absolute inset-0 bg-neutral-100 rounded-full scale-110 animate-pulse" />
                 <ShoppingBag size={48} className="text-neutral-200 relative z-10" />
              </div>
              <div className="space-y-2">
                <p className="font-display font-black text-2xl uppercase tracking-tighter">Your Bag is Empty</p>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest leading-loose max-w-[240px] mx-auto">
                   Explore the latest performance innovations to start your selection.
                </p>
              </div>
              <SheetClose asChild>
                 <Button variant="outline" className="rounded-full px-8 text-xs font-black uppercase tracking-widest border-2">Return to Catalog</Button>
              </SheetClose>
            </div>
          ) : (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-10 py-4">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div 
                      layout
                      key={item.id} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-6 relative group"
                    >
                      <div className="w-28 h-36 bg-neutral-50 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-100 italic transition-transform group-hover:scale-[1.02]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary-custom">{item.category}</span>
                             <button
                               onClick={() => removeItem(item.id)}
                               className="text-neutral-300 hover:text-red-500 transition-colors"
                             >
                               <X size={18} strokeWidth={2.5} />
                             </button>
                          </div>
                          <h4 className="font-display font-black text-lg leading-tight uppercase tracking-tight pr-4">
                             {item.name}
                          </h4>
                          <div className="flex items-center gap-2">
                             <span className="text-[8px] font-black text-neutral-300 uppercase tracking-widest">Atelier ID // 00{item.id.slice(-1)}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-end">
                          <div className="flex items-center bg-neutral-50 rounded-full p-1 border border-neutral-100">
                            <button
                               onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                               className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-full transition-all active:scale-90"
                            >
                               <Minus size={14} strokeWidth={2.5} />
                            </button>
                            <span className="w-10 text-center text-xs font-black italic">{item.quantity}</span>
                            <button
                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
                               className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-full transition-all active:scale-90"
                            >
                               <Plus size={14} strokeWidth={2.5} />
                            </button>
                          </div>
                          <div className="text-right">
                             <p className="text-[9px] font-black text-neutral-300 uppercase tracking-widest mb-1 italic">Unit Price</p>
                             <p className="font-display font-black text-xl italic leading-none">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-auto p-8 space-y-6 bg-neutral-50/50">
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-1">Subtotal Value</span>
                   <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Inclusive of Atelier Tax</span>
                </div>
                <div className="text-right">
                   <span className="text-4xl font-display font-black tracking-tighter italic leading-none">
                      ${subtotal.toFixed(2)}
                   </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <SheetClose asChild>
                  <Button
                    onClick={() => navigate("/checkout")}
                    className="w-full h-16 rounded-2xl bg-black hover:bg-neutral-900 text-white font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-2xl active:scale-[0.98] group"
                  >
                    Proceed to Archive Checkout
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SheetClose>
                
                <p className="text-[9px] font-bold text-neutral-400 text-center uppercase tracking-[0.3em]">
                   VEXO Standard Shipping // Arrives in 3 — 5 Days
                </p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
