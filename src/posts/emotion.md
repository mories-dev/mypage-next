---
title: 'emotionについて'
date: '2022-02-23'
thumbnail: '/images/emotion.png'
---

## Emotion とは

Emotion とは、CSS in JS ライブラリで様々な書き方ができることが特徴です。様々な書き方があることから、まだベストプラクティスの見つかっていない開発チームでよく導入されています。

#### コンポーネントファイル中に CSS を書く方法

```
import { jsx, css } from "emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #ddd;
    padding: 8px;
    margin: 8px;
  `;

  return (
    <div css={containerStyle}>
      <p>Emotion</p>
      <button>ボタン</button>
    </div>
  );
};
```

この記法では、まずスタイルを入れておく変数を定義し、タグの中でその変数を指定することでスタイルを適用します。

#### JavaScript のオブジェクトでスタイルを定義する方法

```
import { jsx, css } from "emotion/react";

export const Emotion = () => {
  const containerStyle = css({
    color: "#ddd",
    padding: 8,
    margin: 8
  });

  return (
    <div css={containerStyle}>
      <p>Emotion</p>
      <button>ボタン</button>
    </div>
  );
};
```

こちらは css を用いるところは前述の方法と同じですが、({　})とすることでその中にオブジェクトを書いていきます。注意点として以下の 2 点があります。

- CSS のプロパティ名はキャメルケースで書く　例：text-align → textAlign
- 値は数値、または文字列　例: color: "#fff"、width: "100%"

#### styled components

```
import styled from "emotion/styled";

export const Emotion = () => {
  return (
    <StyledDiv>
      <p>Emotion</p>
      <button>ボタン</button>
    </StyledDiv>
  );
};

const StyledDiv = div`
  border: solid 1px #ddd;
  padding: 8px;
  margin: 8px;
`;
```

こちらの方法は前述した 2 つの方法とは違い、css を用いず、スタイルを持ったタグを定義し、そのタグを使用していきます。上記であればスタイリングされた div タグを使用しています。当社では最も使用されている書き方になります。

基本的な書き方は以下です。

```
const 変数名 = 装飾するベースのタグ`
  CSSを書く
`;
```

装飾するベースのタグは HTML で使用できるもの全てです。
