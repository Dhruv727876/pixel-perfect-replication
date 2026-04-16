"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TShirtIcon,
  UserGroupIcon,
  StarIcon,
  FlashIcon,
  ShoppingBagIcon,
  DiamondIcon,
  CompassIcon,
  CrownIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router-dom";
import mensCollectionImg from "@/assets/carousel/mens-collection.png";
import accessoriesImg from "@/assets/carousel/accessories.png";

const FEATURES = [
  {
    id: "men",
    label: "Men's Collection",
    icon: UserGroupIcon,
    items: ["Performance Hoodies", "Aerotex Joggers", "Core Muscle Tees"],
    image: mensCollectionImg,
    description: "Engineered for performance. Precision-cut activewear for the modern athlete.",
    link: "/products?sex=Men",
  },
  {
    id: "women",
    label: "Women's Series",
    icon: UserGroupIcon,
    items: ["Seamless Leggings", "Impact Sports Bras", "Flow Sculpt Tanks"],
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200",
    description: "Grace in motion. Discover apparel that supports your every move with elegance.",
    link: "/products?sex=Women",
  },
  {
    id: "new",
    label: "New Arrivals",
    icon: FlashIcon,
    items: ["Vento Reflective Jacket", "Apex Pro Trainers", "Hydra Duffel Bag"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    description: "The latest drops. Fresh designs and cutting-edge fabrics just landed.",
    link: "/products",
  },
  {
    id: "trending",
    label: "Trending Now",
    icon: StarIcon,
    items: ["Oversized Street Tee", "Utility Cargo Pants", "Retro Windbreaker"],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
    description: "Community favorites. The pieces everyone is talking about this season.",
    link: "/products?type=trending",
  },
  {
    id: "accessories",
    label: "Accessories",
    icon: ShoppingBagIcon,
    items: ["Grip Flow Mats", "Thermal Water Bottles", "Performance Socks"],
    image: accessoriesImg,
    description: "Complete the look. Premium gear and essentials for your fitness journey.",
    link: "/products?type=accessories",
  },
  {
    id: "seasonal",
    label: "Seasonal Gear",
    icon: CompassIcon,
    items: ["Summit Parkas", "Insulated Baselayers", "Grip Winter Gloves"],
    image:
      "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=1200&auto=format&fit=crop",
    description: "Ready for anything. Weather-resistant performance wear for all conditions.",
    link: "/products?type=seasonal",
  },
];

const AUTO_PLAY_INTERVAL = 6000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[650px] lg:aspect-video border border-border/40 shadow-2xl">
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#0f0f0f]">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.45,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border uppercase tracking-widest",
                      isActive
                        ? "bg-white text-black border-white z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105"
                        : "bg-transparent text-white/30 border-white/5 hover:border-white/20 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-black" : "text-white/20"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={18}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-black text-xs md:text-[13px] whitespace-nowrap">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-h-[550px] md:min-h-[650px] lg:h-full relative bg-[#151515] flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
          <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -140 : isNext ? 140 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.3 : 0,
                    rotate: isPrev ? -6 : isNext ? 6 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-[10px] md:border-[16px] border-[#0f0f0f] bg-[#0f0f0f] shadow-2xl origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-1000 opacity-60",
                      isActive
                        ? "grayscale-0 blur-0 scale-100 opacity-80"
                        : "grayscale blur-[6px] brightness-50 scale-110"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent"
                      >
                        <div className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] w-fit shadow-lg mb-6">
                          Featured Collection
                        </div>
                        
                        <h3 className="text-white font-black text-3xl md:text-5xl leading-none uppercase tracking-tighter mb-4">
                          {feature.label}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {feature.items.map((item, i) => (
                            <span key={i} className="text-[10px] text-white/60 font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                              {item}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-white/80 font-medium text-sm md:text-md leading-relaxed tracking-wide mb-8 line-clamp-2 md:line-clamp-none italic">
                          "{feature.description}"
                        </p>

                        <button 
                          onClick={() => navigate(feature.link)}
                          className="w-full md:w-fit bg-white text-black py-4 px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white/90 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                        >
                          View More
                          <HugeiconsIcon icon={FlashIcon} size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-10 left-10 flex items-center gap-3 transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_15px_white]" />
                    <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.4em] font-mono">
                      Shop Session
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
