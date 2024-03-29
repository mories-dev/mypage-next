import { FaGithub } from 'react-icons/fa';

export type MenuItemType = {
  link: string;
  content: string | JSX.Element;
};

export const MENU_ITEM_LIST = [
  {
    content: 'About',
    link: '#about',
  },
  {
    content: 'Skills',
    link: '#skills',
  },
  {
    content: 'Blog',
    link: '#blog',
  },
  {
    content: <FaGithub />,
    link: 'https://github.com/mories-dev',
  },
];
