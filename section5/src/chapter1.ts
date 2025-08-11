// 인터페이스 확장
interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}

// 확장
interface Animal1 {
  name: string;
  color: string;
}

interface Dog1 extends Animal1 {
  breed: string;
}

interface Cat extends Animal1 {
  isScratch: boolean;
}

interface Chicken extends Animal1 {
  isFly: boolean;
}

const dog: Dog1 = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 프로퍼티 재 정의
interface Animal2 {
  name: string;
  color: string;
}

interface Dog2 extends Animal2 {
  name: "doldol"; // name 프로퍼티의 타입을 String 타입에서 “doldol” String Literal 타입으로 재정의
  breed: string;
}

// interface Animal {
//   name: string;
//   color: string;
// }

// interface Dog extends Animal {
//   name: number; // ❌
//   breed: string;
// }

// 타입 별칭 확장도 가능
type Animal3 = {
  name: string;
  color: string;
};

interface Dog3 extends Animal3 {
  breed: string;
}

// 다중 확장
// Dog 인터페이스
interface Dog4 {
  name: string;
  color: string;
  breed: string;
}

// Cat 인터페이스
interface Cat4 {
  name: string;
  isScratch: boolean;
}

interface DogCat extends Dog4, Cat4 {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};

// DogCat 인터페이스의 최종 모양
interface DogCat {
  name: string;
  color: string;
  breed: string;
  isScratch: boolean;
}
