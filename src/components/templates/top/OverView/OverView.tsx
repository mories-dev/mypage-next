import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ProfileModal } from '@/components/parts/top/main/SkillList/ProfileModal';

export const OverView: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  return (
    <StyledSection id="about">
      <StyledOverViewTitle>プロフィール</StyledOverViewTitle>
      <StyledText>
        BtoB向けのWEBアプリケーション開発に従事しているフロントエンドエンジニアです。
        <br />
        以降では技術スタックやブログ、個人開発したポートフォリオを紹介していきます。
      </StyledText>
      <StyledCardWrapper>
        <StyledCard>
          <StyledCardTitle>
            もりーず
            <br />
            <StyledSpan>本名をあげるが怖かったので通称です（笑）</StyledSpan>
          </StyledCardTitle>
          <StyledCardTitle>
            性格
            <br />
            <StyledSpan>
              新しいものを好む傾向にあります。
              <br />
              新しくオープンしたお店に行ったり、新しい技術が出てきたらそれについて調べてみる、等々
              <br />
              また。初対面で顔が怖いと言われることがたまにありますが、緊張しているだけです（笑）
            </StyledSpan>
          </StyledCardTitle>
          <StyledCardTitle>
            生年月日
            <br />
            <StyledSpan>西暦1996年12月23日</StyledSpan>
          </StyledCardTitle>
          <StyledCardTitle>
            趣味・特技
            <br />
            <StyledSpan>
              休日は主に大型のショッピングモールに出かけてウィンドウショッピングを楽しんでいます。
              <br />
              予算の関係上買えないことの方が多いですが..（笑）
              <br />
              あとは、ペットの犬（チワワ×パピヨン）とドッグランなどに遊びに行ったりもしています🐕
            </StyledSpan>
          </StyledCardTitle>
          <StyledCardTitle>
            好きな食べ物
            <br />
            <StyledSpan>
              ラーメンです！特に家系、二郎系が好きでいろんなところを巡っています🍜
              <br />
              現在ダイエット中につき行けていない模様...
            </StyledSpan>
          </StyledCardTitle>
          <StyledCardTitle>
            人生の目標
            <br />
            <StyledSpan>
              バイクが好きで学生時代に乗っていましたが、社会人になって手放しました。
              <br />
              いつかハーレーダビットソンiron1200を買うことが目標です🏍
            </StyledSpan>
          </StyledCardTitle>
        </StyledCard>
      </StyledCardWrapper>
      <StyledButtonWrapper>
        <StyledButton onClick={() => setIsOpen(true)}>
          スクロールが使いずらい場合はこちらのボタンをクリック
        </StyledButton>
      </StyledButtonWrapper>
      <ProfileModal isOpen={isOpen} onCloseClick={handleCloseClick} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
  padding: 100px;
  background-color: #fff;
`;

const StyledOverViewTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
`;

const StyledText = styled.p`
  line-height: 1.5;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const StyledCard = styled.div`
  width: 40%;
  height: 300px;
  overflow-y: scroll;
  border: solid 1px sandybrown;
  background-color: antiquewhite;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
`;

const StyledCardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledSpan = styled.span`
  font-size: 13px;
  color: gray;
  margin-left: 8px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton = styled.button`
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
