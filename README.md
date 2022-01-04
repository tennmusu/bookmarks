# Reactを使用して簡易的なブックマークツールを作成しました。
## 作成目的   
1. チュートリアルで学んだことを理解しているか確かめるため。
2. 自力でコンポーネントを設計することに挑戦するため。

## 実装した機能
1. カテゴリー追加
2. カテゴリーへジャンプする機能
3. カテゴリーのリストにウェブページを追加する機能
4. カテゴリーのリストからウェブページを削除する機能
5. カテゴリー画面からホームへ戻る機能

## 実装したい機能(現時点では未実装なもの)
### 1. データをデータベース(MySQL)に保存し、再利用時に呼び出せるようにする機能
### 2. 現時点ではウェブページを追加する際はタイトルとURLを入力する必要があるが、<br>URLを入力すればタイトルを自動で取得できる機能
   ※PHP単体では実装できたが、JavaScriptとの連携は未実装。
   
## 難しかった部分
### - 子コンポーネントから親コンポーネントへデータを渡す部分
  カテゴリー内でのリストの変更結果を親コンポーネントに渡す必要がありました。親コンポーネントの関数を渡して子コンポーネント内で呼び出すことで解決しました。
  この実装を行うことで一度ホーム画面に戻った後、再度カテゴリーへジャンプしても変更結果が残るようになりました。

## 学習したこと
### 1. Ajax通信やウェブスクレイピング

現時点では実装できていませんが、実装しようと奮闘する過程でAjaxがどのように動いているのか知ることができました。
また、PythonやPHPなどでウェブスクレイピングができることを学びました。
### 2. CSS

クラスを使って要素を綺麗に並べる方法を学びました。
### 3.JavaScript

配列を扱う関数について学びました。
