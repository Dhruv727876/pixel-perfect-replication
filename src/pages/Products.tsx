import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sex = searchParams.get("sex") as "Men" | "Women" | null;
  const type = searchParams.get("type") as "trending" | "seasonal" | "accessories" | "summer" | "all-season" | null;

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="bg-card rounded-3xl overflow-hidden shadow-sm min-h-[90vh]">
          <Navbar />
          <div className="mx-6 border-t border-border/60" />

          <div className="px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
                  {sex ? `${sex}'s Collection` : type ? `${type.charAt(0).toUpperCase() + type.slice(1)}` : "All Products"}
                </h1>
                <p className="text-muted-foreground font-medium">
                  Browse our curated selection of premium apparel and performance gear.
                </p>
              </div>

              {(sex || type) && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="rounded-full gap-2 border-primary/20 hover:bg-primary/10"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </Button>
              )}
            </div>

            <ProductGrid filterSex={sex} filterType={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
