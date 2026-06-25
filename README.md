# Portfolio Site

自己紹介サイト・技術ブログ・匿名質問箱機能の実装を目指した個人開発プロジェクトです。

Docker上で Next.js、PostgreSQL、Prisma を利用したフルスタックWebアプリケーションを開発しています。

## 使用技術

* Next.js 15
* TypeScript
* PostgreSQL 17
* Prisma 7
* Docker / Docker Compose
* VS Code Dev Container

## 開発環境構築

### リポジトリ取得

```bash
git clone <repository-url>
cd portfolio-site
```

### 環境変数

`.env`

```env
DATABASE_URL="postgresql://portfolio_user:password@db:5432/portfolio_db"
```

### 起動

```bash
docker compose up --build
```

起動後

```text
http://localhost:3000
```

へアクセスしてください。

## Prisma

### マイグレーション

```bash
docker compose exec app npx prisma migrate dev
```

### Prisma Client生成

```bash
docker compose exec app npx prisma generate
```

### Prisma Studio

```bash
docker compose exec app npx prisma studio --browser none
```

Docker環境では `xdg-open` エラーが発生する場合があるため、`--browser none` を使用しています。

## Dev Container

VS Code で

```text
Ctrl + Shift + P
↓
Dev Containers: Reopen in Container
```

を実行すると、コンテナ内環境で開発できます。

## ディレクトリ構成

```text
portfolio-site/
├── app/
├── prisma/
├── public/
├── .devcontainer/
├── docker-compose.yml
├── dockerfile
└── README.md
```

## 現在実装済み

* Docker環境構築
* PostgreSQL構築
* Prisma導入
* Prisma Studio
* Dev Container環境構築
* Next.jsとPostgreSQL接続
* 記事一覧取得

## 今後の実装予定

* 記事詳細ページ
* 記事投稿機能
* 自己紹介ページ
* タグ機能
* 匿名質問箱機能
* 管理画面
* AWSデプロイ
