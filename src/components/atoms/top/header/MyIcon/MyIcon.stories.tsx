import { Story, Meta } from '@storybook/react/types-6-0';
import { MyIcon, MyIconProps } from './MyIcon';

export default {
  title: 'atoms/MyIcon',
  component: MyIcon,
} as Meta;

const Template: Story<MyIconProps> = (args) => <MyIcon height={args.height} width={args.height} />;

export const Sample = Template.bind({});

Sample.args = {
  height: '60px',
  width: '80px'
};