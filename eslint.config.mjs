import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest", 
      sourceType: "module", 
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs", 
    },
  },
];
