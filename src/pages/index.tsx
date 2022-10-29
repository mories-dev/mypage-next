import type { NextPage } from 'next';
import Head from 'next/head';
import { PageHeader } from '../components/templates/top/PageHeader/PageHeader';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>駆け出しフロントエンドエンジニア|もりーず</title>
        <meta name="description" content="自己紹介ページ" />
        <meta charSet="utf-8" />
      </Head>
      <PageHeader />
    </div>
  );
};

export default Home;
