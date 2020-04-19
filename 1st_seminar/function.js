// 1. 함수 선언식 실습
function addNum(x, y) {
  console.log(x, "+", y, " = ", x + y); // +나 ,로 문자열/변수 연결 가능.
}

addNum(3, 4);

// 2. 함수 표현식 실습
var addStr = function (x, y) {
  console.log(x + y);
};
addStr("함수", "표현식");

// 2.1 화살표 함수
var addBool = (x, y) => {
  console.log(x, y);
};

addBool(true, false);
