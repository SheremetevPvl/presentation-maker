module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {  
        project: ['./tsconfig.json'], 
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
    },
    root: true,
    "rules": {
        "no-duplicate-imports": "error",
        "no-self-compare": "error",
        "no-use-before-define": "error" ,
        '@typescript-eslint/no-unsafe-call': 'off',       
    }
  }