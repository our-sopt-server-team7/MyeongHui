// 1. 배열 선언 실습
var server1 = ["김해리", "심다은", 44, null, true];
var server2 = Array("박경선", "허정민", 12);
var server3 = new Array("황지혜", "조충범", false, undefined);

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
