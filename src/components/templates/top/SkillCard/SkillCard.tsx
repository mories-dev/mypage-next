import styled from '@emotion/styled';
import React from 'react';
import { SkillList } from '@/components/parts/top/main/SkillList';
import { SkillCardType } from '@/models/top/main/Skill';

export type SkillCardProps = {
  skillCard: SkillCardType;
};

export const SkillCard: React.FC<SkillCardProps> = ({ skillCard }) => {
  return (
    <StyledSkillCard>
      <StyledCardTitle>{skillCard.title}</StyledCardTitle>
      <SkillList listItems={skillCard.items} />
    </StyledSkillCard>
  );
};

const StyledCardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledSkillCard = styled.div`
  width: 300px;
  border: solid 1px sandybrown;
  background-color: antiquewhite;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
