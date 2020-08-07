const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-styled-components']
          }}, {
            loader: 'ts-loader'
        }]
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  }
}
