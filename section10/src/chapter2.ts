// Pick<T, K>
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};
// 추출된 타입 : { title : string; content : string }

// Omit<T, K>
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Record<K, V>
// type Thumbnail = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };
// ==
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
