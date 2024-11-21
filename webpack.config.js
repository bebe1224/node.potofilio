// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // 엔트리 파일을 src/index.js로 설정
  output: {
    filename: "bundle.js", // 번들링 후 파일 이름을 bundle.js로 설정
    path: path.resolve(__dirname, "dist"), // dist 폴더에 출력
  },
  mode: "development", // 개발 모드
};
