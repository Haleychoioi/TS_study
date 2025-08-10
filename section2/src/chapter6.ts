// any 타입
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// unknown 타입
let num: number = 10;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류 !
// unknownVar * 2 // 오류!

// unknown 타입은 독특하게도 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만,
// 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없게 된다.
// 쉽게 정리하면 오직 값을 저장하는 행위밖에 할 수 없게 된다.
