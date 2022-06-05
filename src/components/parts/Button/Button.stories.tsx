import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'parts/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button text={args.text} />;

export const Sample = Template.bind({});

Sample.args = {
  text: "sample",
};