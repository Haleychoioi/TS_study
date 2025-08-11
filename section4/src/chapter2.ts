// 함수 타입의 호환성이란 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미

// 기준 1: 반환값 타입이 호환되는가?
// A 반환값 타입이 B 반환값 타입의 슈퍼타입이라면 두 타입은 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌
// A의 반환값 타입은 Number, B의 반환값 타입은 Number Literal
// 따라서 변수 a에 b를 할당하는 것은 가능하나 반대로는 불가능

// 기준 2: 매개변수의 타입이 호환되는가?
// 2-1 매개변수의 개수가 같을 때
// 두 타입의 매개변수의 개수가 같다면 C 매개변수의 타입이 D 매개변수 타입의 서브 타입일 때에 호환
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌
d = c; // ✅

// 2-2 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌

// 받는 쪽에서 요구하는 매개변수를 주는 쪽이 모두 제공하는가?
// 받는 쪽에서 기대하는 반환값을 주는 쪽이 모두 제공하는가?
