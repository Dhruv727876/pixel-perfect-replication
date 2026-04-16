import { Menu, ShoppingBag, SlidersHorizontal, ArrowRight } from "lucide-react";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import { Link } from "react-router-dom";

const MobileCollection = () => {
  const products = [
    {
      id: "apex-core-tights",
      name: "APEX CORE TIGHTS",
      variant: "PRO-COMPRESSION / BLACK",
      price: "$120.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBknNYVIA0GtHHRFF3a2sEUuF1Ml4tpkfoGqHdWqqbzIE5OFpLClBiYGpNjQ3Al_Dace71a9FwHjG6UMZLY30VWlscUPynRLGNDUk6CVSe482W6UmvK7D7BZ2-AwSklSqTHp4Ao9pbe5seIUgNKYnYT7iFXURCWkdCKrdAPK21OIKwwws7GUUoc-fWpZZLjF1qdK6EncTMnn9FpfrL1fhDrZKFD2nalSigbczFRIc6M9vVSDLIFEZ91J6Ef2sUb0IGRHVcBq3_vYCuN",
      badge: "LAB 01"
    },
    {
      id: "kinetic-bra",
      name: "KINETIC BRA",
      variant: "AEROREADY / VELOCITY",
      price: "$65.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdPNNTdUgl_YwPSNFWoTq2QrHqWS291a_eMzdMlXJkMnByinQaICJ2SyNPEBcsiem1CAmpnr3jjgpNfkdOhWLMXQALdm3SSqHBp2H8hxXNTZC_zPY4GBNLAShzl5R0AvjyalqpzgdyAHzvDq3jx29Z4AwLZZoVWsOoGlaedKOiIytE8Dkpb-ts0ZSnnZW4qM7mgQqSa-KV-gyWY-aTeyloxxBl31cNfsDUWw7O5vJ2IU561noDJ9WfQ_u0B0-dtvpUOYxw1ZGVIP1A",
      badge: "NEW",
      badgeColor: "bg-vexo-primary-container text-vexo-on-primary-fixed"
    },
    {
      id: "flux-shell",
      name: "FLUX SHELL",
      variant: "THERMAL / CHROME",
      price: "$185.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvQ23QYKXthsYVEe30JntmpZTR02x9Ty-hASvpCSsWppN9MCllibvt5T1XaB_cU0xwTDmJzl6fBXF7H7WyhHfChtEt_5DghYpoevmnk0Gk1xtzvmnp0VX3e1aQh42qUwgdMYx6_2jh12Xp6qNsbtp6y8Ks6yNCqauE60iV9PzucWSuaB6bCP8IwxBEUF1Ujb5C6hzPu6wrUOGjfPxmP2cFaoalp5m6U3aLv7k2w-6LfTv8wNcEVJnyJvsSl4IEZqbKmXOW6ZYIvWO4",
      badge: "ECO-FIBER"
    },
    {
      id: "pace-short",
      name: "PACE SHORT",
      variant: "ULTRA-LIGHT / SHADOW",
      price: "$45.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0J4kqs4jGFh8Mi0f3C2X6nFYA6nXby8sDt9oDqSGwjfPpbJ1mgntqfF6JaieAqWf4Yqq26nJb9-esF7CX8KE8VWtcSxJie-G38AkuckG4zzumt7qD0PCU797JzYKItWEpKLZL5UEhIMZID7-JICEjD2t7htDFb7mVP8WBXK9sGosI0-4O1ocwMlStFPNcrWR0Mz_NCF5oxmTwpcioSlYM0S1nykT-gcfvMo_OkEqn8HCWHd4ERU1kd6BrFfhIIGEh9KmXviqP461G"
    }
  ];

  return (
    <div className="min-h-screen bg-vexo-surface font-body text-vexo-on-surface pb-24">
      {/* Header */}
      <header className="fixed top-0 w-full flex items-center justify-between px-6 h-20 backdrop-blur-md bg-vexo-surface/80 z-50">
        <Menu className="w-6 h-6 text-vexo-on-surface" />
        <span className="text-xl font-black italic tracking-tighter text-vexo-inverse-surface font-headline uppercase">WOMEN'S SERIES</span>
        <ShoppingBag className="w-6 h-6 text-vexo-on-surface" />
      </header>

      <main className="pt-24 px-4 max-w-md mx-auto">
        {/* Banner */}
        <section className="relative mb-8 h-48 overflow-hidden bg-vexo-inverse-surface group">
          <img 
            className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIToDoItMqOMIzQ5duhy-v6zMC3X4k-fZImakcLEVWAUY1d4xq6iXClgFqp7g8032NrER6zlaYt3YU9EWp_5HInyqpuUQOOxD0bSG2fcv9UFN7KQjyeKV8SlLwPzDwo2LbI897HGGfauR7rj8hgHNJ28ScUmNxud08R8iI-puzueTTFr5fZ9OnrOCfaEZXsXUQl5IDtklNGT_0dSWZ0zjNXBc8hE-v1LTku3CpdDmhg76rLnJiPLnoz8ln4lTpgGXiz3Wv3XDyk-p8" 
            alt="Women's Collection Banner"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h1 className="font-headline text-4xl font-black italic text-white leading-none tracking-tighter uppercase">
              Precision<br/>Velocity
            </h1>
            <div className="bg-vexo-primary-container inline-block px-2 py-1 mt-2 w-max">
              <span className="font-label text-[10px] font-bold tracking-widest text-vexo-on-primary-fixed">DROP 04 / TECH WEAR</span>
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <nav className="flex overflow-x-auto no-scrollbar space-x-1 mb-10 bg-vexo-surface-container-low p-1">
          <button className="whitespace-nowrap px-6 py-2 bg-vexo-primary-container text-vexo-on-primary-fixed font-label font-bold text-[11px] tracking-widest italic -skew-x-12">
            <span className="inline-block skew-x-12">ALL ITEMS</span>
          </button>
          <button className="whitespace-nowrap px-6 py-2 text-vexo-on-surface opacity-40 font-label font-bold text-[11px] tracking-widest italic">
            NEW ARRIVALS
          </button>
          <button className="whitespace-nowrap px-6 py-2 text-vexo-on-surface opacity-40 font-label font-bold text-[11px] tracking-widest italic">
            BEST SELLERS
          </button>
        </nav>

        {/* Technical Info */}
        <div className="flex items-center justify-between mb-4 border-b border-vexo-on-surface/5 pb-2">
          <span className="font-label text-[10px] font-bold text-vexo-primary italic tracking-widest">LABORATORY PHASE 02 // COMPRESSION</span>
          <SlidersHorizontal className="w-4 h-4 text-vexo-on-surface" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-10">
          {products.map((product, index) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className={`flex flex-col group ${index % 2 !== 0 ? 'translate-y-6' : ''}`}
            >
              <div className="relative aspect-[3/4] bg-vexo-surface-container-low mb-3 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
                {product.badge && (
                  <div className={`absolute ${product.badge === 'NEW' ? 'top-2' : 'bottom-2'} left-2 ${product.badgeColor || 'bg-vexo-inverse-surface'} px-1.5 py-0.5`}>
                    <span className={`text-[8px] font-bold tracking-widest ${product.badge === 'NEW' ? '' : 'text-white'}`}>{product.badge}</span>
                  </div>
                )}
              </div>
              <div className="px-1">
                <div className="font-headline font-extrabold italic text-lg leading-tight uppercase tracking-tighter">{product.name}</div>
                <div className="font-label text-[10px] text-vexo-secondary tracking-widest mb-2">{product.variant}</div>
                <div className="font-headline font-bold text-vexo-primary">{product.price}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 flex flex-col items-center pb-12">
          <div className="w-12 h-[2px] bg-vexo-primary-container mb-4"></div>
          <button className="group flex items-center space-x-2">
            <span className="font-headline font-black italic tracking-tighter text-2xl uppercase group-hover:text-vexo-primary transition-colors">LOAD MORE</span>
          </button>
          <span className="font-label text-[10px] font-bold tracking-[0.2em] text-vexo-outline mt-2 uppercase">Viewing 04 of 28</span>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default MobileCollection;
