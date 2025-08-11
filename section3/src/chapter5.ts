// 타입 추론

let a1 = 10;
// number 타입으로 추론

// function func(param){ // 오류

// }

// 1. 변수 선언
let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

// 2. 구조 분해 할당
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 3. 함수의 반환값
function func() {
  return "hello";
}
// 반환값이 string 타입으로 추론된다

// 4. 기본값이 설정된 매개변수
function func1(message = "hello") {
  return "hello";
}

// 주의해야 할 상황들

// 1. 암시적으로 any 타입으로 추론
let d;
// 암시적인 any 타입으로 추론
// 변수를 선언할때 초기값을 생략하면 암시적인 any 타입으로 추론됨.
// 이때 매개변수의 타입이 암시적 any로 추론될 때와 달리 일반 변수의 타입이 암시적 any 타입으로 추론되는 상황은 오류로 판단하지 않ㅇ,ㅁ.

d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
d.toFixed(); // 오류

// 2. const 상수의 추론
const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

// 최적 공통 타입 (Best Common Type)
let arr = [1, "string"];
// (string | number)[] 타입으로 추론
