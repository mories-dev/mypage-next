export const HISTORY_ITEMS: HistoryItem[] = [
  {
    date: '1996年12月',
    event: '誕生',
  },
  {
    date: '2015年3月',
    event: '福井県立武生高等学校　卒業',
  },
  {
    date: '2015年4月',
    event: '大阪大学工学部　入学',
  },
  {
    date: '2019年3月',
    event: '大阪大学工学部　卒業',
  },
  {
    date: '2019年4月',
    event: '大阪大学大学院工学研究科　入学',
  },
  {
    date: '2021年3月',
    event: '大阪大学大学院工学研究科　卒業',
  },
  {
    date: '2021年4月',
    event: 'BtoB向けWEBアプリ開発会社　就職',
  },
];

export type HistoryItem = {
  date: string;
  event: string;
};
