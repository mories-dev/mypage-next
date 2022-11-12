---
title: 'Storybookについて'
date: '2022-02-23'
thumbnail: '/images/storybook.png'
---

## Storybook とは

Storybook とは、UI コンポーネントの管理またはテストをすることができるオープンソースツールです。
サンドボックス環境を構築し、その環境下でコンポーネントの挙動や表示を確認できる他、
カタログのようにコンポーネントを閲覧することができます。
また、React、Vue、Angular などの主要な JS フレームワークで導入でき、利用範囲も広いことからモダンな
フロントエンド開発では非常に多く利用されています。

### Storybook を導入するメリット

- UI コンポーネントを簡単にポチポチ触って試すことができる
- カタログを見る側の人がコードを書かずにほしいコンポーネントを探せる
- 効率的に実装できる
  - スタイル微調整などを行っている際に毎度確認のために実際のページに埋め込んでから表示していると効率が悪い（表示するには API コールが必要になったりなど）
- 網羅的にコンポーネントの実装確認ができる
  - 例えば Button コンポーネントがあるとして props の値によって Disable だったり色が違ったりする場合に props の状態を与えることで簡単に一覧で確認できる
- バックエンドの実装を待たずにコンポーネントのデザイン面の実装を先に進めることができる

### 導入方法

以下のコマンドをプロジェクトディレクトリ内で実行します。

```
npx -p @storybook/cli sb init
```

起動確認をするには

```
yarn storybook
```

コマンドを実行し、
http://localhost:6006/
にアクセスすると確認できます。

### Storybook の書き方

Storybook を使用するには以下のようなファイル（～.stories.tsx）を作成します。

```
//Button.stories.tsx

import { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export const Template: Story<ButtonProps> = (props) => <Button>props.text</Button>;
```

上記の例は作成した Button コンポーネントを Storybook で確認する際のものです。

ファイル名は以下のように設定します。

```
自分が作成したコンポーネント名.stories.tsx
```

また、上記の例で export するコンポーネントを「ストーリー」と呼びます。

### Addon

Addon とは Storybook に導入できる便利な拡張機能のようなものです。
導入するには以下のコマンドを実行し、

```
npm i -D @storybook/addon-viewport
```

使用するには使用するファイルの先頭で以下の記載をします。

```
import '@storybook/addon-viewport/register';
```

＊使用する Addon によって import 分は少々違います。（上記は viewport を使用する際の例）

様々な Addon がありますが、今回はいくつかピックアップして紹介します。

#### Action

Storybook 上で onClick などの UI アクションに対してのログを確認することができます。

#### viewport

サンドボックス上の UI に対してビューポートのサイズと向きを変更して確認ができ、スマホや PC など様々なデバイスでの表示状態の確認ができます。

#### links

コンポーネント間で別のタブに遷移することによって、擬似的に状態の変化を再現することができます。

#### Controls

UI でコンポーネント入力を動的に操作することができきるもので、props を操作して UI の状態変化をサンドボックスで見ることができます。

#### Console

ログ、エラー、警告などのコンソール出力を表示する Addon でコンソールに出力される情報をサンドボックス上で確認することができます。
