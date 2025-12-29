import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "Krithi-React-Practise-Dashboard", // MUST match your repo name
});
