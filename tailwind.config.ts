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
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          glow: "hsl(var(--accent-glow))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ego: {
          mint: "hsl(var(--ego-mint))",
          'mint-rich': "hsl(var(--ego-mint-rich))",
          cream: "hsl(var(--ego-cream))",
          yellow: "hsl(var(--ego-yellow))",
          amber: "hsl(var(--ego-amber))",
          orange: "hsl(var(--ego-orange))",
          dark: "hsl(var(--ego-dark))",
          gray: "hsl(var(--ego-gray))",
          white: "hsl(var(--ego-white))",
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-warm': 'var(--gradient-warm)',
        'gradient-transit': 'var(--gradient-transit)',
        'gradient-radial': 'var(--gradient-radial)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'morphing': 'var(--shadow-morphing)',
        'glow': 'var(--shadow-glow)',
        'intense': 'var(--shadow-intense)',
      },
      animation: {
        'morphing-blob': 'morphing-blob 8s ease-in-out infinite',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up-fade': 'slide-up-fade 0.6s ease-out',
        'morphing-scale': 'morphing-scale 3s ease-in-out infinite',
        'particle-float': 'particle-float 6s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'typing': 'typing 2s steps(40, end) infinite alternate',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "morphing-blob": {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
            "transform": "translate3d(0, 0, 0) rotateZ(0deg)"
          },
          "34%": {
            "border-radius": "70% 60% 20% 40% / 40% 20% 80% 60%",
            "transform": "translate3d(5px, -5px, 0) rotateZ(5deg)"
          },
          "67%": {
            "border-radius": "100% 60% 60% 100% / 100% 100% 60% 60%",
            "transform": "translate3d(-5px, 10px, 0) rotateZ(-5deg)"
          }
        },
        "float-gentle": {
          "0%, 100%": { "transform": "translateY(0px)" },
          "50%": { "transform": "translateY(-10px)" }
        },
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 20px hsl(var(--primary-glow) / 0.4)" },
          "50%": { "box-shadow": "0 0 40px hsl(var(--primary-glow) / 0.7)" }
        },
        "slide-up-fade": {
          "0%": { "opacity": "0", "transform": "translateY(30px)" },
          "100%": { "opacity": "1", "transform": "translateY(0)" }
        },
        "gradient-shift": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
