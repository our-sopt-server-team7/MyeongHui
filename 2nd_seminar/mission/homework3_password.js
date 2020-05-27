// 2차 세미나 MISSION_LEVEL_1
// 비밀번호 암호화하기

const fs = require("fs");

// password 파일 생성
var title = "password";
var data = "querty";
fs.writeFile(`./2nd_seminar/mission/${title}.txt`, data, async (err, data) => {
    if (err) return console.log(err.message);
    console.log(`${title}.txt가 생성되었습니다.\n`);

    // password 파일 읽어오기
    await fs.readFile(`./2nd_seminar/mission/${title}.txt`, async (err, data) => {
        if (err) return console.log(err.message);

        const salt = crypto.randomBytes(32).toString("hex");
        encrypt(salt, data);

        console.log(`${title}.txt 파일\n내용 : ${data}\n`);
    });
});

// crypto 모듈 사용
const crypto = require("crypto");
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
            console.log("암호화\nsalt : ", salt);
            console.log("hashed : ", hashed);

            // hashed 파일 생성
            title = "hashed";
            data = hashed;

            fs.writeFile(`./2nd_seminar/mission/${title}.txt`, data, async (err, data) => {
                if (err) return console.log(err.message);

                console.log(`\n${title}.txt가 생성되었습니다.`);
            });
        }
    );
};


// 출력 결과
// password.txt가 생성되었습니다.

// password.txt 파일
// 내용 : querty

// 암호화
// salt :  값값
// hashed :  값값

// hashed.txt가 생성되었습니다.