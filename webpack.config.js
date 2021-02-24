const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js'
      },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/, // Set loaders to transform files.
            include: path.resolve(__dirname, 'src/'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

//   plugins: [
//     new CopyWebpackPlugin([
//       {
//         from: path.resolve(__dirname, 'index.html'),
//         to: path.resolve(__dirname, 'dist')
//       }
//     ])
//   ]
};