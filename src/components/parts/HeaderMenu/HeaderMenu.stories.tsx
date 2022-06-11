import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderMenu, HeaderMenuProps } from '.';

export default {
  title: 'parts/HeaderMenu',
  component: HeaderMenu,
} as Meta;

const Template: Story<HeaderMenuProps> = (args) => <HeaderMenu listItems={args.listItems} />;

export const Sample = Template.bind({});

Sample.args = {
  listItems: [
      {
          text: "About",
          link: "#about",
      },
      {
        text: "Skills",
        link: "#skills",
    },
    {
        text: "Blog",
        link: "#blog",
    },
    {
        text: "Github",
        link: "https://github.com/mories-dev",
    },
  ]
};