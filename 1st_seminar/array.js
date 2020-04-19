// 1. 배열 선언 실습
var server1 = ["김해리", "심다은", 44, null, true]; // 배열 리터널 이용
var server2 = Array("박경선", "허정민", 12); // Array 객체 생성자 이용
var server3 = new Array("황지혜", "조충범", false, undefined); // new 연산자 이용

console.log("server1 : ", server1);
console.log("server2 : ", server2);
console.log("server3 : ", server3);

// 2. 배열 추가 실습
server1.push(123); // push() 메소드 이용
server2[server2.length] = "아무거나 넣어보자"; // length 프로퍼티 이용
server3[99] = "server3의 길이는?"; // 특정 인덱스를 지정하여 추가

console.log("server1 : ", server1);
console.log("server2 : ", server2);
console.log("server3 : ", server3);

// 3. 배열 순회 실습
// <for-of>이용
let str1 = "server1에는 '";
for (var item of server1) {
  str1 += item + ", ";
}
str1 += "'이 들어있습니다.";
console.log(str1);

// <for-in>이용
let str2 = "server2에는 '";
for (var item in server2) {
  str2 += server2[item] + ", ";
}
str2 += "'이 들어있습니다.";
console.log(str2);

// <forEach>이용
let str3 = "server3에는 '";
server3.forEach((item) => (str3 += item + ", "));
str3 += "'이 들어있습니다.";
console.log(str3);
