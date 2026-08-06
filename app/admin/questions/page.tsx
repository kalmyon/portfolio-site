import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

type PageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function AdminQuestionsPage({
  searchParams,
}: PageProps) {
  const { status } = await searchParams;

  const where =
    status === "answered"
      ? { answered: true }
      : status === "unanswered"
      ? { answered: false }
      : {};

  const questions = await prisma.question.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        質問管理
      </h1>

      <div className="mb-8 flex gap-3">
        <Link
          href="/admin/questions"
          className={`rounded-lg px-4 py-2 font-medium transition ${
            !status
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          すべて
        </Link>

        <Link
          href="/admin/questions?status=answered"
          className={`rounded-lg px-4 py-2 font-medium transition ${
            status === "answered"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          回答済み
        </Link>

        <Link
          href="/admin/questions?status=unanswered"
          className={`rounded-lg px-4 py-2 font-medium transition ${
            status === "unanswered"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          未回答
        </Link>
      </div>

      {questions.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <p className="text-gray-500">
            質問はまだありません。
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((question) => (
            <article
              key={question.id}
              className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  {question.nickname || "匿名"}
                </h2>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    question.answered
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {question.answered ? "回答済み" : "未回答"}
                </span>
              </div>

              {/* 質問 */}
              <div className="mb-4">
                <h3 className="mb-2 font-semibold text-gray-800">
                  質問
                </h3>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="whitespace-pre-wrap text-gray-700">
                    {question.content}
                  </p>
                </div>
              </div>

              {/* 回答 */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-800">
                  回答
                </h3>

                <div className="rounded-lg bg-blue-50 p-4">
                  {question.answer ? (
                    <p className="whitespace-pre-wrap text-gray-700">
                      {question.answer}
                    </p>
                  ) : (
                    <p className="italic text-gray-400">
                      まだ回答がありません
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href={`/admin/questions/${question.id}`}
                  className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                  編集
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}