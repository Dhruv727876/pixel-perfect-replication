import { Heart, ShoppingCart, ChevronRight, Filter, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { products } from "@/lib/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div
      className="group cursor-pointer opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={512}
          height={640}
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {product.trending && (
            <span className="bg-orange-500 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase shadow-lg shadow-orange-500/20">
              TRENDING
            </span>
          )}
          <span className="bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full uppercase">
            {product.tag}
          </span>
          <button className="bg-primary/80 text-primary-foreground w-8  h-8 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <Heart size={14} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs font-semibold text-card-foreground line-clamp-1">{product.name}</p>
            <p className="text-[11px] text-muted-foreground">{product.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <ShoppingCart size={14} className="text-primary-foreground" />
            </button>
            <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
              <ChevronRight size={14} className="text-secondary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  filterSex?: "Men" | "Women" | null;
  filterType?: "trending" | "seasonal" | "accessories" | "summer" | "all-season" | null;
}

const ProductGrid = ({ filterSex, filterType }: ProductGridProps) => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map(p => p.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSex = filterSex ? (product.sex === filterSex || product.sex === "Unisex") : true;

      let matchesType = true;
      if (filterType === "trending") matchesType = product.trending;
      if (filterType === "seasonal") matchesType = product.seasonal;
      if (filterType === "summer") matchesType = product.season === "Summer";
      if (filterType === "all-season") matchesType = product.season === "All-Season";
      if (filterType === "accessories") matchesType = product.category === "Accessories";

      return matchesSearch && matchesCategory && matchesSex && matchesType;
    });
  }, [searchQuery, selectedCategory, filterSex, filterType]);

  const categoryName = useMemo(() => {
    if (filterSex) return `${filterSex}'s Collection`;
    if (filterType === "trending") return "Trending Now";
    if (filterType === "summer") return "Summer Collection 2024";
    if (filterType === "all-season") return "All-Season Essentials";
    if (filterType === "accessories") return "Signature Accessories";
    if (filterType === "seasonal") return "Seasonal Highlights";
    return "Our Entire Catalog";
  }, [filterSex, filterType]);

  return (
    <section className="px-8 py-16" id="products">
      <div ref={headerRef} className={`flex flex-col items-center mb-16 opacity-0 ${headerVisible ? 'animate-fade-up' : ''}`}>
        <div className="flex flex-col items-center text-center max-w-3xl">
          <div className="bg-primary/10 text-primary px-6 py-2 rounded-full mb-6 border border-primary/20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase">
              {categoryName}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-4">
            {filterSex === "Men" ? "Bold Style For The Brave" :
              filterSex === "Women" ? "Power In Every Move" :
                filterType === "summer" ? "Beat The Heat" :
                  filterType === "all-season" ? "Versatile By Design" :
                    "Elevated Active Wear"}
          </h2>
          <p className="text-muted-foreground font-medium text-sm tracking-wide mt-4 italic opacity-60">
            {filteredProducts.length} Premium items curated for your lifestyle.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 items-center bg-muted/30 p-2 rounded-2xl backdrop-blur-sm border border-border/40">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-xl border-none bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center px-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map(cat => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridVisible && filteredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center animate-fade-in">
          <p className="text-muted-foreground text-lg mb-4">No products found for this category</p>
          <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory(null); }} className="rounded-full px-8 border-2">
            Clear Filters
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
