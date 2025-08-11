// TS의 클래스
// 필드를 선언할 때 타입 주석으로 타입을 함께 정의
// 생성자에서 각 필드의 값을 초기화하지 않을 경우 초기값도 함께 명시
// 생성자 함수에서 필드의 값들을 초기화 해준다면 필드 선언 시의 초기값은 생략 가능
class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position?: string = ""; // 선택적 프로퍼티

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

// 클래스는 타입이다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

// 상속
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
