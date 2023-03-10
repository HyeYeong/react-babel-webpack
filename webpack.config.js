const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ___dirname = path.resolve()

module.exports = {
  entry: "./src/index.js", // 웹팩은 index.js 파일 안에 있는 import 문부터 시작해서 모든 의존관계 그래프를 자동으로 만든다.
  output: {
    path: path.join(___dirname, "dist", "assets"),
    filename: "bundle.js" // dist/bundle.js 에 패키징한 자바스크립트 파일을 넣어준다.
  },
  module: {
      rules: [{
        test: /\.js$/, // 로더가 작용해야 하는 파일 경로를 찾기 위한 정규식
        exclude: /node_modules/, // node_modules 폴더의 자바스크립트 파일 이외의, 모든 자바스크립트 파일에 대해 babel-loader를 실행한다.
        loader: "babel-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html"
    })
  ]
}