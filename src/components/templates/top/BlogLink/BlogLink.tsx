import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { BlogContentType } from '@/models/top/main/BlogContent';

export type BlogLinkProps = {
  blogContent: BlogContentType;
};

export const BlogLink: React.FC<BlogLinkProps> = ({ blogContent }) => {
  return (
    <StyledBlogContent>
      <Image
        src={`/${blogContent.imageUrl}`}
        alt="ブログの写真"
        width={'400px'}
        height={'267px'}
      />
      <StyledTextContent>
        <StyledTitle>{blogContent.title}</StyledTitle>
        <StyledText>{blogContent.content}</StyledText>
      </StyledTextContent>
    </StyledBlogContent>
  );
};

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledText = styled.p`
  text-align: start;
  line-height: 1.5;
`;

const StyledTextContent = styled.div`
  padding: 0px 16px 40px 16px;
  margin-top: 16px;
`;

const StyledBlogContent = styled.div`
  background-color: white;
  border: solid 1px gray;
  width: 400px;
  border-radius: 5px;
`;
