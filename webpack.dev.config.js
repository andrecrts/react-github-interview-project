const path = require('path'); // modulo path que viene nativo de node
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Genera un nuevo html con configuraciones especificas
const webpack = require('webpack'); // hot reloader plugin

// equivalente a export default
module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/javascript/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // Genera ruta dependiendo tu SO, dist es una convencion donde van los js compilados
    // filename: 'papu-bundle-[name].js'
    filename: 'javascript/[name].js', // name corresponde a los nombres key de el objeto entry
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true, // fix cannot get on refresh
    contentBase: path.resolve(__dirname, 'src'),
    disableHostCheck: true // That solved it
  },
  // Crear shortcuts para paths absolutos
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Comp: path.resolve(__dirname, 'src/javascript/components'),
      Pages: path.resolve(__dirname, 'src/javascript/cPages'),
      Cont: path.resolve(__dirname, 'src/javascript/containers'),
      CommonComps: path.resolve(__dirname, 'src/javascript/commonComps'),
      Others: path.resolve(__dirname, 'src/javascript/others'),
      Actions: path.resolve(__dirname, 'src/javascript/reduxActions'),
      Reducers: path.resolve(__dirname, 'src/javascript/reduxReducers'),
      Types: path.resolve(__dirname, 'src/javascript/reduxTypes'),
      Images: path.resolve(__dirname, 'src/images')
    }
  },
  // aqui van los loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader', // incluir babel
        exclude: /node_modules/ // excluye esa carpeta
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader', // incluir url loader
          options: {
            limit: 1,
            name: '[name].[ext]',
            outputPath: 'media/'
          }
        }
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|otf|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 80000
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // incluir loaders de css
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // incluir loaders de css
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ]
};
