/**
 * This is just ide helper, not related to source code
 */
const resolve = require('path').resolve
module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './src'),
      '~~': resolve(__dirname, './src'),
      '@@': resolve(__dirname, './src'),
    },
  },
}
