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
