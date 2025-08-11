// 제네릭
// 일반적인, 포괄적인

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let str = func("string");
let arr = func<[number, number, number]>([1, 2, 3]); // 함수 호출 시 타입 변수에 할당할 타입을 직접 명시
