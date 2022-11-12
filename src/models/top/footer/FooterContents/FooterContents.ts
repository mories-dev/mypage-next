export type FooterContentItemType = {
  name: string;
  url: string;
};

export type FooterContentType = FooterContentItemType[];

export const FOOTER_CONTENTS: FooterContentType[] = [
  [
    {
      name: 'もりーずについて',
      url: 'none',
    },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'History',
      url: '#history',
    },
    {
      name: 'Skills',
      url: '#skills',
    },
  ],
  [
    {
      name: 'ポートフォリオ一覧',
      url: 'none',
    },
    {
      name: 'ポケモン図鑑（Angular）',
      url: 'https://angular-pokemon-app-1ca8b.web.app/',
    },
    {
      name: 'ポケモン図鑑（React）',
      url: 'https://reapokemories.netlify.app/',
    },
    {
      name: 'デリバリーアプリ(FE)',
      url: 'https://github.com/mories-dev/food-delivery-app-frontend',
    },
    {
      name: 'デリバリーアプリ(BE)',
      url: 'https://github.com/mories-dev/food-delivery-app-backend',
    },
    {
      name: 'Twitterクローンアプリ',
      url: 'https://twitter-clone-62db6.web.app/',
    },
    {
      name: '簡易ブログ（React + firebase）',
      url: 'https://blog-with-react-and-fire-8749a.web.app/',
    },
    {
      name: 'noteアプリ（React + firebase）',
      url: 'https://moriesdev.netlify.app/',
    },
    {
      name: 'todo-api（Java + Spring）',
      url: 'https://github.com/mories-dev/todo-api',
    },
  ],
  [
    {
      name: 'SNS関連',
      url: 'none',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mories_dev',
    },
    {
      name: 'Qiita',
      url: 'https://qiita.com/mories1223',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mories-dev',
    },
  ],
];
