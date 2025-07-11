import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import { rules } from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: [
      "js/recommended",
      "eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": ["warm"],
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
]);
