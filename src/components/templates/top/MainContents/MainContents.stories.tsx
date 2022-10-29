import { Story, Meta } from '@storybook/react/types-6-0';
import { MainContents } from './MainContents';

export default {
  title: 'templates/MainContents',
  component: MainContents,
} as Meta;

const Template: Story = () => <MainContents />;

export const Contents = Template.bind({});
