import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItem, MenuItemProps } from './MenuItem';
import { FaGithub } from 'react-icons/fa';

export default {
  title: 'atoms/MenuItem',
  component: MenuItem,
} as Meta;

const Template: Story<MenuItemProps> = (args) => <MenuItem item={args.item} />;

export const Text = Template.bind({});

Text.args = {
  item: {
    content: "About",
    link: "#about",
  }
};

export const Icon = Template.bind({});

Icon.args = {
  item: {
    content: <FaGithub />,
    link: "https://github.com/mories-dev",
  }
};