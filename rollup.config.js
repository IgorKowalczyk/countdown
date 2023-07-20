import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { uglify } from "rollup-plugin-uglify";

// Common Rollup plugins for all bundles
const commonPlugins = [typescript(), nodeResolve(), uglify()];

export default [
 // ES module bundle
 {
  input: "src/index.ts",
  plugins: commonPlugins,
  output: {
   file: "dist/mjs/index.js",
   format: "esm",
   compact: true,
  },
 },
 // CommonJS bundle
 {
  input: "src/index.ts",
  plugins: commonPlugins,
  output: {
   file: "dist/cjs/index.cjs",
   format: "cjs",
   compact: true,
  },
 },
 // UMD bundle (with nodePolyfills)
 {
  input: "src/index.ts",
  plugins: [...commonPlugins, nodePolyfills()],
  output: {
   file: "dist/umd/index.js",
   format: "umd",
   name: "Timer",
   compact: true,
  },
 },
];
