module.exports = {
  env: {
    commonjs: true,
    es2022: true,
    node: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    // means we do not allow console.log in the code
    'no-console': 'error',
    // means we ask ESlint to fix the problems prettier detects (we do not have to run "prettier --write ." after "eslint --fix ." any more)
    'prettier/prettier': ['error', { endOfline: 'auto' }, { usePrettierrc: true }], // Includes .prettierrc.js rules
  },
};
