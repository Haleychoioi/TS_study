// 선언 합침
// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능
type Person = {
  name: string;
};

// type Person = { ❌
//   age: number;
// };

// ---------------

interface Person1 {
  name: string;
}

interface Person1 {
  // ✅
  age: number;
}

// 결국 다음과 같은 인터페이스가 됨[선언 합침]
interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
}

interface Person2 {
  age: number;
}

const person: Person2 = {
  name: "이정환",
  age: 27,
};

// 동일한 이름의 인터페이스들이 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의한다면 오류 발생
interface Person3 {
  name: string;
}

// interface Person3 {
//   name: number;
//   age: number;
// }
