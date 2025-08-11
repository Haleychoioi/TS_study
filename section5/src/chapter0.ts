// interface
interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // sayHi: (a: number, b: number) => void; // ❌
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}
// 함수 타입 표현식으로 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능
// 그러나 호출 시그니처를 이용해 메서드의 타입을 정의하면 오버로딩 구현이 가능

// 하이브리드 타입
interface Func2 {
  (a: number): string;
  b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;

// 주의할 점
// 타입 별칭에서는 union/Intersection 타입 정의 가능하나 interface는 불가능
type Type1 = number | string;
type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// } | number // ❌
