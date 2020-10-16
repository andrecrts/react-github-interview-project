const path = require('path'); // modulo path que viene nativo de node
const webpack = require('webpack'); // hot reloader plugin

// equivalente a export default
module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-router-dom']
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), // Genera ruta dependiendo tu SO, dist es una convencion donde van los js compilados
    // filename: 'papu-bundle-[name].js'
    filename: 'javascript/[name].js', // name corresponde a los nombres key de el objeto entry,
    library: 'modules'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ]
};
