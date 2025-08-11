class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);

// 타입변수의 타입을 직접 설정하고 싶다면
// const numberList = new List<number>([1, 2, 3]);
// const stringList = new List<string>(["1", "2"]);
