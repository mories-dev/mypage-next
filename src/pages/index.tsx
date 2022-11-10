import type { NextPage } from 'next';
import Head from 'next/head';
import { MainContents } from '@/components/templates/top/MainContents';
import { PageFooter } from '@/components/templates/top/PageFooter';
import { PageHeader } from '@/components/templates/top/PageHeader/PageHeader';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>駆け出しフロントエンドエンジニア|もりーず</title>
        <meta name="description" content="自己紹介ページ" />
        <meta charSet="utf-8" />
      </Head>
      <PageHeader />
      <MainContents />
      <PageFooter />
    </div>
  );
};

export default Home;
