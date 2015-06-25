require("babel/register")

const path = require("path")
const webpack = require("webpack")
const LessPluginCleanCSS = require("less-plugin-clean-css")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const embedFileSize = 65536
const rootPath = path.resolve(__dirname)

const config = {
  entry: [ path.join(rootPath, "app", "app.jsx") ],

  output: {
    path: path.resolve(rootPath, "assets"),
    filename: "bundle.js"
  },

  lessLoader: {
    lessPlugins: [
      new LessPluginCleanCSS({ advanced: true })
    ]
  },

  resolve: {
    extensions: [ "", ".js", ".jsx" ]
  },

  plugins: [
    new ExtractTextPlugin("app.css"),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel?stage=0",
        include: path.join(rootPath, "app")
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.json5$/, loader: "json5-loader" },
      { test: /\.txt$/, loader: "raw-loader" },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url?limit=25000" },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      { test: /\.md$/, loaders: [ "html-loader", "markdown-loader" ] }
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: [ "eslint-loader" ],
        include: [ path.join(rootPath, "app") ]
      }
    ]
  },

  eslint: {
    configFile: ".eslintrc",
    emitError: true
  }
}

module.exports = config
