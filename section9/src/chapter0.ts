// 조건부 타입

// 넘버 타입은 스트링 타입의 서브타입이 아니므로 거짓이 되고 결과는 스트링 타입으로 됨
type A = number extends string ? number : string;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// 참이 되어 넘버 타입이 됨
type B = ObjB extends ObjA ? number : string;

// 제네릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
// string

let result2 = removeSpaces(undefined);
// undefined
