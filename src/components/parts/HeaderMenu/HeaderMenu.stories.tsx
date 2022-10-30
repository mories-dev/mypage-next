import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderMenu, HeaderMenuProps } from '.';
import { MENU_ITEM_LIST } from '@/models/top/header/MenuItem';

export default {
  title: 'parts/HeaderMenu',
  component: HeaderMenu,
} as Meta;

const Template: Story<HeaderMenuProps> = (args) => (
  <HeaderMenu listItems={args.listItems} />
);

export const Menu = Template.bind({});

Menu.args = {
  listItems: MENU_ITEM_LIST,
};
