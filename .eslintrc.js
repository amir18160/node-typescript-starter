/* eslint-disable */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    $schema: "https://json.schemastore.org/eslintrc",
    extends: [
        "airbnb-base", // Airbnb's base JavaScript style guide
        "airbnb-typescript/base", // Airbnb's TypeScript-specific rules
        "prettier", // Disables ESLint rules that conflict with Prettier (MUST BE LAST)
        "plugin:@typescript-eslint/recommended", // Recommended TypeScript rules
        "plugin:node/recommended", // Node.js best practices
    ],
    parser: "@typescript-eslint/parser", // Parse TypeScript syntax
    parserOptions: {
        project: "./tsconfig.eslint.json", // Use TypeScript project for type-aware linting
    },
    plugins: [
        "@typescript-eslint", // TS-specific rules
        "security", // Security-focused rules (optional)
    ],
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTsNodeResolve: true,
                alwaysTryTypes: true,
                project: "./tsconfig.eslint.json", // Resolve aliases from TSConfig
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        // ========== TypeScript Rules ==========
        "@typescript-eslint/indent": "off", // Disable (let Prettier handle indentation)
        "@typescript-eslint/consistent-type-imports": "error", // Enforce `import type` for types
        "@typescript-eslint/no-explicit-any": "warn", // Warn about unsafe `any` types
        "@typescript-eslint/strict-boolean-expressions": "error", // Require explicit boolean checks
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "req|res|next|val" }, // Ignore common unused args (e.g., Express middleware)
        ],

        // ========== Import/Export Rules ==========
        "import/prefer-default-export": "off", // Allow named exports (Airbnb default: "error")
        "import/extensions": ["error", "never"], // Disable .ts/.js extensions in imports
        "import/order": [
            // Enforce import order:
            "error",
            {
                groups: ["builtin", "external", "internal"], // Order: Node.js builtins → npm packages → project files
                "newlines-between": "always", // Separate groups with newlines
            },
        ],
        "import/no-cycle": [2, { ignoreExternal: true }],

        // ========== Node.js Rules ==========
        "node/no-missing-import": "off", // Disable (conflicts with TypeScript resolver)
        "node/no-unsupported-features/es-syntax": "off", // Allow modern syntax (TypeScript handles transpilation)

        // ========== Code Quality/Style ==========
        "max-len": ["warn", { code: 90, ignoreUrls: true }], // Warn on lines >100 chars (align with Prettier)
        "no-console": "warn", // Discourage `console.log` in production code
        "no-param-reassign": "error", // Prevent accidental parameter mutation

        // ========== Security Rules ==========
        "security/detect-non-literal-require": "error", // Ban dynamic `require()` (potential exploit)
        "security/detect-object-injection": "warn", // Warn about key-based object injection

        // ========== Prettier Compatibility ==========
        quotes: "off", // Let Prettier handle quotes
        semi: "off", // Let Prettier handle semicolons
    },
};
