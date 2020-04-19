var server7 = [
  {
    name: "백선혜",
    nickname: "막냉이",
    age: 22,
    printName: function () {
      console.log(
        "서버7팀 칠성사이다조의 " +
          this.name +
          "의 별명은 " +
          this.nickname +
          "이고, 나이는 " +
          this.age +
          "살 입니다."
      );
    },
  },
  {
    name: "박현주",
    nickname: "설리반",
    age: 25,
    printName: function () {
      console.log(
        "서버7팀 칠성사이다조의 " +
          this.name +
          "의 별명은 " +
          this.nickname +
          "이고, 나이는 " +
          this.age +
          "살 입니다."
      );
    },
  },
  {
    name: "최정균",
    nickname: "마동석",
    age: 25,
    printName: function () {
      console.log(
        "서버7팀 칠성사이다조의 " +
          this.name +
          "의 별명은 " +
          this.nickname +
          "이고, 나이는 " +
          this.age +
          "살 입니다."
      );
    },
  },
  {
    name: "김성윤",
    nickname: "윈스턴",
    age: 23,
    printName: function () {
      console.log(
        "서버7팀 칠성사이다조의 " +
          this.name +
          "의 별명은 " +
          this.nickname +
          "이고, 나이는 " +
          this.age +
          "살 입니다."
      );
    },
  },
  {
    name: "장세영",
    nickname: "?",
    age: 0,
    printName: function () {
      console.log(
        "서버7팀 칠성사이다조의 " + this.name + "님은 아직 못만났습니다ㅠㅠ"
      );
    },
  },
];

server7.forEach((person) => person.printName());
