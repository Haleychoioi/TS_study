// void 타입
function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;

// "strictNullChecks: false" 일 경우
// let a: void;
// a = undefined;
// a = null;

// never 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
