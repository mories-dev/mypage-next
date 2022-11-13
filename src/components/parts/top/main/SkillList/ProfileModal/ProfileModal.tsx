import styled from '@emotion/styled';
import React from 'react';
import Modal from 'react-modal';

export type ProfileModalProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'antiquewhite',
    width: '1000px',
    boxShadow: '6px 6px 10px 0px rgba(0, 0, 0, 0.4)',
  },
};

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onCloseClick,
}) => {
  return (
    <Modal isOpen={isOpen} style={customStyle} contentLabel="Example Modal">
      <StyledHeader>
        <StyledHeaderTitle>プロフィールの確認</StyledHeaderTitle>
        <StyledCloseButton onClick={onCloseClick}>
          モーダルを閉じる
        </StyledCloseButton>
      </StyledHeader>
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
            現在ダイエット中につき行けていない模様...
          </StyledSpan>
        </StyledCardTitle>
        <StyledCardTitle>
          人生の目標
          <br />
          <StyledSpan>
            バイクが好きで学生時代に乗っていましたが、社会人になって手放しました。
            いつかハーレーダビットソンiron1200を買うことが目標です🏍
          </StyledSpan>
        </StyledCardTitle>
      </StyledCard>
    </Modal>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid black;
  margin-bottom: 12px;
`;

const StyledHeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const StyledCloseButton = styled.button`
  background-color: antiquewhite;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  :hover {
    background-color: #f7bb6e;
    transform: translateY(5px);
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
