const crypto = require("crypto");

// crypto_사용 예시
// const crypto = require("crypto");
// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret).update('I love cupcakes').digest('hex');
// console.log(hash);

// pbkdf2 사용 예시
// const crypto = require("crypto");
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey)=>{
//   if(err) throw err;
//   console.log(derivedKey. toString('hec'));
// })

const encrypt = (salt, password) => {
  crypto.pbkdf2(
    password,
    salt.toString(),
    1,
    32,
    "sha512",
    (err, derivedKey) => {
      if (err) throw err;
      const hashed = derivedKey.toString("hex");
      console.log("salt : ", salt);
      console.log("hashed : ", hashed);
    }
  );
};

const password = "zf2or";
const salt = crypto.randomBytes(32).toString("hex");
encrypt(salt, password);