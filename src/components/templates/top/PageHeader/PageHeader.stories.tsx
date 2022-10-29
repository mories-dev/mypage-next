import { Story, Meta } from '@storybook/react/types-6-0';
import { PageHeader } from './PageHeader';

export default {
  title: 'templates/PageHeader',
  component: PageHeader,
} as Meta;

const Template: Story = () => <PageHeader />;

export const Header = Template.bind({});
