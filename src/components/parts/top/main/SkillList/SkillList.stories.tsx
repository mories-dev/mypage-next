import { Story, Meta } from '@storybook/react/types-6-0';
import { SkillList, SkillListProps } from './SkillList';

export default {
  title: 'parts/SkillList',
  component: SkillList,
} as Meta;

const Template: Story<SkillListProps> = (args) => (
  <SkillList listItems={args.listItems} />
);

export const Skills = Template.bind({});

Skills.args = {
  listItems: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Emotion'],
};
