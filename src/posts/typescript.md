---
title: 'TypeScriptについて'
date: '2022-02-23'
thumbnail: '/images/typescript.png'
---

## TypeScript とは

TypeScript は一言で言うと、JavaScript にコンパイルされる**静的型システム**が付いた JavaScript のスーパーセットです。

使用する利点としては以下です。

- JavaScript にコンパイルされる際に型の判定が入り、正しくない場合はエラーを出してくれる点
- TypeScript は JavaScript の上位集合であるため JavaScript で使用できる書き方が TypeScript でも使える

JavaScript は動的型付け言語であるがゆえ、大規模なシステムの場合、変数の型の違いによるバグを見つけにくいという難点があります。TypeScript には静的型システムがついており、もしエラーになりえるコードがあった場合にはコンパイル時に教えてくれるため、予期せぬバグの少ないシステムが作れます。

## 型について

型推論と型注釈があるが、今回の話は型注釈についてです。

### boolean 型

true または false（真偽値）を持つことができる

```
let hoge: boolean = true;
let huga: boolean = false;
let piyo: boolean = 1;　//コンパイルエラー
```

### number 型

数値（負や小数も）を持つことができる

```
let hoge: number = 1;
let huga: number = -1;
let piyo: number = 3.14;
let hogehoge: number = "hello";　//コンパイルエラー
```

### string 型

文字列を持つことができる

```
let hoge: string = "hello";
let huga: string = 'hello';
let piyo: string = `hello`;
let hogehoge: string = 1;　//コンパイルエラー
```

### オブジェクトの型注釈

特定のキーと特定の型のバリューを持つことができる

```
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

//コンパイルエラー
const person: {
  name: string;
  age: number;
} = {
  name: 21,
  age: true
}
```

### 配列の型注釈

特定の型を要素に含むことができる

```
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
const fruits: string[] = ['Apple', 'Banana', 1];　//コンパイルエラー
```

### Tuple 型

決まった内容の配列を持つことができる

```
const book: [string, number, boolean] = ['business', 1500, false];
const book: [string, number, boolean] = [1200, 'business', false];　//コンパイルエラー
```

### 列挙型

特定のまとまったグループのみを受け入れる

```
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL =  'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL　//sizeには特定の値しか入れたくない
}

coffee.size = "small";　//コンパイルエラー
```

### any 型

どんな型でも入れることができる
JavaScript の変数に近い

```
let anything: any = true;
anything = 'hello';
anything = 3;
anything = ['hello', 33, true];
anything = {};
```

string 型などの変数に any 型のものを代入することもできてしまう

```
let anything: any = true;
let hoge: string = 'huga';
hoge = anything;
```

### union 型

指定した複数の型を扱うことができる

```
let unionType: number | string = 10;
unionType.toupperCase(); //コンパイルエラー
unionType = 'hello';
unionType.toupperCase();
```

### Literal 型

特定の決まった値のみを扱える

```
let fruit: 'apple' = 'apple';
let fruit: 'apple' = 'banana';　//コンパイルエラー
const fruit = 'apple';
```

Literal 型と Union 型を組み合わせると列挙型のような仕組みを再現可能

```
let coffeeSize: 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI' = 'SHORT';
let coffeeSize: 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI' = 'hello';　//コンパイルエラー
```

### undefined 型

null もしくは undefined を扱える

```
let hoge: undefined = undefined;
let huga: undefined = null;
```

### null 型

null もしくは undefined を扱える

```
let hoge: undefined = undefined;
let huga: undefined = null;
```

### unknown 型

どんな型でも入れることができる

```
let hoge: unknown = true;
hoge = 'hello';
hoge = 3;
hoge = ['hello', 33, true];
hoge = {};
```

any 型とは違い、string 型などの変数に unknown 型のものを代入することはできない

```
let hoge: unknown = true;
let huga: string = 'huga';
huge = hoge;　//コンパイルエラー
```

## 型アサーション

型アサーションを使用することで、型が不明な値に型付けを行うことができます。以下のように値の後ろに as 型名 を記述します。

```
interface Person {
    name: string;
    age: number;
}

let bar = {} as Person
bar.name = "Yamada";    // 型アサーションが無いとエラーになる
```

## 型エイリアス

type で型の別名を定義することができます。以下で使用例を紹介します。

```
type bool = boolean;
let flag: bool = true;
```
