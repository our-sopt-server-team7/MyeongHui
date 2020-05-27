// 2차 세미나 MISSION_LEVEL_1
// 객체 모듈을 이용한 계산기 모듈

const calModule = require("./homework2_calculator");

var addResult = calModule.add(1, 4);
console.log("add result : ", addResult);

var subResult = calModule.substract(5, 4);
console.log("substract result : ", subResult);

var mulResult = calModule.multiply(4, 3);
console.log("multiply result : ", mulResult);

var divResult = calModule.divide(8, 4);
console.log("divide result : ", divResult);