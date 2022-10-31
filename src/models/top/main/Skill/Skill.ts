export type SkillCardType = {
  title: string;
  items: string[];
};

export const SKILL_CARD_LIST: SkillCardType[] = [
  {
    title: 'フロントエンド',
    items: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Emotion'],
  },
  {
    title: 'バックエンド',
    items: ['Java', 'Spring Boot', 'ServletJSP', 'Node.js'],
  },
  {
    title: 'その他',
    items: ['Docker', 'Git'],
  },
];
