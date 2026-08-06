import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function QuestionsPage() {
    const questions = await prisma.question.findMany({
        where: {
            published: true,
            answered: true,
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
                  <h2 className="font-semibold text-lg">
                    Q. {question.content}
                  </h2>

                  {question.nickname && (
                    <p className="text-sm text-gray-500 mt-2">
                      by {question.nickname}
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold">
                    A.
                  </h3>

                  <p className="whitespace-pre-wrap mt-2">
                    {question.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <div className="max-w-3xl mx-auto p-6">
        <Link href="/questions/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          新しい質問を投稿
        </Link>
      </div>
    </>
  );
}