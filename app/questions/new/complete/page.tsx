import Link from "next/link";

export default function CompletePage() {
  return (
    <main className="text-center py-20">
      <h1 className="text-3xl font-bold">
        質問を送信しました！
      </h1>

      <p className="mt-4 text-gray-600">
        ご質問ありがとうございます。
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        トップへ戻る
      </Link>
    </main>
  );
}