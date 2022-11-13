import styled from '@emotion/styled';
import React from 'react';
import { FooterContent } from '@/components/parts/top/footer/FooterContent';
import { FOOTER_CONTENTS } from '@/models/top/footer/FooterContents';

export const PageFooter: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterContents>
        {FOOTER_CONTENTS.map((content, index) => (
          <FooterContent key={index} content={content} />
        ))}
      </StyledFooterContents>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 50px 500px;
  background-color: #fff;
`;

const StyledFooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border-bottom: solid 1px gray;
`;
