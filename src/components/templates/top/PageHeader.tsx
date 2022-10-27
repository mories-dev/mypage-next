import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'
import { HeaderMenu } from '../../parts/HeaderMenu';
import { MenuItemList } from '../../../models/top/header/MenuItem';

export const PageHeader: React.FC = () => {
    return (
        <StyledHeader>
          <Image src="/icon.jpg" alt="自分のアイコン" width={80} height={60} />
          <HeaderMenu listItems={MenuItemList} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
`;