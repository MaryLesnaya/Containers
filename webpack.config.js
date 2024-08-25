const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
            },
          },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
            },
            
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
          ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),

      new MiniCssExtractPlugin()
    ]
},

resolve: [
  extensions: ['.tsx', '.ts', '.js']
]