let isMomHappy = true;
let phone = {
  brand: "Samsung",
  color: "black",
};

var willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    setTimeout(() => {
      resolve("brand : ", phone.brand, "color : ", phone.color);
    }, 500);
  } else {
    setTimeout(() => {
      reject(new Error("mon is not happy"));
    }, 500);
  }
});
