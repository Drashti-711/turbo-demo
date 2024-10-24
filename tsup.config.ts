import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "test",
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));