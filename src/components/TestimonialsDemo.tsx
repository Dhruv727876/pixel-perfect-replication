"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The quality of the fabric is next-level. I've washed my VEXO set dozens of times and it still looks and feels like day one.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Fitness Influencer",
  },
  {
    text: "Finally an apparel brand that actually cares about the fit. The sizing guide was 100% accurate, and the packaging was beautiful.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Marathon Runner",
  },
  {
    text: "Fastest delivery I've ever had for online shopping. Ordered on Tuesday, wearing it by Thursday. Incredible service!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Yoga Instructor",
  },
  {
    text: "The design aesthetic is so clean. I can wear my VEXO pieces to the studio and then straight out to lunch without missing a beat.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Creative Director",
  },
  {
    text: "The compression tech in these leggings is a game changer for my recovery. Worth every penny for the performance alone.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Athletic Coach",
  },
  {
    text: "I was skeptical about ordering apparel online, but the returns process was so seamless it took all the risk away. Great experience.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Lifestyle Blogger",
  },
  {
    text: "Their customer support team is actually human. They helped me find the perfect gift for my husband and he loves the material.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Tech Professional",
  },
  {
    text: "Minimalist, durable, and stylish. VEXO has completely replaced my old workout wardrobe. Simply the best in the market.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Daily Commuter",
  },
  {
    text: "As someone who lives in activewear, I've tried everything. VEXO is the first brand where I don't feel like I'm compromising style for comfort.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Personal Trainer",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-transparent py-20 relative px-4">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border/40 py-1 px-4 rounded-lg bg-card/50 text-card-foreground text-sm font-medium backdrop-blur-sm">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75 text-muted-foreground">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
