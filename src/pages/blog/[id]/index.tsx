import { GetStaticProps } from 'next';
import Head from 'next/head';
import utilStyles from '../../../styles/utils.module.css';
import { Layout } from '@/components/templates/blog/Layout/Layout';
import { getAllPostsIds, getPostData } from '@/utils/post';

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id);

  return {
    props: {
      postData,
    },
  };
};

type postDataType = {
  id: string;
  title: string;
  date: string;
  blogContentHTML: string;
};

export type PostProps = {
  postData: postDataType;
};

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout home={false}>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article style={{ marginTop: '48px' }}>
          <h1 className={utilStyles.headingX1}>{postData.title}</h1>
          <div className={utilStyles.lightText}>{postData.date}</div>
          <div
            className={utilStyles.mdStyle}
            dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}
          />
        </article>
      </>
    </Layout>
  );
};

export default Post;
