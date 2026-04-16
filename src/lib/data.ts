import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  tag: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  sex: "Men" | "Women" | "Unisex";
  seasonal: boolean;
  trending: boolean;
  season?: "Summer" | "Winter" | "All-Season";
}

export const products: Product[] = [
  { 
    id: "1", 
    name: "ASRV x Equinox Lycra Tee", 
    price: "₹9,500", 
    image: product1, 
    tag: "Pro-Fit", 
    category: "Performance",
    description: "Engineered with premium Lycra-blend fabric for unrestricted movement. Features moisture-wicking technology.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal"],
    sex: "Men",
    seasonal: true,
    trending: true,
    season: "All-Season"
  },
  { 
    id: "2", 
    name: "Training Tech Shell", 
    price: "₹12,200", 
    image: product2, 
    tag: "Weather-Resist", 
    category: "Training",
    description: "Multi-layered tech shell designed for high-intensity outdoor training. Water-resistant and breathable.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rust", "Black"],
    sex: "Men",
    seasonal: true,
    trending: false,
    season: "Winter"
  },
  { 
    id: "3", 
    name: "Signature Sport Tee", 
    price: "₹6,900", 
    image: product3, 
    tag: "Essential", 
    category: "Activewear",
    description: "Our signature sport tee made from ultra-soft, recycled materials. Designed for comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Taupe", "Navy"],
    sex: "Unisex",
    seasonal: false,
    trending: true,
    season: "All-Season"
  },
  { 
    id: "4", 
    name: "Compression Baselayer", 
    price: "₹7,600", 
    image: product4, 
    tag: "Recovery", 
    category: "Performance",
    description: "Advanced compression technology to support muscle recovery and improve performance.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black"],
    sex: "Men",
    seasonal: false,
    trending: false,
    season: "All-Season"
  },
  { 
    id: "5", 
    name: "Essential Joggers", 
    price: "₹8,900", 
    image: product5, 
    tag: "Comfy", 
    category: "Essentials",
    description: "Perfectly balanced joggers for both training and recovery. Lightweight yet warm.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Camo", "Grey"],
    sex: "Unisex",
    seasonal: true,
    trending: false,
    season: "All-Season"
  },
  { 
    id: "6", 
    name: "Utility Training Shorts", 
    price: "₹6,400", 
    image: product6, 
    tag: "Utility", 
    category: "Activewear",
    description: "Functional training shorts with multiple utility pockets and built-in liners.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive"],
    sex: "Men",
    seasonal: false,
    trending: true,
    season: "Summer"
  },
  { 
    id: "7", 
    name: "Thermal Windbreaker", 
    price: "₹12,800", 
    image: product7, 
    tag: "Winter", 
    category: "Outerwear",
    description: "Insulated windbreaker with thermal lining to keep you warm in sub-zero temperatures.",
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Black"],
    sex: "Unisex",
    seasonal: true,
    trending: false,
    season: "Winter"
  },
  { 
    id: "8", 
    name: "Pro Fleece Hoodie", 
    price: "₹10,200", 
    image: product8, 
    tag: "Winter", 
    category: "Winterwear",
    description: "Military-grade fleece hoodie with reinforced seams and ergonomic articulation.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Charcoal"],
    sex: "Men",
    seasonal: true,
    trending: true,
    season: "Winter"
  },
  { 
    id: "9", 
    name: "Women's Power Leggings", 
    price: "₹5,400", 
    image: "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?w=800&auto=format&fit=crop", 
    tag: "Premium", 
    category: "Training",
    description: "High-waisted compression leggings designed for support during high-impact activities.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Purple", "Black"],
    sex: "Women",
    seasonal: false,
    trending: true,
    season: "All-Season"
  },
  { 
    id: "10", 
    name: "Aura Yoga Bra", 
    price: "₹3,200", 
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60", 
    tag: "Soft", 
    category: "Yoga",
    description: "Breathable yoga bra with a soft-touch finish and minimalist design.",
    sizes: ["XS", "S", "M"],
    colors: ["White", "Sage"],
    sex: "Women",
    seasonal: false,
    trending: false,
    season: "All-Season"
  },
  { 
    id: "11", 
    name: "Performance Headband", 
    price: "₹1,200", 
    image: "https://images.unsplash.com/photo-1576243355643-830ef64e248a?w=800&auto=format&fit=crop", 
    tag: "New", 
    category: "Accessories",
    description: "Moisture-wicking headband to keep sweat away during your most intense sessions.",
    sizes: ["One Size"],
    colors: ["Grey", "Black"],
    sex: "Unisex",
    seasonal: false,
    trending: false,
    season: "All-Season"
  },
  { 
    id: "12", 
    name: "Apex Gym Bottle", 
    price: "₹2,400", 
    image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=800&auto=format&fit=crop", 
    tag: "Essential", 
    category: "Accessories",
    description: "Leak-proof, BPA-free water bottle with a high-flow nozzle.",
    sizes: ["750ml"],
    colors: ["Smoke", "Clear"],
    sex: "Unisex",
    seasonal: false,
    trending: true,
    season: "All-Season"
  },
  {
    id: "13",
    name: "Men's Riviera Linen Shirt",
    price: "₹4,800",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop",
    tag: "Summer",
    category: "Lifestyle",
    description: "Breathable Italian linen shirt designed for ultimate summer comfort.",
    sizes: ["M", "L", "XL"],
    colors: ["Sky Blue", "White"],
    sex: "Men",
    seasonal: true,
    trending: true,
    season: "Summer"
  },
  {
    id: "14",
    name: "Women's Summer Breeze Dress",
    price: "₹5,200",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop",
    tag: "Summer",
    category: "Lifestyle",
    description: "Lightweight floral dress for breezy summer afternoons.",
    sizes: ["XS", "S", "M"],
    colors: ["Cream", "Yellow"],
    sex: "Women",
    seasonal: true,
    trending: true,
    season: "Summer"
  },
  {
    id: "15",
    name: "Classic All-Season Blazer",
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop",
    tag: "Timeless",
    category: "Lifestyle",
    description: "A versatile blazer that fits every occasion, year-round.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal"],
    sex: "Men",
    seasonal: false,
    trending: false,
    season: "All-Season"
  },
  {
    id: "16",
    name: "Urban All-Season Trench",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop",
    tag: "Iconic",
    category: "Outerwear",
    description: "The classic trench coat, re-imagined for the modern urban explorer.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "Black"],
    sex: "Women",
    seasonal: false,
    trending: true,
    season: "All-Season"
  }
];
