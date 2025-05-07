module.exports = {
  // ...existing code...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
};