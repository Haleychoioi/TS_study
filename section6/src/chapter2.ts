// 접근 제어자
// 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능

// public : 모든 범위에서 접근 가능
// private : 클래스 내부에서만 접근 가능
// proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

// public -> 어디서든지 이 프로퍼티에 접근할 수 있음, 별도로 접근제어자를 지정하지 않으면 기본적으로 public
// private -> 클래스 내부에서만 이 필드에 접근 가능
// protected -> public과 private의 중간으로 클래스 외부에서는 접근이 안되지만 클래스 내부와 파생 클래스에서 접근이 가능
class Employee {
  // 필드
  private name: string;
  protected age: number;
  public position: string; // 직접 명시도 가능/명시를 안 하면 자동으로 public

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

class ExecutiveOfficer extends Employee {
  // 메서드
  func() {
    // this.name; // ❌ 오류
    this.age; // ✅ 가능(파생 클래스에서 접근 가능)
  }
}

const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동"; // ❌ 오류
// employee.age = 30; // ❌ 오류
employee.position = "디자이너";

// 필드 생략하기
// 생성자의 매개변수에도 접근제어자 설정 가능
// 생성자에 설정하면 동일한 이름의 필드 선언 불가, 생성자 매개변수에 설정 시 자동으로 필드도 함께 선언되기 때문
class Employee1 {
  // 필드
  // private name: string;    // ❌
  // protected age: number;   // ❌
  // public position: string; // ❌

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.필드 = 매개변수 가 자동으로 수행되므로 생략 가능
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
