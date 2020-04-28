const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name]-bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              cache: false,
              eslintPath: require.resolve("eslint"),
              resolvePluginsRelativeTo: __dirname,
            },
            loader: require.resolve("eslint-loader"),
          },
        ],
        include: path.resolve(__dirname, "../src"),
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "../public") }]),
    // This gives some necessary context to module not found errors, such as
    // the requesting resource.
    new ModuleNotFoundPlugin(),
    //Prevent momentjs locales from being put in the bundle
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
