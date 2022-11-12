---
title: 'Angularについて'
date: '2022-02-23'
thumbnail: '/images/angular.png'
---

## Angular とは

Angular は以下の特徴を持つ WEB アプリケーションフレームワークです。

- Google 社やその他個人や企業によって開発された
- フルスタックフレームワーク
- TypeScript ベース
- 学習コストが高いとよく言われる

### どういう面でフルスタックなのか

WEB フロントエンド開発に必要な以下のものを Angular が用意してくれているからです。

基本的には他のライブラリ等を利用しなくても開発ができます。

- ルーティング
- 状態管理
- HTTP クライアント
- 双方向バインディング
- HTML テンプレート
- ライフサイクルメソッド
- テスト

### 学習コストが高いと言われるのはなぜか

フルスタックフレームワークであるがゆえ、Angular 以外で使う機会の少ない知識が必要になることが原因と考えました。

- 例：RxJS、Angular HttpClient、Routing、DI、pipe

参考：pipe について（https://angular.jp/api/common#pipes）

### Angular と AngularJS の違い

- Angular は TypeScript で実装されているが、AngularJS は JavaScript で実装されている
- v2 系以降を Angular、v1 系を AngularJS と呼ぶ
- Angular は 1 から実装しなおされており、互換性がない(AngularJS は 2009 年に発表され、2012 年に v1.0.0 が公開された、Angular は 2016 年に公開された)
- Angular はコンポーネント指向、AngularJS は MVW パターンのアーキテクチャ
  - MVW は Model、View、Whatever（なんでもという意味でコントローラーやスコープを記述）
  - コンポーネント指向とは、コンポーネントを組み合わせて画面を構築していくという考え方

### Angular におけるコンポーネントの実装

```
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

@Component()デコレータを TypeScript クラスに付与することでコンポーネントとして登録されます。

### @Component()に渡しているメタデータ

#### selector

呼び出すときの名前

#### template

HTML テンプレート

#### templateUrl

HTML テンプレートのパス

#### styleUrls

CSS ファイルのパス（配列で指定）

### 動的な値の挿入

以下のように二重括弧の中に変数名を書く動的な値を HTML テンプレートに挿入できます。

```
{{Class中で定義されている変数}}
```

1 つ具体例を紹介します。

hello-world.component.ts

```
import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
    message = 'Hello, World!';
}
```

hello-world.component.html

```
<p>{{ message }}</p>
```

アプリケーションがコンポーネントとそのテンプレートをロードすると、ユーザーには次のように表示されます。

```
<p>Hello, World!</p>
```

**二重中括弧は Angular にそれらの中の内容を補完するように指示**

### プロパティ（イベント）バインディング

角かっこ[]でプロパティを囲うことでプロパティまたは属性がコンポーネントクラスの値にバインドされます。また、丸かっこ()中にイベント名を指定することでコンポーネントクラスのメソッドにバインドされます。<br />

hello-world.component.ts

```
import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  }

}
```

hello-world.component.html

```
<button
  type="button"
  [disabled]="canClick"
  (click)="sayMessage()">
  Trigger alert message
</button>
<p
  [id]="sayHelloId"
  [style.color]="fontColor">
  You can set my color in the component!
</p>
```

### ディレクティブ（*ngIf、*ngFor）

#### \*ngFor

\*ngFor を使用することで繰り返し処理をテンプレートで実行できます。

```
<h2>Products</h2>

<div *ngFor="let product of products">

  <h3>
      {{ product.name }}
  </h3>

</div>
```

上の例では products というオブジェクトから product を一つずつ取り出し繰り返し処理を行っています。

#### \*ngIf

\*ngIf には”で囲って条件式を指定します。こちらを使用することで条件によって表示の切り替えが可能になります。

```
<p *ngIf="product.description">
    Description: {{ product.description }}
</p>
```

#### ディレクティブの一覧

Angular の公式ページ（https://angular.jp/api/common#directives）に紹介されています。

### 依存性の注入（DI)

#### 登録

@Injectable() デコレーターをクラスに付与することで Angular が DI システムでこのクラスを使用できるようになります。

logger.service.ts

```
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Logger {
  writeCount(count: number) {
    console.warn(count);
  }
}
```

上記の例では、providedIn: 'root' メタデータを指定することで Logger がアプリケーション全体で有効になるようにしています。

#### 呼び出し

コンストラクターに private logger: Logger を追加することにより、Logger サービスが HelloWorldDI クラスに注入されます。

hello-world-di.component.ts

```
import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.html'
})
export class HelloWorldDependencyInjectionComponent  {
  count = 0;

  constructor(private logger: Logger) { }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
```

### Angular CLI

Angular アプリケーションの初期化、開発、およびメンテナンスに使用するコマンドラインインターフェースツールで、angular 　 v2.~から使用できます。

#### ng new

Angular プロジェクトの雛形を作成してくれる

#### ng build

Angular アプリを出力ディレクトリにコンパイルする

#### ng serve

アプリケーションをビルドして提供し、ファイルの変更時に再ビルドする

#### ng generate

Schematic に基づいてファイルを生成または変更する

#### ng test

特定のプロジェクトで単体テストを実行する

#### ng e2e

Angular アプリケーションをビルドして提供し、エンドツーエンドのテストを実行する
