// 서브타입 (Subtype): 더 많은 속성을 가지고 있어서, 슈퍼타입이 요구하는 속성을 모두 포함하는 타입. 즉, 할당될 수 있는 쪽. (Dog는 Animal의 서브타입)
// 슈퍼타입 (Supertype): 더 적은 속성을 가지고 있어서, 서브타입의 할당을 받을 수 있는 타입. 즉, 할당받는 쪽. (Animal은 Dog의 슈퍼타입)

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO

//초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능입니다.
// 이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막습니다.
// let book2: Book = { // 오류 발생
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",
// };

let book3: Book = programmingBook; // 앞서 만들어둔 변수

// 함수의 매개변수에 인수로 값을 전달하는 과정도 변수를 초기화 하는 과정과 동일
function func(book: Book) {}

// func({ // 오류 발생
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",
// });

func(programmingBook);
