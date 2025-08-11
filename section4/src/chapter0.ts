function func(a: number, b: number): number {
  // 함수의 반환값 타입은 자동으로 추론되기 때문에 생략 가능
  return a + b;
}

// 화살표 함수 타입
const add = (a: number, b: number): number => a + b; // 함수의 반환값 타입은 자동으로 추론되기 때문에 생략 가능

// 매개변수 기본값 설정 시 타입이 자동으로 추론됨
function introduce(name = "이정환") {
  console.log(`name : ${name}`);
}

// function introduce(name:number = "이정환") { // 기본값과 다른 타입으로 타입을 정의하면 오류 발생
// 	console.log(`name : ${name}`);
// }

// 선택적 매개변수 설정
// 물음표를 붙여주면 생략 가능
function introduce1(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce1("이정환", 156);

introduce1("이정환");

// tall 값을 number 타입의 값일 거라고 기대하고 사용하려면 다음과 같이 타입 좁히기가 필요(number | undefined 이므로)
function introduce2(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

// Rest Parameter
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum1(1, 2, 3); // ✅
// getSum1(1, 2, 3, 4); // ❌
