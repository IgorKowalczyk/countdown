import flatConfig from "@igorkowalczyk/eslint-config/flat";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
 ...flatConfig,
 {
  ignores: ["*.d.ts", "dist/**"],
 },
 {
  files: ["*.ts"],
  languageOptions: {
   parser: tsParser,
   parserOptions: {
    ecmaFeatures: { modules: true },
    ecmaVersion: "latest",
    project: "./tsconfig.json",
   },
  },
  plugins: {
   "@typescript-eslint": tsPlugin,
  },
  rules: {
   ...tsPlugin.configs["eslint-recommended"].rules,
   ...tsPlugin.configs["recommended"].rules,
   "@typescript-eslint/no-explicit-any": "off",
   "@typescript-eslint/no-var-requires": "off",
   "@typescript-eslint/ban-ts-comment": "off",
  },
 },
];
