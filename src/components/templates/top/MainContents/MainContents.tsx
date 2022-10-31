import React from 'react';
import { History } from '../History';
import { MainView } from '../MainView';
import { OverView } from '../OverView';
import { SkillCardList } from '../SkillCardList';
import { HISTORY_ITEMS } from '@/models/top/main/History';
import { SKILL_CARD_LIST } from '@/models/top/main/Skill';

export const MainContents: React.FC = () => {
  return (
    <main>
      <MainView />
      <OverView />
      <History historyItems={HISTORY_ITEMS} />
      <SkillCardList skillCardList={SKILL_CARD_LIST} />
    </main>
  );
};
