import { Story, Meta } from '@storybook/react/types-6-0';
import { SkillCard, SkillCardProps } from './SkillCard';
import { SKILL_CARD_LIST } from '@/models/top/main/Skill';

export default {
  title: 'templates/SkillCard',
  component: SkillCard,
} as Meta;

const Template: Story<SkillCardProps> = (args) => (
  <SkillCard skillCard={args.skillCard} />
);

export const Card = Template.bind({});

Card.args = {
  skillCard: SKILL_CARD_LIST[0],
};
