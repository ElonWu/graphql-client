const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AutoPrefixer = require("autoprefixer");
function srcPath(subDir) {
  return path.resolve(__dirname, "src", subDir);
}

const scssRules = {
  use: ["style-loader", "css-loader", "sass-loader"]
};

module.exports = {
  // context: path.resolve(__dirname, "src"),
  entry: "./src/app.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    // host: "localhost:3200",
    inline: false,
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract(scssRules)
      // },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  resolve: {
    // mjs 用于 graphql 的文件引入
    extensions: [".mjs", ".tsx", ".ts", ".js"],
    alias: {
      components: srcPath("components"),
      views: srcPath("views"),
      styles: srcPath("styles"),
      routes: srcPath("routes"),
      api: srcPath("api"),
      models: srcPath("models")
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: "src/index.html",
      filename: "index.html"
    })
    // new ExtractTextPlugin()
  ]
};
