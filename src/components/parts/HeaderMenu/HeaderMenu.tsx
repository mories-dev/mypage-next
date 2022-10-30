import styled from '@emotion/styled';
import React from 'react';
import { MenuItem } from '@/components/atoms/top/header/MenuItem';
import { MenuItemType } from '@/models/top/header/MenuItem';

export type HeaderMenuProps = {
  listItems: MenuItemType[];
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ listItems }) => {
  return (
    <StyledUl>
      {listItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;
