import { Story, Meta } from '@storybook/react/types-6-0';
import { MainView } from './MainView';

export default {
  title: 'templates/MainView',
  component: MainView,
} as Meta;

const Template: Story = () => <MainView />;

export const Main = Template.bind({});
