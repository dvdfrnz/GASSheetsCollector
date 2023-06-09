const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Code.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         mangle: false,
  //         output: {
  //           comments: /@customFunction/i,
  //         },
  //       },
  //     }),
  //   ],
  // },
  plugins: [new GasPlugin()],
};

module.exports = config;
