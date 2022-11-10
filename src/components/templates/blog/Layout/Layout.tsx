import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../../../../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'mories_dev';
export const siteTitle = 'Tech Blog';

export type LayoutProps = {
  children: JSX.Element;
  home: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/icon.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              width={'50px'}
              height={'50px'}
              alt="プロフィール"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src="/icon.jpg"
              className={`${utilStyles.borderCircle}`}
              width={'50px'}
              height={'50px'}
              alt="プロフィール"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {home && (
        <div>
          <Link href="/">←ホームへ戻る</Link>
        </div>
      )}
      {!home && (
        <div>
          <Link href="/blog">←ブログ一覧へ戻る</Link>
        </div>
      )}
    </div>
  );
};
