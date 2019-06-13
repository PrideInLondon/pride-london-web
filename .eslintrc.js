module.exports = {
  "plugins": ["prettier", "react", "import", "react-hooks"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "array-callback-return": "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "consistent-return": "off",
    "eqeqeq": "off",
    "function-paren-newline": "off",
    "import/extensions": "error",
    "import/first": "error",
    "import/order": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "indent": "off", // in conflict with prettier
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-redundant-roles": "off",
    "max-len": 0, // in conflict with prettier
    "no-confusing-arrow": "off",
    "no-else-return": "error",
    "no-nested-ternary": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-undef": "off", // throw error on graphql queries
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "object-curly-newline": "off",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-rest-params": "off",
    "prettier/prettier": "error",
    "react/default-props-match-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-boolean-value": 2,
    "react/jsx-filename-extension": "off",
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-array-index-key": 2,
    "react/no-unescaped-entities": "off",
    "react/no-unused-state": "off",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/require-default-props": 2,
    "react/sort-comp": 2,
    "semi": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
