// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // 스트링

let b: StringNumberSwitch<string>; // 넘버

let c: StringNumberSwitch<number | string>;
// string | number
// 넘버가 아닌 이유
// 조건부 타입의 타입 변수에 유니온 타입을 할당하면 분산적인 조건부 타입으로 업그레이드

// exclude 조건부 타입
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// number | boolean
