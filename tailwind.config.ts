// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Directorio App (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Directorio Pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Tus componentes UI
    "./src/**/*.{js,ts,jsx,tsx,mdx}",       // Si usas carpeta src
    // Agrega cualquier otra carpeta personalizada aquí, por ejemplo:
    "./(main)/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;