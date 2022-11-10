import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BlogLink } from '../BlogLink';
import { BlogContentType } from '@/models/top/main/BlogContent';

export type BlogLinksProps = {
  blogContentList: BlogContentType[];
};

export const BlogLinks: React.FC<BlogLinksProps> = ({ blogContentList }) => {
  return (
    <StyledContent id="blog">
      <StyledContentTitle>技術や趣味に関するブログ</StyledContentTitle>
      <StyledBlogLinksWrapper>
        {blogContentList.map((item, index) => (
          <BlogLink key={index} blogContent={item} />
        ))}
      </StyledBlogLinksWrapper>
      <Link href="/blog">
        <StyledA>
          ブログへはこちらから
          <StyledIcon />
        </StyledA>
      </Link>
    </StyledContent>
  );
};

const StyledContentTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
`;

const StyledContent = styled.div`
  padding: 100px 400px;
  text-align: center;
  background-color: antiquewhite;
`;

const StyledBlogLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
`;

const StyledA = styled.a`
  display: inline-block;
  padding: 16px;
  background-color: antiquewhite;
  border: solid 2px gray;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
  :hover {
    background-color: #f7bb6e;
    box-shadow: none;
    transform: translateY(5px);
  }
`;

const StyledIcon = styled(FaExternalLinkAlt)`
  margin-left: 8px;
`;
