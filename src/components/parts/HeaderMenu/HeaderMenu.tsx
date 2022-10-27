import React from 'react';
import styled from '@emotion/styled';
import { MenuItemType } from '../../../models/top/header/MenuItem';
import { MenuItem } from '../../atoms/top/header/MenuItem/MenuItem';

export type HeaderMenuProps = {
    listItems: MenuItemType[],
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({listItems}) => {
    return (
        <StyledUl>
            {listItems.map((item) => <MenuItem item={item} />)}
        </StyledUl>
    );
};

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;
