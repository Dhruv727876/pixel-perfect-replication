import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: "hsl(var(--surface))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "hightlight-light": "var(--hightlight-light)",
        "accent-light": "var(--accent-light)",
        "primary-light": "var(--primary-light)",
        "secondary-light": "var(--secondary-light)",
        "primary-custom": "var(--primary-custom)",
        "secondary-custom": "var(--secondary-custom)",
        "accent-custom": "var(--accent-custom)",
        "neutral-custom": "var(--neutral-custom)",
        highlight: "var(--highlight-custom)",
        base: {
          "100": "var(--base-100)",
          "200": "var(--base-200)",
          "300": "var(--base-300)",
          content: "var(--base-content)",
        },
        "muted-custom": "var(--muted-custom)",
        vexo: {
          primary: "var(--vexo-primary)",
          "primary-container": "var(--vexo-primary-container)",
          "on-primary-fixed": "var(--vexo-on-primary-fixed)",
          "secondary-container": "var(--vexo-secondary-container)",
          "tertiary-container": "var(--vexo-tertiary-container)",
          "on-tertiary-fixed": "var(--vexo-on-tertiary-fixed)",
          "on-tertiary-fixed-variant": "var(--vexo-on-tertiary-fixed-variant)",
          "surface-lowest": "var(--vexo-surface-container-lowest)",
          "surface-low": "var(--vexo-surface-container-low)",
          "surface-high": "var(--vexo-surface-container-high)",
          "surface-highest": "var(--vexo-surface-container-highest)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ["var(--font-display)"],
        headline: ["var(--font-headline)"],
        "sans-custom": ["var(--font-sans-custom)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-left": "slide-left 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-right": "slide-right 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
