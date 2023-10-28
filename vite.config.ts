import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const mode = "production";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: mode === "production" ? "/quiz-app/" : "/",
});
