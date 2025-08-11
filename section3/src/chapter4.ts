// 대수 타입 -> 여러개의 타입을 합성해서 만드는 타입

// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // ✅
  name: "",
  color: "",
};

let union2: Union1 = {
  // ✅
  name: "",
  language: "",
};

let union3: Union1 = {
  // ✅
  name: "",
  color: "",
  language: "",
};

// 유니언 타입 Union1 = Dog | Person은 이름 그대로 Dog 타입이거나 Person 타입 둘 중 하나가 될 수 있다는 뜻
// 즉, Union1 변수에 값을 할당할 때는 이 두 타입 중 최소한 하나의 타입에 완벽하게 일치해야함
// let union4: Union1 = { // ❌
//   name: "",
// };

// 교집합 타입 - Intersection 타입
// 두 타입의 속성들을 합쳐서 하나의 새로운 타입을 만드는 것
// never 타입으로 추론된다 대다수의 기본 타입들 간에는 서로 공유하는 교집합이 없기 때문에 이런 인터섹션 타입은 보통 객체 타입들에 자주 사용
let variable: number & string;

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog1 & Person1;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
