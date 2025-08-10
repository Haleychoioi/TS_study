// 객체, 객체 리터럴 타입
// 타입스크립트는 이 객체에 어떤 프로퍼티들이 있어야 하는지 정의하는 방식으로 객체의 타입을 정의
let user: {
  id?: number; // 선택적 프로퍼티 Optional Property
  readonly name: string; // 읽기전용 프로퍼티 Readonly Property
} = {
  id: 1,
  name: "이정환",
};
