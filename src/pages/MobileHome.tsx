import { Menu, Search, ShoppingCart, ArrowRight, Star } from "lucide-react";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";

const MobileHome = () => {
  return (
    <div className="min-h-screen bg-vexo-background text-vexo-on-background font-body pb-24">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-vexo-surface/80 backdrop-blur-md px-4 py-3 justify-between border-b border-vexo-outline-variant/15">
        <div className="flex items-center gap-4">
          <button className="text-vexo-on-surface flex size-10 items-center justify-center">
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-vexo-on-surface font-headline text-2xl font-black italic tracking-tighter">VEXO</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center text-vexo-on-surface">
            <Search className="w-6 h-6" />
          </button>
          <button className="flex size-10 items-center justify-center text-vexo-on-surface relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-vexo-primary-container text-vexo-on-primary-fixed text-[10px] font-bold px-1 rounded-sm">2</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(12, 15, 15, 0.2) 0%, rgba(12, 15, 15, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLMohVN5S7oEAlNAH1wn6Lq0FQ-uY4Vp6B4C3oYgOBI6kM7lGuqNOidU2qnWPV2oWRMl0wgWIT-IcoQa43FojuQhz94ORCv1l5G-V6O4JhNrktGVqvDTxtMq7juktOyoIF9MBOwrRw9c3rnrPUgto2O7j-5IznPl35rWG-pRHy-ngQbS_EruYvQPBl5XliJfim41QrdGaT6GpyaqIIdzUjtL_i-2Qi12saGXjquadot8VNaAgZQ0I0RgjoTHxlOMpCU039ktRoo_19')` 
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-6 pb-12 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-vexo-primary-container font-label font-bold text-sm tracking-widest uppercase">The Lab Series v.04</span>
              <h1 className="text-white text-6xl font-headline font-black italic leading-[0.9] tracking-tighter uppercase">
                Performance<br/>Redefined
              </h1>
              <p className="text-vexo-surface-variant text-lg max-w-[80%] font-medium leading-tight">
                Engineered for elite output. Tested in the lab, proven on the field.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-vexo-primary-container text-vexo-on-primary-fixed font-headline font-black py-4 text-center tracking-wider uppercase hover:bg-vexo-on-primary-fixed hover:text-vexo-primary-container transition-all active:scale-95">
                Explore the Lab
              </button>
              <button className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-headline font-black py-4 text-center tracking-wider uppercase active:scale-95">
                View Collections
              </button>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 bg-vexo-inverse-surface py-4 px-2 divide-x divide-vexo-outline/20">
          <div className="flex flex-col items-center">
            <span className="text-vexo-primary-container font-headline font-bold text-lg">24%</span>
            <span className="text-vexo-outline-variant text-[10px] uppercase font-bold tracking-tighter">Faster Recovery</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-vexo-primary-container font-headline font-bold text-lg">1.2kg</span>
            <span className="text-vexo-outline-variant text-[10px] uppercase font-bold tracking-tighter">Avg. Weight reduction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-vexo-primary-container font-headline font-bold text-lg">PRO</span>
            <span className="text-vexo-outline-variant text-[10px] uppercase font-bold tracking-tighter">Grade Compression</span>
          </div>
        </div>

        {/* Women's Series Section */}
        <section className="py-12 px-4 bg-vexo-surface">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-vexo-on-background font-headline text-3xl font-black italic uppercase leading-none tracking-tighter">Women's Series</h2>
              <div className="h-1 w-12 bg-vexo-primary-container mt-2"></div>
            </div>
            <a className="text-vexo-primary font-bold text-sm flex items-center gap-1 uppercase tracking-tighter" href="#">
              Shop All 
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                name: "Apex Leggings",
                color: "Carbon Black",
                price: "$120.00",
                tag: "Top Seller",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx88K0kSDVPpeftjp3xW5kk1hMKJFsMvOTRqZRPjTYfQjynlOwRmaSWr0JjkE5NvmsqRd89x7EU6uu8St6Sq58f4IqSuIxSR60niXKXu9MxKaqgKhZQOsMyfImR5sYPtx0tFYPr_D4Xx8vhCNvTxTdWokcfqANZ68RmB26wfWP7JZnivWetbqLm--x2Bw9qbd5qCghgsfelM41lBarqe_lBIxpLpTzZSe5Rrm1-n8r_iIDFnzrvSN8nrOmb6bnq3JrC-ZE1mx0ASDO"
              },
              {
                name: "Vortex Racerback",
                color: "Slate Grey",
                price: "$85.00",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaYFRoSD0MbHn09GUGYMrNgG86h4m5O_kmaSzjDtZ_7qww6coBsuOwMaUaY7n0_gkmAUukYof5qUh_f65OKonoC2UFCbsZUcayIR5k5ga1ajpF9Qcmn92scsM3ozEFigFbhUZR-wt_-wH0v3jARqDdFuzu5x0iHdj-IVUJAlMwYRr3xuQTv-2_36-D4aNDtPYrm9swN4XC-MOvkLxUA2QWOc8zxXL7uFXomlhKlp4-3vaaalNurCYz9ebzpf7LUdVRHjO9iJnlO_66"
              }
            ].map((product) => (
              <div key={product.name} className="flex flex-col gap-3">
                <div className="aspect-[3/4] bg-vexo-surface-container-high relative group overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={product.image} alt={product.name} />
                  {product.tag && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-vexo-inverse-surface text-white text-[10px] font-bold px-2 py-1 uppercase">{product.tag}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-headline font-bold text-sm uppercase">{product.name}</h3>
                  <p className="text-vexo-on-surface-variant text-xs mb-1">{product.color}</p>
                  <p className="font-headline font-black text-vexo-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-vexo-surface-container-low py-16 px-4">
          <h2 className="text-vexo-on-background font-headline text-3xl font-black italic uppercase text-center mb-12 tracking-tighter">Field Tested</h2>
          <div className="flex flex-col gap-8">
            <div className="relative bg-white p-6 border-l-4 border-vexo-primary-container shadow-sm">
              <div className="flex gap-1 mb-4 text-vexo-primary-container">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-vexo-on-surface font-medium text-lg italic mb-4 leading-snug">
                "The compression technology is on another level. I've cut my recovery time by nearly a third since switching to VEXO Lab gear."
              </p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-vexo-surface-container-highest flex items-center justify-center font-headline font-bold text-sm">MK</div>
                <div>
                  <p className="font-headline font-bold text-sm uppercase text-vexo-on-background">Marcus K.</p>
                  <p className="text-vexo-on-surface-variant text-xs uppercase tracking-tighter">Pro Triathlete</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-vexo-primary-container px-6 py-16 flex flex-col gap-6">
          <h2 className="text-vexo-on-primary-fixed font-headline text-4xl font-black italic uppercase leading-[0.8] tracking-tighter">Join the<br/>Inner Circle</h2>
          <p className="text-vexo-on-primary-fixed/80 font-medium leading-tight">Get early access to Lab Drops and performance data analysis.</p>
          <div className="flex flex-col gap-2">
            <input className="bg-white border-none py-4 px-4 font-headline font-bold text-sm tracking-widest placeholder:text-vexo-outline focus:ring-2 focus:ring-vexo-primary" placeholder="ENTER EMAIL" type="email"/>
            <button className="bg-vexo-inverse-surface text-white font-headline font-black py-4 uppercase tracking-widest hover:bg-black transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-vexo-inverse-surface text-white pt-16 pb-32 px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="font-headline text-4xl font-black italic tracking-tighter uppercase">VEXO</h2>
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="size-10 border border-white/20 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined">share</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-headline font-bold uppercase text-vexo-primary-container text-xs tracking-widest">Navigation</h4>
              <ul className="flex flex-col gap-2 text-sm font-medium text-white/60">
                <li>The Lab</li>
                <li>Collections</li>
                <li>Technology</li>
                <li>Pro Program</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-headline font-bold uppercase text-vexo-primary-container text-xs tracking-widest">Support</h4>
              <ul className="flex flex-col gap-2 text-sm font-medium text-white/60">
                <li>Shipping</li>
                <li>Returns</li>
                <li>Contact</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <MobileBottomNav />
    </div>
  );
};

export default MobileHome;
