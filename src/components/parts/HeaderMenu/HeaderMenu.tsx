import React from 'react';
import styled from '@emotion/styled';
import { HeaderMenuItem } from '../../../models/HeaderMenuItem';

export type HeaderMenuProps = {
    listItems: HeaderMenuItem[],
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({listItems}) => {
    return (
        <StyledUl>
            {listItems.map((item) => {
                return <StyledLi><StyledA href={item.link}>{item.text}</StyledA></StyledLi>
            })}
        </StyledUl>
    );
};

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-right: 30px;
  font-size: 24px;
  line-height: 1.5;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
  &: hover {
    color: gray;
  }
`;
