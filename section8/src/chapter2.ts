// keyof 연산자
interface Person {
  name: string;
  age: number;
  location: string; // 추가
}

// function getPropertyKey(person: Person, key: "name" | "age" | "location") { // 매번 별도로 추가해줘야하는 번거로움
//   return person[key];
// }

function getPropertyKey(person: Person, key: keyof Person) {
  // == key: "name" | "age" | "location"
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
  location: "Seoul",
};

// typeof with keyof
function getPropertyKey1(person: Person, key: keyof typeof person) {
  return person[key];
}
