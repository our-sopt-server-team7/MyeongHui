// 2차 세미나 MISSION_LEVEL_1
// promise logic

let isMomHappy = true;
let phone = {
  brand: "Samsung",
  color: "black",
};

var willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    // phone 객체 출력
    resolve(console.log(phone));
  } else {
    // 에러 메시지 출력
    reject(new Error("mon is not happy"));
  }
});