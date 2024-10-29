import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // DOM manipülasyonu içeren testler için gerekli
    
  },
  esbuild: {
    loader: "ts",
    include: [
      // TypeScript dosyalarını dahil etmek için
      "src/**/*.ts",
      "src/**/*.tsx"
    ],
    exclude: [
      "node_modules"
    ],
  },
});
