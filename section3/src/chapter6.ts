// 타입 단언
type Person = {
  name: string;
  age: number;
};

// let person: Person = {}; 빈 객체는 Person 타입이 아니므로 오류가 발생
// person.name = "";
// person.age = 23;

let person = {} as Person; // 타입 단언
person.name = "";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // breed 라는 초과 프로퍼티가 존재하지만 이 값을 Dog 타입으로 단언하여 초과 프로퍼티 검사를 피함

// 타입 단언의 조건
let num1 = 10 as never; // ✅
let num2 = 10 as unknown; // ✅

// let num3 = 10 as string; // ❌

// 다중 단언
// 1. number 타입의 값을 unknown 타입으로 단언합니다.
// 2. unknown 타입의 값을 string 타입으로 단언합니다.
// 중간에 값을 unknown 타입으로 단언하면 unknown 타입은 모든 타입의 슈퍼타입이므로 모든 타입으로 또 다시 단언하는게 가능
// 매우 좋지 않은 방식!
let num3 = 10 as unknown as string;

// const 단언
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;
