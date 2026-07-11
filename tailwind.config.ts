import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        desk: "var(--desk)",
        app: "var(--app-bg)",
        glass: "var(--glass)",
        "glass-strong": "var(--glass-strong)",
        raised: "var(--raised)",
        "raised-hover": "var(--raised-hover)",
        hairline: "var(--hairline)",
        heading: "var(--text-heading)",
        body: "var(--text-body)",
        muted: "var(--text-muted)",
        label: "var(--text-label)",
        dim: "var(--text-dim)",
        inverse: "var(--text-inverse)",
        n1: "var(--n1)",
        n2: "var(--n2)",
        n3: "var(--n3)",
        n4: "var(--n4)",
        n5: "var(--n5)",
        n6: "var(--n6)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-ui)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        xs: "var(--r-xs)",
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        "2xl": "var(--r-2xl)",
        "3xl": "var(--r-3xl)",
        pill: "var(--r-pill)",
      },
      backgroundImage: {
        brand: "var(--grad)",
      },
      boxShadow: {
        popover: "var(--shadow-popover)",
        modal: "var(--shadow-modal)",
        "glow-1": "0 0 var(--gr) -6px var(--n1)",
        "glow-2": "0 0 var(--gr) -6px var(--n2)",
        "glow-3": "0 0 var(--gr) -6px var(--n3)",
      },
      transitionTimingFunction: {
        enter: "cubic-bezier(.16,1,.3,1)",
      },
      backdropBlur: {
        panel: "var(--blur)",
      },
    },
  },
  plugins: [],
} satisfies Config;
