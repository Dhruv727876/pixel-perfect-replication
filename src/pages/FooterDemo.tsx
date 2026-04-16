import FooterTapedDesign from "@/components/ui/footer-taped-design";
import Navbar from "@/components/Navbar";

export default function FooterDemo() {
  return (
    <main className="w-screen min-h-screen mx-auto bg-base-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-20 text-center">
        <h1 className="text-5xl font-display font-black mb-4">Footer Showcase</h1>
        <p className="text-neutral-custom/60 max-w-md">
          Explore the new premium "Taped" footer design integrated into our VEXO platform.
        </p>
      </div>
      <FooterTapedDesign />
    </main>
  );
}
