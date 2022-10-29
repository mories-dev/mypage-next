import React from 'react';
import { MainView } from '../MainView/MainView';
import { OverView } from '../OverView/OverView';

export const MainContents: React.FC = () => {
  return (
    <main>
      <MainView />
      <OverView />
    </main>
  );
};
