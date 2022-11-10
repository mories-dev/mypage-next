export type BlogContentType = {
  title: string;
  content: JSX.Element | string;
  imageUrl: string;
};

export const BLOG_CONTENT_LIST: BlogContentType[] = [
  {
    title: '技術関連',
    content: (
      <>
        フロントエンドの技術中心で自分の経験の中で得た知識を記事化しています。
        <br />
        自分自身の振り返りのためでもありますが、この記事を読んだ人の助けになればと思っています。
      </>
    ),
    imageUrl: 'blog.jpg',
  },
  {
    title: '趣味',
    content: 'プライベートに関する記事です。主にはペットの犬の話が中心です。',
    imageUrl: 'hobby.jpg',
  },
];
