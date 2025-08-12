// 인덱스드 엑세스 타입
// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

function printAuthorInfo(author: Post["author"]) {
  // "author" -> index
  console.log(`${author.id} - ${author.name}`);
}

function printAuthorInfoNested(authorId: Post["author"]["id"]) {
  // index 중첩
  console.log(authorId);
}

// 배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const postArr: PostList[number] = {
  // 배열의 원소를 동적으로 가져옴
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean
