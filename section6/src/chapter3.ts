// 인터페이스를 구현하는 클래스
// 인터페이스는 클래스의 설계도 역할을 할 수 있음, 오직 객체의 '규격'만 정의하는 역할
// 클래스에 어떤 필드들이 존재하고, 어떤 메서드가 존재하는지 정의 가능

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
