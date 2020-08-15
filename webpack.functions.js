const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  plugins: [
    new Dotenv({
      path: './.env.local',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
}
