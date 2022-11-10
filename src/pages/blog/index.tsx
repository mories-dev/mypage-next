import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import utilStyle from '../../styles/utils.module.css';
import { Layout, siteTitle } from '@/components/templates/blog/Layout/Layout';
import { getPostsData } from '@/utils/post';

export const getStaticProps = () => {
  const allPostsData = getPostsData(); //id, title, date, thumbnail

  return {
    props: {
      allPostsData,
    },
  };
};

type AllDataType = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
};

type NextPageProps = {
  allPostsData: AllDataType[];
};

const Blog: NextPage<NextPageProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <p className={utilStyle.headingMd}>
            私はフロントエンドエンジニアです。好きなフレームワークはNext.jsです。
          </p>
        </section>
        <section className={styles.blogs}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => {
              return (
                <article key={id}>
                  <Link href={`/blog/${id}`}>
                    <Image
                      src={`${thumbnail}`}
                      alt=""
                      className={styles.thumbnailImage}
                      width={'950px'}
                      height={'400px'}
                    />
                  </Link>
                  <Link href={`/blog/${id}`}>
                    <a className={utilStyle.boldText}>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyle.lightText}>{date}</small>
                </article>
              );
            })}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Blog;
