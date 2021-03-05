const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const mode = process.env.NODE_ENV || "development";

module.exports = (env) => {
  const BUILD_ENV = env.BUILD_ENV;
  const prod = BUILD_ENV === "production";

  console.log(process.env.NODE_ENV);
  console.log(env.BUILD_ENV);
  console.log(prod);
  return {
    mode,
    entry: {
      app: path.join(__dirname, "src", "index.js"),
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "dist"),
    },
    devtool: "eval-source-map",
    resolve: {
      extensions: [".js"],
      modules: [path.join(__dirname, "src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            /**
             * MiniCssExtractPlugin doesn't support HMR.
             * For developing, use 'style-loader' instead.
             * */
            prod ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
      new HTMLWebpackPlugin({
        template: "./public/index.html",
        minify:
          mode === "production"
            ? {
                collapseWhitespace: true,
                removeComments: true,
              }
            : false,
      }),
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          browse: "browse@http://localhost:9001/remoteEntry.js",
          restaurant: "restaurant@http://localhost:9002/remoteEntry.js",
          home: "home@http://localhost:9003/remoteEntry.js",
        },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
      }),
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      port: 9009,
      headers: {
        "Access-Control-Allow-Origin": "*",
        https: true,
      },
    },
  };
};
