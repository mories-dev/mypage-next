import { Story, Meta } from '@storybook/react/types-6-0';
import { OverView } from './OverView';

export default {
  title: 'templates/OverView',
  component: OverView,
} as Meta;

const Template: Story = () => <OverView />;

export const OverV = Template.bind({});
