import { Story, Meta } from '@storybook/react/types-6-0';
import { History, HistoryProps } from './History';
import { HISTORY_ITEMS } from '@/models/top/main/History';

export default {
  title: 'templates/History',
  component: History,
} as Meta;

const Template: Story<HistoryProps> = (args) => (
  <History historyItems={args.historyItems} />
);

export const MyHistory = Template.bind({});

MyHistory.args = {
  historyItems: HISTORY_ITEMS,
};
