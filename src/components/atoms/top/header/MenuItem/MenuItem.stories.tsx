import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItem, MenuItemProps } from './MenuItem';

export default {
  title: 'atoms/MenuItem',
  component: MenuItem,
} as Meta;

const Template: Story<MenuItemProps> = (args) => <MenuItem item={args.item} />;

export const Sample = Template.bind({});

Sample.args = {
  item: {
    text: "About",
    link: "#about",
  }
};