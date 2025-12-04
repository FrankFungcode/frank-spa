/*
 * @Author: FrankFungcode combeebe@gmail.com
 * @Date: 2025-12-03 00:36:08
 * @LastEditors: FrankFungcode combeebe@gmail.com
 * @LastEditTime: 2025-12-04 13:58:47
 * @FilePath: \frank-spa\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
const { resolve } = require("path");
const merge = require('webpack-merge');
const argv = require("yargs-parser")(process.argv.slice(2));
console.log("argv:", argv);
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

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
          loader: "swc-loader",
        },
      },
    ],
  },
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
