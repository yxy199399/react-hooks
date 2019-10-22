module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      // 添加ES特性支持，使之能够识别ES6语法
      jsx: true
    }
  },
  env: {
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  parser: 'babel-eslint' //指定一个不同的解析器, 默认esprima
}
