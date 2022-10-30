import React from 'react';
import { History } from '../History';
import { MainView } from '../MainView';
import { OverView } from '../OverView';
import { HISTORY_ITEMS } from '@/models/top/main';

export const MainContents: React.FC = () => {
  return (
    <main>
      <MainView />
      <OverView />
      <History historyItems={HISTORY_ITEMS} />
    </main>
  );
};
