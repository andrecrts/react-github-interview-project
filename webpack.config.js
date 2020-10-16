const path = require('path'); // modulo path que viene nativo de node
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Genera un nuevo html con configuraciones especificas
const webpack = require('webpack'); // hot reloader plugin
// npx install-peerdeps --dev eslint-config-wesbos
// equivalente a export default
module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/javascript/index.js')
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), // Genera ruta dependiendo tu SO, dist es una convencion donde van los js compilados
    // filename: 'papu-bundle-[name].js'
    filename: 'javascript/[name].js', // name corresponde a los nombres key de el objeto entry
    publicPath: '/dist/'
  },
  // Crear shortcuts para paths absolutos
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Comp: path.resolve(__dirname, 'src/javascript/components'),
      Cont: path.resolve(__dirname, 'src/javascript/containers'),
      Pages: path.resolve(__dirname, 'src/javascript/cPages'),
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ] // incluir loaders de css
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.jpg|png|gif|mp4|webm$/,
        use: {
          loader: 'url-loader', // incluir url loader
          options: {
            limit: 80000,
            name: '[name].[ext]',
            outputPath: 'media/'
          }
        }
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
        test: /\.eot|ttf|otf$/,
        use: {
          loader: 'url-loader', // incluir url loader
          options: {
            limit: 80000,
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css' // con [id] te genera un id de nombre
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
};
