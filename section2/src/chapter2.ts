// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "haley"];
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 | => 유니온 타입
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];

// 다양한 타입 요소를 갖는 튜플
let tup2: [number, string, boolean] = [1, "hello", true];
