// 1. JSON 객체 실습
var sopt = {
  name: "OUR SOPT",
  slogan: "WE LEAD OUR SOPT",
  part: ["plan", "design", "android", "ios", "server"],
  number: 180,
  printName: function () {
    console.log("name : ", this.name);
  },
  printNum: function () {
    console.log("number : ", this.number);
  },
};

console.log("typeof sopt : ", typeof sopt);

console.log("sopt : " + sopt);
console.log("sopt : ", sopt);
console.log("sopt : " + JSON.stringify(sopt));

sopt.printName();
sopt.number = 200;
sopt.printNum();

// 2. JSON 배열 실습
var persons = [
  { name: "백명희", age: 100, month: 1, date: 1 },
  { name: "천명희", age: 1000, month: 11, date: 24 },
  { name: "만명희", age: 10000, month: 12, date: 31 },
];

console.log("사람 : " + persons);
console.log("사람 : ", persons);
console.log("사람 : " + JSON.stringify(persons));

persons.forEach((person) =>
  console.log(
    person.name +
      "는 나이는 " +
      person.age +
      "살이고 생일은 " +
      person.month +
      "월" +
      person.date +
      "일 입니다."
  )
);
