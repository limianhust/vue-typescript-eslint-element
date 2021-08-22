// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
  lintOnSave: 'default',
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
