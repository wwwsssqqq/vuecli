// build/webpack.prod.conf.js

module.exports = {
  entry: {
    entry1: './src/main.js',
    entry2: './src/main2.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",  // 要打包输出哪个文件，可以使用相对路径
            filename: "index.html"   // 打包输出后该html文件的名称
        })
    ]
}