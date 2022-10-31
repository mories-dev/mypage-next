import styled from '@emotion/styled';
import React from 'react';
import { ListItem } from '@/components/atoms/top/main/ListItem';

export type SkillListProps = {
  listItems: string[];
};

export const SkillList: React.FC<SkillListProps> = ({ listItems }) => {
  return (
    <StyledUl>
      {listItems.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;
