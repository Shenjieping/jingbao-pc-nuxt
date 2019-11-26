// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-off-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  // extends: ['plugin:vue/essential', 'airbnb-base'],
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'vue',
    // 'html'
  ],
  // check if imports actually resolve
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: 'build/webpack.base.conf.js'
    //   }
    // }
  },
  // add your custom rules here
  rules: {
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    // "no-undef": 0,
    //禁止在计算属性中对属性修改
    'vue/no-side-effects-in-computed-properties': 'off',
    //要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    //不能有声明后未被使用的变量或参数
    "no-unused-vars": 0,
    //强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [2, { "before": true, "after": true }],
    //允许在开发环境使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //允许在开发环境使用console
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    // 关闭语句强制分号结尾
    "semi": [2, 'always'],
    //空行最多不能超过100行
    // "no-multiple-empty-lines": [0, {"max": 100}],
    //关闭禁止混用tab和空格
    // 'no-mixed-spaces-and-tabs': 2,
    //   "indent": [2, 4], //缩进风格
    //   "vue/script-indent": [2, 4, {
    //     baseIndent: 1
    //   }],
    //强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, 'always'],
    // 'comma-dangle': [1, 'always-multiline']
    'import/no-unresolved': [0],
    // 'indent': 0,
    // 禁用不必要的转义字符
    "no-useless-escape": 2,
    // prop 的默认值必须匹配它的类型
    'vue/require-valid-default-prop': 'off',
  }
}
