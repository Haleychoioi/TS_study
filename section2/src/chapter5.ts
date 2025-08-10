// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0 할당(자동)
  USER, // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2
};

/*
enum Role {
  ADMIN = 10, // 10 할당
  USER,       // 11 할당(자동)
  GUEST,      // 12 할당(자동)
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 10
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 11
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 12
};
*/

enum Role2 {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "이정환",
  role: Role2.ADMIN, // 0
  language: Language.korean, // "ko"
};

//enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환
