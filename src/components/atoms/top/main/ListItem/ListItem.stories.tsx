import { Story, Meta } from '@storybook/react/types-6-0';
import { ListItem, ListItemProps } from '.';

export default {
  title: 'atoms/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem item={args.item} />;

export const Text = Template.bind({});

Text.args = {
  item: 'React',
};
