import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

export default {
 input: "src/index.ts",
 plugins: [
  rollupPluginNodeResolve(),
  rollupPluginTypescript({
   declaration: true,
   include: ["src/**/*.ts"],
   tsconfig: "tsconfig.json",
   outDir: "dist",
  }),
 ],
 treeshake: {
  annotations: true,
  moduleSideEffects: [],
  propertyReadSideEffects: false,
  unknownGlobalSideEffects: false,
 },
 output: [
  {
   file: "dist/index.js",
   format: "esm",
   compact: true,
  },
  {
   file: "dist/index.cjs",
   format: "cjs",
   compact: true,
  },
 ],
} satisfies RollupOptions;
