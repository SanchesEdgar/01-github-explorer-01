const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const isDevelopment = process.env.NODE_DEV !== 'production'
module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   devtool: isDevelopment ? 'eval-source-map' : 'source-map',
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
      }),
   ],
   devServer: {
      watchFiles: [path.resolve(__dirname, 'public', 'index.html')],
   },
   module: {
      rules: [
         {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
      ],
   },
}
