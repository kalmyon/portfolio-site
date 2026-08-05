import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function AdminQuestionsPage() {
  const questions = await prisma.question.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>質問管理</h1>

      {questions.length === 0 ? (
        <p>質問はまだありません。</p>
      ) : (
        questions.map((question) => (
          <article key={question.id}>
            <h2>
              {question.nickname || "匿名"}
            </h2>

            <p>{question.content}</p>

            <p>
              {question.answered ? "回答済み" : "未回答"}
            </p>

            <Link href={`/admin/questions/${question.id}`}>
              編集
            </Link>

            <hr />
          </article>
        ))
      )}
    </main>
  );
}