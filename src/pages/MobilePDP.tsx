import { ArrowLeft, ShoppingBag, Droplets, Wind, RefreshCw, Truck, MoveRight, Bolt, Star } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "@/lib/data";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { useState } from "react";
import FooterTapedDesign from "@/components/ui/footer-taped-design";
import { siteConfig } from "@/config/site";

const MobilePDP = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState("M");

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-vexo-background">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-black uppercase italic text-vexo-on-background mb-4">Product Not Found</h1>
          <Link to="/" className="text-vexo-primary underline uppercase font-headline font-bold">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    navigate("/checkout");
  };

  return (
    <div className="bg-vexo-background font-body text-vexo-on-background selection:bg-vexo-primary-container selection:text-vexo-on-primary-fixed min-h-screen pb-24">
      {/* Header */}
      <header className="bg-vexo-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-black/5">
        <nav className="flex justify-between items-center px-6 py-4">
          <Link to="/">
            <ArrowLeft className="w-6 h-6 text-vexo-primary" />
          </Link>
          <div className="font-headline italic uppercase tracking-tighter text-base font-black text-vexo-on-background truncate px-4 max-w-[200px]">
            {product.name}
          </div>
          <Link to="/checkout" className="relative cursor-pointer">
            <ShoppingBag className="w-6 h-6 text-vexo-on-background" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-vexo-primary-container text-vexo-on-primary-fixed text-[8px] font-black px-1 rounded-full min-w-[14px] h-[14px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </header>

      <main className="pt-20">
        <div className="max-w-md mx-auto">
          {/* Hero Gallery */}
          <section className="relative aspect-[4/5] bg-vexo-surface-container-high overflow-hidden">
            <img 
              alt={product.name} 
              className="w-full h-full object-cover" 
              src={product.image}
            />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-vexo-inverse-surface text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase italic">
                {product.tag} // {product.category}
              </span>
            </div>
          </section>

          {/* Identity Section */}
          <div className="px-6 py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <h1 className="font-headline text-4xl leading-[0.9] font-extrabold italic uppercase tracking-tighter text-vexo-on-background">
                  {product.name}
                </h1>
                <span className="font-headline text-2xl font-black text-vexo-primary whitespace-nowrap">{product.price}</span>
              </div>
              <p className="font-headline text-[10px] font-bold text-vexo-primary uppercase tracking-[0.3em] mt-2">Zero-Gravity Compression Technology</p>
            </div>

            {/* Description Block */}
            <div className="bg-vexo-inverse-surface text-white p-8 relative overflow-hidden">
              <Bolt className="absolute top-4 right-4 text-white/10 w-16 h-16 fill-current" />
              <p className="text-lg leading-relaxed font-medium relative z-10">
                {product.description || "Engineered for elite performance. Designed to maximize blood flow and muscle stabilization during high-intensity sessions."}
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
                {(product.sizes || ['S', 'M', 'L', 'XL']).map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`h-14 flex items-center justify-center border-2 font-headline font-bold transition-all ${selectedSize === size ? 'border-vexo-primary bg-vexo-primary-container text-vexo-on-primary-fixed' : 'border-vexo-surface-variant hover:border-vexo-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-vexo-inverse-surface text-white h-16 font-headline font-black text-xl uppercase tracking-widest italic flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
              >
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="w-full bg-vexo-primary-container text-vexo-on-primary-fixed h-20 font-headline font-black text-2xl uppercase tracking-tighter italic flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-xl"
              >
                Buy Now
                <MoveRight className="w-6 h-6" />
              </button>
            </div>

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
        </div>
      </main>

      <FooterTapedDesign />
    </div>
  );
};

export default MobilePDP;
