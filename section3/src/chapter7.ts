// 타입 좁히기
function func(value: number | string) {}

// function func(value: number | string) {
//   value.toFixed() // 오류
// 	value.toUpperCase() // 오류
// }

// 조건문을 이용해 value 타입이 number or String임을 보장해줘야 메서드 사용 가능
// 조건문과 함께 사용해 타입을 좁히는 것 -> 타입 가드
function func1(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// instanceof 타입 가드(클래스, class로 만들어진 객체의 출신(생성자 함수)을 확인)
function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

// in 타입 가드(일반 객체 타입, 객체의 속성ㅇ 있는지 확인)
type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
