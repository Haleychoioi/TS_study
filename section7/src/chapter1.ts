// 타입변수 응용

// 2개의 타입 변수 사용
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 다양한 배열 타입을 인수로 받는 제네릭 함수
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string

// 위 사례에서 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 튜플타입과 Rest Parameter 활용
//함수 매개변수의 타입을 정의할 때 튜플 타입을 이용해 첫번째 요소의 타입은 T 그리고 나머지 요소의 타입은 …unknown[] 으로 길이도 타입도 상관 없도록 정의
function returnFirstValue1<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str1 = returnFirstValue([1, "hello", "mynameis"]);
// number

// 타입 변수 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅

getLength(undefined); // ❌

getLength(null); // ❌
