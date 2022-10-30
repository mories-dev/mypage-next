import styled from '@emotion/styled';
import React from 'react';
import { HistoryItem } from '@/models/top/main/History';

export type HistoryProps = {
  historyItems: HistoryItem[];
};

export const History: React.FC<HistoryProps> = ({ historyItems }) => {
  return (
    <StyledSection>
      <StyledHistoryTitle>これまでの経歴</StyledHistoryTitle>
      <StyledTable>
        <tbody>
          {historyItems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.event}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 500px;
  background-color: antiquewhite;
`;

const StyledHistoryTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: center;
`;

const StyledTable = styled.table`
  text-align: center;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0px 30px;
`;
