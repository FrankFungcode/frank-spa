/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-04 13:47:31
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-10 17:17:00
 * @FilePath: \frank-spa\config\webpack.production.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: join(__dirname, "../dist"),
    publicPath: "/",
    filename: "scripts/[name].[contenthash:5].bundle.js",
    assetModuleFilename: "images/[name].[contenthash:5][ext]",
  },
  performance: {
    maxAssetSize: 250000, // 最大资源大小250KB
    maxEntrypointSize: 250000, // 最大入口资源大小250KB
    hints: "warning", // 超出限制时只给出警告
  },
  optimization: {
    minimize: true,
    //css + js 多线程压缩 加快编译速度
    //电脑本身就比较慢 反而更慢
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-dom/client": "ReactDOM",
    "@remix-run/router": "RemixRouter",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Yideng",
      filename: "index.html",
      template: resolve(__dirname, "../src/index-prod.html"),
      favicon: "./public/favicon.ico",
    }),
  ],
};
