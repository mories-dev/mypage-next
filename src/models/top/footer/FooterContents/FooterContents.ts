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
      url: '',
    },
    {
      name: 'ポケモン図鑑（React）',
      url: '',
    },
    {
      name: 'デリバリーアプリ',
      url: '',
    },
    {
      name: 'Twitterクローンアプリ',
      url: '',
    },
    {
      name: '簡易ブログ（React + firebase）',
      url: '',
    },
    {
      name: 'noteアプリ（React + firebase）',
      url: '',
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
