import styled from '@emotion/styled';
import React from 'react';
import { MenuItemType } from '@/models/top/header/MenuItem';

export type MenuItemProps = {
  item: MenuItemType;
};

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <StyledLi>
      <StyledA href={item.link}>{item.content}</StyledA>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin-right: 30px;
  font-size: 24px;
  line-height: 1.5;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
`;
