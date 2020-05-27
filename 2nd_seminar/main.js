// 함수 모듈 사용
// const sum = require("./sum");

// var result = sum(1, 3);
// console.log("sum result : ", result);

//객체 모듈 사용
const sumModule = require("./sum");

var result = sumModule.sum(1, 3);
console.log("sum result : ", result);