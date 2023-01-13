var path = require("path")

module.exports = {
  entry: "./src/index.js", // 웹팩은 index.js 파일 안에 있는 import 문부터 시작해서 모든 의존관계 그래프를 자동으로 만든다.
  output: {
    path: path.join(___dirname, "dist", "assets"),
    filename: "bundle.js" // dist/bundle.js 에 패키징한 자바스크립트 파일을 넣어준다.
  }
}