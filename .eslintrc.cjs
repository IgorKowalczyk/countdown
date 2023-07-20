module.exports = {
 extends: ["@igorkowalczyk/eslint-config", "plugin:@typescript-eslint/recommended"],
 parser: "@typescript-eslint/parser",
 plugins: ["@typescript-eslint"],
 root: true,
 env: {
  commonjs: true,
  node: true,
 },
 rules: {
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/ban-ts-comment": "off",
 },
};
