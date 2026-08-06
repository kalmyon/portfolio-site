import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import {
  updateQuestion,
  deleteQuestion,
} from "@/app/actions/questions";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QuestionDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const question = await prisma.question.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!question) {
    notFound();
  }

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        質問編集
      </h1>

      {/* 投稿者 */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">
          投稿者
          <p className="font-normal text-gray-700">
            {question.nickname || "匿名"}
          </p>
        </h2>
      </section>

      {/* 質問内容 */}
      <section className="mb-8">
        <h2 className="mb-2 text-lg font-semibold">
          質問内容
        </h2>

        <div className="rounded-xl border bg-gray-50 p-4">
          <p className="whitespace-pre-wrap text-gray-700">
            {question.content}
          </p>
        </div>
      </section>

      {/* 編集フォーム */}
      <form action={updateQuestion.bind(null, question.id)}>
        <div className="mb-6">
          <label
            htmlFor="answer"
            className="mb-2 block text-lg font-semibold"
          >
            回答
          </label>

          <textarea
            id="answer"
            name="answer"
            defaultValue={question.answer ?? ""}
            rows={8}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="mb-8">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="published"
              defaultChecked={question.published}
              className="h-4 w-4"
            />
            公開する
          </label>
        </div>

        <div className="flex justify-between">
          {/* 削除フォーム */}
          <button
            formAction={deleteQuestion.bind(null, question.id)}
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
          >
            削除
          </button>

          {/* 保存 */}
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            保存
          </button>
        </div>
      </form>
    </>
  );
}