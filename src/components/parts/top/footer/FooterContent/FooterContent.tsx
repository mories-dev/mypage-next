import styled from '@emotion/styled';
import React from 'react';
import { FooterContentType } from '@/models/top/footer/FooterContents';

export type FooterContentProps = {
  content: FooterContentType;
};

export const FooterContent: React.FC<FooterContentProps> = ({ content }) => {
  return (
    <ul>
      {content.map((item, index) =>
        item.url === 'none' ? (
          <StyledLiTitle key={index}>{item.name}</StyledLiTitle>
        ) : (
          <StyledLi key={index}>
            <StyledA href={item.url}>{item.name}</StyledA>
          </StyledLi>
        )
      )}
    </ul>
  );
};

const StyledLiTitle = styled.li`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  text-decoration: underline;
`;

const StyledLi = styled.li`
  line-height: 1.5;
  margin-bottom: 6px;
`;

const StyledA = styled.a`
  :hover {
    color: gray;
  }
`;
