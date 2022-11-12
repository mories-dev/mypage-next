---
title: 'Reduxについて'
date: '2022-02-23'
thumbnail: '/images/redux.jpeg'
---

## Redux とは

Redux とは React が扱う UI の state（状態）を管理するためのフレームワークです。React では state を管理するデータフローに Flux フローを用いていますが、Redux は Flux フローの概念を拡張してより扱いやすく設計されています。

### Flux フローとは

Flux フローは Redux の設計思想の根本になったデータフロー設計で、以下のような特徴があります。

- データが常に 1 方向に流れる
- イベント駆動（イベントが発生した際にデータが変化する）

## なぜ Redux を使うのか

- state の見通しをよくするため
  - 各コンポーネントで別々で state を管理しておくのではなく、store で一括で管理する
- どこからでも state を参照、変更可能にするため
  - ある特定のコンポーネントで持っている state を他のコンポーネントで使用する場合に props のバケツリレーが発生しない
- モジュール（各機能同士）を疎結合にするため
  - 変更された state に関係のないコンポーネント（バケツリレーの導線上にあるもの）には変更を伝えなくてよくなる

#### React のみで状態管理を行った場合

state を変更したコンポーネントから親や子をたどっていき、state の変更を適用していく必要があります。こちらを props のバケツリレーと呼びます。

#### Redux を用いて状態管理を行った場合

state の変更や参照を Store に直接問い合わせることで前述したバケツリレーが発生しないようになります。

## Redux の全体像

Redux のデータの流れがどのようになっているかを説明していきます。

#### Component

ユーザが実際に触れる見た目の部分です。

#### Container

Component のロジックを制御している部分で、実際に Store とやり取りしているのはこの部分です。

#### Action

State の変更に関する情報（Type や payload など）が詰まったデータです。そして、Action を Reducer に渡すことを**Dispatch**と呼びます。

#### Reducer

変更を管理する役割です。Action（変更依頼）と現在の State を受け取り、Action の内容に基づき、現在の State に変更を加えたのち、新しい State を Store に返します。

#### Store

状態を保存しておく役割です。

## Redux の実装例

人に関する情報（名前、年齢）を`Store`で管理する場合を例に説明します。
`stores`ディレクトリ内のファイルの記述を記載します。
以下のサンプルコードでは`createSlice`を使用し、`createAction`と`createReducer`を使わなくても、`reducer`を作成と`action type`の定義、`action creator`の生成を行っています。

**stores/personState/index.ts**

```
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores';

//stateの型定義
export type RersonState = {
  name: string;
  age: number;
};

//初期状態を定義する
const initialState: RersonState = {
  name: 'taro',
  age: 20,
};

//createSliceでreducerとactionを同時に定義する
const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    initPerson: () => initialState,
    incrementAge(state) {
      state.age++
    },
    changeName: (state, action: PayloadAction<string>) =>{
      state.name = action.payload
    },
  },
});

//reducer定義
export const personReducer = personSlice.reducer;

//action定義
export const { initPerson, incrementAge, changeName } = personSlice.actions;

//selector定義
export const usePersonSelector = (): PersonState =>
  useSelecotr<RootState, PersonState>((rootState) => rootState.person);
```

**stores/index.ts**

```
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useDispatchReactRedux } from 'react-redux';
import { personReducer } from '@/stores/personState';

export const store = configureStore({
  reducer: {
    person: personReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchReactRedux<AppDispatch>();
```

実際にコンポーネントで State を使う際は以下のようにします。dispatch の仕様タイミングはユーザが何かしらのアクションにより state が変更される際（ボタンの onClick 属性に与える等）や画面が再レンダリングされたタイミング（useEffect 内に記載）などが多いです。

**PersonInfoContainer.tsx**

```
import { useDispatch } from '@/stores';
import {
  incrementAge,
  changeName,
  usePersonSelector,
} from '@/stores/personState';

~~
~~

const dispatch = useDispatch();

//Storeに保存されているstateを呼び出す
const { name, age } = usePersonSelector();

//年齢情報を更新する
dispatch(incrementAge());

~~
~~

//名前を更新する
dispatch(changeName(anotherName));
```
