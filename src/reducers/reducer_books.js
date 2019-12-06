// 어플리케이션 스테이트는 리듀서  함수에 의해 생성된다.
// 리듀서는 언제나 책의 배열을 반환 한다 => 순수함수네.

export default function () {
  return [
    { title: "Javascript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dark Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 }
  ];
};
