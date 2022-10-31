import styled from '@emotion/styled';
import React from 'react';

export type ListItemProps = {
  item: string;
};

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return <StyledLi>{item}</StyledLi>;
};

const StyledLi = styled.li`
  margin-bottom: 10px;
`;
