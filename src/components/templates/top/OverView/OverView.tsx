import styled from '@emotion/styled';
import React from 'react';

export const OverView: React.FC = () => {
  return (
    <StyledSection id="about">
      <StyledOverViewTitle>このサイトについて</StyledOverViewTitle>
      <StyledText>
        このページは、駆け出しフロントエンドエンジニアであるもりーずの自己紹介ページです。
        <br />
        人間性や技術スタックなどについて紹介していきます。
      </StyledText>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
  padding: 100px;
  background-color: #fff;
`;

const StyledOverViewTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
`;

const StyledText = styled.p`
  line-height: 1.5;
`;
