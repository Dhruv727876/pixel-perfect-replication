import { ShoppingBag, SlidersHorizontal, ArrowLeft } from "lucide-react";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import { Link } from "react-router-dom";
import { products } from "@/lib/data";
import { useState, useMemo } from "react";
import FooterTapedDesign from "@/components/ui/footer-taped-design";

import { useSearchParams } from "react-router-dom";

const MobileCollection = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<"ALL" | "NEW" | "BEST">("ALL");
  const [sortBy, setSortBy] = useState<"DEFAULT" | "PRICE_LOW" | "PRICE_HIGH">("DEFAULT");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sexFilter = searchParams.get("sex");
  const typeFilter = searchParams.get("type");

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by URL parameters first
    if (sexFilter) {
      result = result.filter(p => p.sex === sexFilter);
    }
    if (typeFilter) {
      if (typeFilter === "trending") result = result.filter(p => p.trending);
      else if (typeFilter === "seasonal") result = result.filter(p => p.seasonal);
      else if (typeFilter === "accessories") result = result.filter(p => p.category.toLowerCase().includes("accessories"));
    }

    // Secondary UI Filtering
    if (activeFilter === "NEW") {
      result = result.filter(p => p.tag?.toLowerCase() === "new" || p.seasonal);
    } else if (activeFilter === "BEST") {
      result = result.filter(p => p.trending);
    }

    // Sorting
    // ... (rest of sorting stays)
    if (sortBy === "PRICE_LOW") {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
        return priceA - priceB;
      });
    } else if (sortBy === "PRICE_HIGH") {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
        return priceB - priceA;
      });
    }

    return result;
  }, [activeFilter, sortBy]);

  const toggleSort = () => {
    if (sortBy === "DEFAULT") setSortBy("PRICE_LOW");
    else if (sortBy === "PRICE_LOW") setSortBy("PRICE_HIGH");
    else setSortBy("DEFAULT");
  };

  return (
    <div className="min-h-screen bg-vexo-surface font-body text-vexo-on-surface pb-24">
      {/* Header */}
      <header className="fixed top-0 w-full flex items-center justify-between px-6 h-20 backdrop-blur-md bg-vexo-surface/80 z-50">
        <Link to="/">
          <ArrowLeft className="w-6 h-6 text-vexo-on-surface" />
        </Link>
        <span className="text-xl font-black italic tracking-tighter text-vexo-inverse-surface font-headline uppercase tracking-widest">COLLECTIONS</span>
        <Link to="/checkout">
          <ShoppingBag className="w-6 h-6 text-vexo-on-surface" />
        </Link>
      </header>

      <main className="pt-24 px-4 max-w-md mx-auto">
        {/* Banner */}
        <section className="relative mb-8 h-48 overflow-hidden bg-vexo-inverse-surface group">
          <img 
            className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" 
            alt="Collection Banner"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h1 className="font-headline text-4xl font-black italic text-white leading-none tracking-tighter uppercase">
              Limitless<br/>Potential
            </h1>
            <div className="bg-vexo-primary-container inline-block px-2 py-1 mt-2 w-max">
              <span className="font-label text-[10px] font-bold tracking-widest text-vexo-on-primary-fixed uppercase">Performance Gear</span>
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <nav className="flex overflow-x-auto no-scrollbar space-x-1 mb-10 bg-vexo-surface-container-low p-1">
          <button 
            onClick={() => setActiveFilter("ALL")}
            className={`whitespace-nowrap px-6 py-2 font-label font-bold text-[11px] tracking-widest italic transition-all ${
              activeFilter === "ALL" 
                ? "bg-vexo-primary-container text-vexo-on-primary-fixed -skew-x-12" 
                : "text-vexo-on-surface opacity-40 hover:opacity-100"
            }`}
          >
            <span className={activeFilter === "ALL" ? "inline-block skew-x-12" : ""}>ALL ITEMS</span>
          </button>
          <button 
            onClick={() => setActiveFilter("NEW")}
            className={`whitespace-nowrap px-6 py-2 font-label font-bold text-[11px] tracking-widest italic transition-all ${
              activeFilter === "NEW" 
                ? "bg-vexo-primary-container text-vexo-on-primary-fixed -skew-x-12" 
                : "text-vexo-on-surface opacity-40 hover:opacity-100"
            }`}
          >
            <span className={activeFilter === "NEW" ? "inline-block skew-x-12" : ""}>NEW ARRIVALS</span>
          </button>
          <button 
            onClick={() => setActiveFilter("BEST")}
            className={`whitespace-nowrap px-6 py-2 font-label font-bold text-[11px] tracking-widest italic transition-all ${
              activeFilter === "BEST" 
                ? "bg-vexo-primary-container text-vexo-on-primary-fixed -skew-x-12" 
                : "text-vexo-on-surface opacity-40 hover:opacity-100"
            }`}
          >
            <span className={activeFilter === "BEST" ? "inline-block skew-x-12" : ""}>BEST SELLERS</span>
          </button>
        </nav>

        {/* Technical Info */}
        <div className="flex items-center justify-between mb-4 border-b border-vexo-on-surface/5 pb-2">
          <span className="font-label text-[10px] font-bold text-vexo-primary italic tracking-widest uppercase">
            {activeFilter === "ALL" ? "FULL CATALOG" : activeFilter === "NEW" ? "LATEST DROPS" : "MOST WANTED"} // PHASE 02
          </span>
          <button 
            onClick={toggleSort}
            className="flex items-center gap-2 group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {sortBy === "DEFAULT" ? "Sort" : sortBy === "PRICE_LOW" ? "Price: Low-High" : "Price: High-Low"}
            </span>
            <SlidersHorizontal className={`w-4 h-4 transition-transform ${sortBy !== "DEFAULT" ? "text-vexo-primary scale-110" : "text-vexo-on-surface"}`} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 min-h-[400px]">
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product, index) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className={`flex flex-col group ${index % 2 !== 0 ? 'translate-y-6' : ''} transition-all duration-500`}
              >
                <div className="relative aspect-[3/4] bg-vexo-surface-container-low mb-3 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
                  {product.tag && (
                    <div className="absolute top-2 left-2 bg-vexo-inverse-surface px-1.5 py-0.5">
                      <span className="text-[8px] font-bold tracking-widest text-white uppercase">{product.tag}</span>
                    </div>
                  )}
                </div>
                <div className="px-1">
                  <div className="font-headline font-extrabold italic text-sm leading-tight uppercase tracking-tighter mb-1 line-clamp-1">{product.name}</div>
                  <div className="font-label text-[9px] text-vexo-secondary tracking-widest mb-1 opacity-60 uppercase">{product.category}</div>
                  <div className="font-headline font-bold text-vexo-primary">{product.price}</div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center py-20 grayscale opacity-30">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p className="font-headline font-bold uppercase italic tracking-widest">No Products Found</p>
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="mt-20 flex flex-col items-center pb-12">
          <div className="w-12 h-[2px] bg-vexo-primary-container mb-4"></div>
          <button className="group flex items-center space-x-2">
            <span className="font-headline font-black italic tracking-tighter text-2xl uppercase group-hover:text-vexo-primary transition-colors">LOAD MORE</span>
          </button>
          <span className="font-label text-[10px] font-bold tracking-[0.2em] text-vexo-outline mt-2 uppercase">
            Viewing {filteredAndSortedProducts.length} of {filteredAndSortedProducts.length}
          </span>
        </div>
      </main>

      <FooterTapedDesign />

      <MobileBottomNav />
    </div>
  );
};

export default MobileCollection;
