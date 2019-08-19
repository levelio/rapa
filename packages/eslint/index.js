module.exports = {
    extends: [
        "./eslint-config-base/index.js",
        "./eslint-config-react.js",
        "./eslint-config-typescript.js",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    parser: '@typescript-eslint/parser',
    env: {
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
}
