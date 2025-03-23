import eslintConfig from "@igorkowalczyk/eslint-config";
import { Linter } from "eslint";
import jestPlugin from "eslint-plugin-jest";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintConfig.typescript,
 ...eslintConfig.prettier,
 {
  name: "jest",
  files: ["test/**/*.mjs"],
  plugins: {
   jest: jestPlugin,
  },
  rules: {
   "jest/no-disabled-tests": "warn",
   "jest/no-focused-tests": "error",
   "jest/no-identical-title": "error",
   "jest/prefer-to-have-length": "warn",
   "jest/valid-expect": "error",
  },
 },
 {
  name: "overrides",
  rules: {
   "node/no-missing-requires": "off",
  },
 },
] satisfies Linter.Config[];
