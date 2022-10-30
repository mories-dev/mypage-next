import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

export const MainView: React.FC = () => {
  return (
    <StyledImageWrraper>
      <Image src="/main.jpg" layout="fill" alt="風景画像" />
    </StyledImageWrraper>
  );
};

const StyledImageWrraper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;
