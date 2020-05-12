// 함수 모듈 사용
// const sum = require("./sum");

// var result = sum(1, 3);
// console.log("sum result : ", result);

// 객체 모듈 사용
// const sumModule = require("./sum");

// var result = sumModule.sum(1, 3);
// console.log("sum result : ", result);

// 계산기 모듈 사용
const calModule = require("./calculator");

//
var addResult = calModule.add(1, 4);
console.log("add result : ", addResult);

var subResult = calModule.substract(5, 4);
console.log("substract result : ", subResult);

var mulResult = calModule.multiply(4, 3);
console.log("multiply result : ", mulResult);

var divResult = calModule.divide(8, 4);
console.log("divide result : ", divResult);
