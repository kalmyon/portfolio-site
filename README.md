# Portfolio Site

自己紹介・ブログ・匿名質問箱機能の実装を目指した個人開発プロジェクトです。

## 使用技術

* Next.js 15
* TypeScript
* PostgreSQL 17
* Prisma 7
* Docker / Docker Compose

## 開発環境構築

### 必要環境

* Docker
* Docker Compose
* Git

### リポジトリの取得

```bash
git clone <repository-url>
cd portfolio-site
```

### 環境変数

`.env` を作成し、以下を設定してください。

```env
DATABASE_URL="postgresql://portfolio_user:password@db:5432/portfolio_db"
```

### コンテナ起動

```bash
docker compose up --build
```

起動後、以下へアクセスできます。

* アプリケーション: http://localhost:3000

## Prisma

### マイグレーション実行

```bash
docker compose exec app npx prisma migrate dev
```

### Prisma Client生成

```bash
docker compose exec app npx prisma generate
```

## Prisma Studio

### 起動

```bash
docker compose exec app npm run studio
```

または

```bash
docker compose exec app npx prisma studio --browser none
```

### 注意事項

Docker環境では Prisma Studio がブラウザを自動起動しようとしますが、コンテナ内には `xdg-open` が存在しないため、以下のようなエラーが発生することがあります。

```text
Error: spawn xdg-open ENOENT
```

このエラーを回避するため、本プロジェクトでは `--browser none` オプションを使用しています。

```bash
npx prisma studio --browser none
```

Studio起動後は、表示されたURLをホストOS側のブラウザで開いてください。

例:

```text
Prisma Studio is running at: http://localhost:51212
```

↓

ブラウザで

```text
http://localhost:51212
```

へアクセスします。


## PostgreSQL接続

### psqlへ接続

```bash
docker compose exec db psql -U portfolio_user -d portfolio_db
```

### テーブル一覧

```sql
\dt
```

### テーブル構造確認

```sql
\d "Post"
```

### データ確認

```sql
SELECT * FROM "Post";
```

## ディレクトリ構成

```text
portfolio-site/
├── app/
│   ├── generated/
│   │   └── prisma/
│   ├── lib/
│   ├── layout.tsx
│   └── page.tsx
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
├── docker-compose.yml
├── dockerfile
├── package.json
└── prisma.config.ts
```

## 現在実装済み

* Docker環境構築
* PostgreSQL構築
* Prisma 7導入
* Prisma Migration
* Prisma Studio
* Next.jsとPostgreSQLの接続
* 記事一覧取得

## 今後の実装予定

* 記事詳細ページ
* 記事投稿機能
* 自己紹介ページ
* タグ機能
* 匿名質問箱機能
* 管理画面
* AWSへのデプロイ

## 学習内容

このプロジェクトでは以下の技術の学習を目的としています。

* Dockerによる開発環境構築
* PostgreSQLの基本操作
* Prisma ORM
* Next.js App Router
* TypeScript
* Webアプリケーション開発
