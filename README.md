# ECテスト画面（デモ）

Eichiii中継サーバー（`eichiii-api`）とワークフローシステム（WF）との連携を確認するためのデモ用画面です。

このプロジェクトは、以下の目的で構成されています：

- ワークフローシステムからパンチアウト形式で遷移
- EC画面（本番相当）の代替としてカート画面を表示
- `PunchOutOrderMessage` を中継サーバー経由でWFにPOST
- 固定の `BuyerCookie` や `cXML` を使用したシナリオテストが可能

## 構成技術

- Next.js App Router
- TypeScript
- Tailwind CSS

## 起動方法

```bash
# 依存関係をインストール
npm install

# 開発サーバー起動
npm run dev