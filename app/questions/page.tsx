import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import LikeButton from "@/app/components/LikeButton";

export default async function QuestionsPage() {
  const questions = await prisma.question.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">
          Questions
        </h1>

        {questions.length === 0 ? (
          <p>
            公開されている質問はありません。
          </p>
        ) : (
          <div className="space-y-6">
            {questions.map((question) => (
              <article
                key={question.id}
                className="border rounded-lg p-5"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">
                      Q. {question.content}
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

                  {question.nickname && (
                    <p className="text-sm text-gray-500 mt-2">
                      by {question.nickname}
                    </p>
                  )}
                </div>

                {question.answered && (
                  <div>
                    <h3 className="font-semibold">
                      A.
                    </h3>

                    <p className="whitespace-pre-wrap mt-2">
                      {question.answer}
                    </p>
                  </div>
                )}

                <LikeButton questionId={question.id} likes={question.likes} />
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <Link
          href="/questions/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          新しい質問を投稿
        </Link>
      </div>
    </>
  );
}