import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItemList } from '../../../models/top/header/MenuItem';
import { HeaderMenu, HeaderMenuProps } from '.';

export default {
  title: 'parts/HeaderMenu',
  component: HeaderMenu,
} as Meta;

const Template: Story<HeaderMenuProps> = (args) => (
  <HeaderMenu listItems={args.listItems} />
);

export const Menu = Template.bind({});

Menu.args = {
  listItems: MenuItemList,
};
