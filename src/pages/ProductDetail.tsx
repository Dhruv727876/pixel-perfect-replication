import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Star, Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

import MobilePDP from "./MobilePDP";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find((p) => p.id === id);

  if (isMobile) {
    return <MobilePDP />;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button variant="ghost" onClick={() => navigate("/")} className="text-sm underline text-muted-foreground hover:text-foreground transition-colors">
            Back to shop
          </Button>
        </div>
      </div>
    );
  }

  const addToCart = (silent = false) => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return false;
    }

    // Add multiple quantities
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }

    if (!silent) toast.success(`${product.name} added to cart!`);
    return true;
  };

  const handleBuyNow = () => {
    if (addToCart(true)) {
      navigate("/checkout");
    }
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="bg-card rounded-3xl overflow-hidden shadow-sm min-h-[90vh]">
          <Navbar />
          <div className="mx-6 border-t border-border/60" />

          {/* Product content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 animate-fade-in relative">
            {/* Image */}
            <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[600px] overflow-hidden p-8">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-muted group cursor-crosshair">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute top-12 left-12">
                <span className="bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-5 py-2.5 rounded-full uppercase shadow-lg shadow-primary/20">
                  {product.tag}
                </span>
              </div>
              <button className="absolute top-12 right-12 bg-white/90 dark:bg-black/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl group border border-border/40">
                <Heart size={18} className="text-foreground transition-colors group-hover:text-red-500" />
              </button>
            </div>

            {/* Details */}
            <div className="px-8 md:px-16 py-8 md:py-16 flex flex-col justify-center max-w-2xl bg-gradient-to-br from-card to-muted/10">
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-black border-l-2 border-primary pl-3">{product.category}</p>
                </div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">{product.name}</h2>
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className={i < 4 ? "fill-primary text-primary" : "text-border"} />
                    ))}
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-muted-foreground/60">Verified — 128 Reviews</span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <p className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-5xl font-black tracking-tighter italic">{product.price}</p>
                  <p className="text-xs text-muted-foreground font-bold line-through opacity-50 uppercase tracking-widest">Inclusive of taxes</p>
                </div>
              </div>

              {/* Color selector */}
              <div className="mb-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-muted-foreground">Select Edition — {product.colors[selectedColor]}</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(i)}
                      className={`px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase border-2 transition-all ${i === selectedColor
                          ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105"
                          : "bg-transparent text-foreground border-border hover:border-muted-foreground/50"
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selector */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Select Profile</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline transition-all">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-2xl text-xs font-black border-2 transition-all flex items-center justify-center ${selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105"
                          : "bg-card/50 text-foreground border-border hover:border-muted-foreground/50"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <div className="flex items-center bg-muted/50 rounded-2xl p-1 justify-between sm:w-[160px] border border-border/40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-card rounded-xl transition-all shadow-sm active:scale-90"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-black w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-card rounded-xl transition-all shadow-sm active:scale-90"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    onClick={() => addToCart()}
                    className="flex-1 rounded-2xl py-8 text-[11px] font-black tracking-[0.2em] uppercase border-2 hover:bg-primary/5 transition-all active:scale-95"
                  >
                    Add To Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    className="flex-1 rounded-2xl py-8 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-primary/40"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="px-8 py-20 bg-muted/20">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-black uppercase tracking-tight">You May Also Like</h3>
              <div className="h-px flex-1 mx-8 bg-border/40 hidden md:block" />
              <Button variant="outline" className="rounded-full border-2 font-bold text-[10px] tracking-widest uppercase px-6">View All</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="group cursor-pointer"
                  onClick={() => { navigate(`/product/${p.id}`); }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-card aspect-[3/4] mb-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-card/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 shadow-lg">
                        <Heart size={14} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-tight group-hover:text-primary transition-colors">{p.name}</h4>
                    <p className="text-[11px] font-bold text-muted-foreground/80 tracking-widest uppercase mt-1">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
