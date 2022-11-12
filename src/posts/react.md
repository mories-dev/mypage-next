---
title: 'Reactについて'
date: '2022-02-23'
thumbnail: '/images/react.png'
---

## React

React とは、ユーザインタフェース構築のための JavaScript ライブラリです。最近ではフロントエンドの開発に React を導入するところも増え、当社でも NEWT プロジェクトからは React を導入しています。

### JSX

React では JSX 記法という書き方をします。JSX 記法は簡単に説明すると JavaScript のファイル内で HTML のタグのようなものをかけるものです。

#### 例

```
export const App = () => {
  return <h1>Hello World</h1>;
};
```

上記のように関数の戻り値として HTML タグが記載でき、それをコンポーネントとして扱い画面を構成していきます。

呼び出す場合は以下のようにします。

```
import { App } from 'Appを定義したファイルへのpath'

～～
<App />
～～
```

また、JSX 記法の注意点として、return 以降は必ず 1 つのタグで囲われている必要があります。

#### 悪い例

```
export const App = () => {
  return (
    <h1>Hello World</h1>
    <p>こんにちは</p>
  );
};
```

上記の場合、エラーとなります。
ではどうすればよいかというと次のような解決策があります。

#### 解決策 1

div タグで全体を囲む

```
export const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>こんにちは</p>
    </div>
  );
};
```

#### 解決策 2

Fragment で全体を囲む（import の記述が増えてしまうため、ほとんど使われない）

```
import { Fragment } from 'React';

export const App = () => {
  return (
    <Fragment>
      <h1>Hello World</h1>
      <p>こんにちは</p>
    </Fragment>
  );
};
```

#### 解決策 3

<></>で全体を囲む ＊Fragment の省略記法　 ← 頻繁に使われる

```
export const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>こんにちは</p>
    </>
  );
};
```

### props について

props は親コンポーネント（呼び出し元）から子コンポーネント（呼び出される側）に渡すことのできる引数のようなものです。これだけだとよくわからないかもしれないので以下に具体例を記載します。

親コンポーネント（呼び出し元）

```
export const App = () => {
  return <Button text="ボタン" label="ボタンのラベル" />;
};
```

子コンポーネント（呼び出される側）

```
export const Button = (props) => {
  return (
    <>
      {props.label}
      <button>{props.text}</button>
    </>
  );
};
```

上記の場合はボタンのラベルとテキストを props で渡しています。

子コンポーネントに直接ラベルやテキストを書いてしまうと、ボタンのテキストのみ異なることなるコンポーネントが必要な場合に新しく作り直さなくてはならなくなります。
しかし、props でテキストを渡す形であれば渡す text の値を親側で変更してあげるだけでいいので便利です。

### State について

State とは、コンポーネントの状態を表す値です。
Web アプリケーションを作成する際には、画面は様々な状態を持っています。
例えば、、

- エラーがあるかどうか
- モーダルが開いているかどうか
- ボタンが活性か、非活性か
- 入力欄に何を入力したか
  などがあげられます。このような状態を state で管理し、イベント実行時に更新処理を行うことにより動的なアプリケーションを実現しています。

State のユースケースを紹介するにあたり、React Hooks について記載します。

### React Hooks

React Hooks とは React が標準提供している機能群のことです。様々な Hooks がありますが、今回は 3 つ紹介します。

#### useState

useState は State を保持したり、更新するために使用する関数です。使用する場合にはファイル冒頭で以下のように import する必要があります。

```
import { useState } from "react";
```

useState の戻り値は配列の形になっており、以下のように使用します。

```
const [num, setNum] = useState();
```

配列の中身は 1 つ目（今回で言うと num）が状態を持った変数である State 変数、2 つ目（今回で言うと setNum）が State（状態）を更新するための関数です。
State 変数や更新関数の名称は自由につけることができますが、暗黙的なルールとして変数名を hoge にした場合、更新関数名は setHoge のようにするのが一般的です。

上記の場合は num の初期値は undefined となりますが、以下のように初期値を設定することもできます。

```
const [num, setNum] = useState(0);
```

このように実装した場合、num の初期値は 0 となります。

useState を使用し、簡単なカウントアップ機能を実装した場合は以下のようになります。

```
import { useState } from "react";

export const Counter = () => {

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
```

#### useEffect

useEffect についてお話しする前にまず、再レンダリングについて、先ほどの useState の実装例で記載したカウントアップ機能を例に説明します。
ボタンを押した際に画面をリロードしなくても数字がカウントアップされていく機能ですが、これはコンポーネントが再レンダリングされているためです。
再レンダリングとは変更を検知してコンポーネントを再処理することで、それが起きるのは主に以下のタイミングです。

- State が変更されたとき
- Props が変更されたとき
- 再レンダリングされたコンポーネント配下のコンポーネントすべて

ここから useEffect の説明に入ります。
使用方法としてはまず、useState の場合と同様で React から import する必要があります。

```
import { useEffect } from "react";
```

使用する場合は以下です。

```
useEffect(実行する関数, [依存する値])
```

第 1 引数はアロー関数で記載し、第 2 引数は配列を記載します。
上記だけだと分かりづらいかと思いますが、要するに useEffect は「ある特定の値が変わったときに限り、ある処理を実行する」機能です。

```
useEffect(() => {
 alert(ある処理です);
}, [num]);
```

上記の例だと num という State が更新された場合にアラートが表示される処理になります。
注意点として、第 2 引数に指定した変数が変更された場合に加え、コンポーネントのマウント時（1 番最初）にも処理が実行されます。
第 2 引数の配列を空で[]のように設定することもでき、その場合はコンポーネントのマウント時（1 番最初）にのみ処理が実行される形となります。
