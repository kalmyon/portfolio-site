import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export default function AskPage() {
  return (
    <main>
      <h1>匿名質問箱</h1>

      <p>
        ご質問ありがとうございます。
        お気軽に質問してください！
      </p>

      <form action={createQuestion}>
        <div>
          <label htmlFor="nickname">
            ニックネーム（任意）
          </label>
          <br />
          <input
            id="nickname"
            name="nickname"
            type="text"
          />
        </div>

        <br />

        <div>
          <label htmlFor="content">
            質問
          </label>
          <br />
          <textarea
            id="content"
            name="content"
            rows={8}
          />
        </div>

        <br />

        <button type="submit">
          質問を送信
        </button>
      </form>
    </main>
  );
}

async function createQuestion(formData: FormData) {
    "use server";

    const nickname = formData.get("nickname") as string;
    const content = formData.get("content") as string;

    await prisma.question.create({
        data: {
            nickname:nickname || null,
            content: content,
        },
    });

    redirect("/ask/complete");
}