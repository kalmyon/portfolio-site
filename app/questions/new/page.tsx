import { createQuestion } from "@/app/actions/questions";

export default function AskPage() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          匿名質問箱
        </h1>

        <p className="mb-8 text-gray-600">
          ご質問ありがとうございます。
          <br />
          お気軽に質問してください！
        </p>

        <form action={createQuestion} className="space-y-6">
          <div>
            <label
              htmlFor="nickname"
              className="mb-2 block font-medium text-gray-700"
            >
              ニックネーム（任意）
            </label>

            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="匿名"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block font-medium text-gray-700"
            >
              質問
            </label>

            <textarea
              id="content"
              name="content"
              rows={8}
              placeholder="質問を入力してください"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              質問を送信
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}