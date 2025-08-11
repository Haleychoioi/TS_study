// unknown 타입(전체 집합)
let a: unknown = 1; // number -> unknown
let b: unknown = "hello"; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown

// never 타입(공집합 타입)
function errorFunc(): never {
  throw new Error();
}

let neverVar: never;

let a1: string = neverVar; // never -> string
let c1: boolean = neverVar; // never -> boolean
let d1: null = neverVar; // never -> null
let e1: undefined = neverVar; // never -> undefined
let f1: [] = neverVar; // never -> Array
let g1: {} = neverVar; // never -> Object

// void 타입
function noReturnFuncA(): void {
  return undefined;
}

function noReturnFuncB(): void {
  return;
}

function noReturnFuncC(): void {}

let voidVar: void;

voidVar = undefined; // undefined -> void (ok)

let neverVar1: never;
voidVar = neverVar; // never -> void (ok)

// any 타입
let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
