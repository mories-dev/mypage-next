import { Story, Meta } from '@storybook/react/types-6-0';
import { SkillCardList, SkillCardListProps } from './SkillCardList';
import { SKILL_CARD_LIST } from '@/models/top/main/Skill';

export default {
  title: 'templates/SkillCardList',
  component: SkillCardList,
} as Meta;

const Template: Story<SkillCardListProps> = (args) => (
  <SkillCardList skillCardList={args.skillCardList} />
);

export const Card = Template.bind({});

Card.args = {
  skillCardList: SKILL_CARD_LIST,
};
