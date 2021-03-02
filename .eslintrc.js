module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 },
  ignorePatterns: [
    "node_modules/*",
    ".next/*",
    ".out/*",
    "!.prettierrc.js",
    "**/generated/*",
  ],
  extends: ["eslint:recommended"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:react/recommended", // React rules
        "plugin:react-hooks/recommended", // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended", // Prettier rules
      ],
      plugins: ["import"],
      rules: {
        // We will use TypeScript's types for component props instead
        "react/prop-types": "off",

        // No need to import React when using Next.js
        "react/react-in-jsx-scope": "off",

        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",

        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "prettier/prettier": ["off", {}, { usePrettierrc: true }],
        "import/order": [
          "warn",
          {
            alphabetize: {
              order: "asc",
            },
            groups: [
              ["builtin", "external", "internal"],
              ["unknown", "parent", "sibling"],
              "index",
            ],
            "newlines-between": "always",
          },
        ],
      },
    },
  ],
};
