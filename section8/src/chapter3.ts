// 맵드 타입
interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser({
  age: 25,
});

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};
// ==
// type PartialUser = {
//   [key in keyof User]?: User[key];
// };
// {
//   id?: number;
//   name?: string;
//   age?: number;
// }

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
