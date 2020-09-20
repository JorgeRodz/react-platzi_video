const path = require('path') // para hacer uso del modulo path
const HtmlWebpackPlugin = require('html-webpack-plugin') // instanciamos el plugin que instalamos
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // instanciamos el plugin para trabajar con css-sass

module.exports = {
  entry: './src/index.js', // punto de entrada sera nuestro archivo principal index.js
  output: { // le indicaremos donde se guardaran los archivos resultantes de la compilacion
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: { // extensiones que vamos a utilizar en el proyecto
    extensions: ['.js', '.jsx']
  },
  module: { // modulo con las reglase necesarias para nuestro proyecto
    rules: [
      { // para js y jsx
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      { // para html
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      { // para trabajar css con sass
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [ // para utilizar los plugins que instalamos
    new HtmlWebpackPlugin({
      template: './public/index.html', // nuestro template de html
      filename: './index.html' // el nombre del archivo resultante
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ]
}