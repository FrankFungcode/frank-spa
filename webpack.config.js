/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-03 00:36:08
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-10 16:51:37
 * @FilePath: \frank-spa\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { resolve } = require("path");
const merge = require("webpack-merge");
const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _modeflag = _mode === "production" ? true : false;
// build的时候清理dist文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 进度条插件
const { ThemedProgressPlugin } = require("themed-progress-plugin");

const webpackBaseConfig = {
  entry: {
    main: resolve("src/index.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb 以下内联
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src/"),
      "@components": resolve("src/components"),
      "@hooks": resolve("src/hooks"),
      "@pages": resolve("src/pages"),
      "@layouts": resolve("src/layouts"),
      "@routes": resolve("src/routes"),
      "@assets": resolve("src/assets"),
      "@stores": resolve("src/stores"),
      "@service": resolve("src/service"),
      "@utils": resolve("src/utils"),
      "@lib": resolve("src/lib"),
      "@constants": resolve("src/constants"),
      "@connections": resolve("src/connections"),
      "@abis": resolve("src/abis"),
      "@types": resolve("src/types"),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx", ".css"],
    fallback: {
      // stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      chunkFilename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      ignoreOrder: false,
    }),
    new ThemedProgressPlugin(),
  ],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
