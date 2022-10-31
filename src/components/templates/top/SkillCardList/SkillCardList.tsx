import styled from '@emotion/styled';
import React from 'react';
import { SkillCard } from '../SkillCard/SkillCard';
import { SkillCardType } from '@/models/top/main/Skill';

export type SkillCardListProps = {
  skillCardList: SkillCardType[];
};

export const SkillCardList: React.FC<SkillCardListProps> = ({
  skillCardList,
}) => {
  return (
    <StyledContent>
      <StyledContentTitle>もりーずの技術スタック</StyledContentTitle>
      <StyledSkillCardListWrapper>
        {skillCardList.map((item, index) => (
          <SkillCard key={index} skillCard={item} />
        ))}
      </StyledSkillCardListWrapper>
    </StyledContent>
  );
};

const StyledContentTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
`;

const StyledContent = styled.div`
  padding: 100px 200px;
  text-align: center;
`;

const StyledSkillCardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
