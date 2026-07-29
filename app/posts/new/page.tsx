import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
export default function NewPostPage() {
    return (
        <main>
            <h1>新規記事作成</h1>

            <form action={createPost}>
                <div>
                    <label>タイトル</label>
                    <input type="text" name="title" />
                </div>

                <div>
                    <label>内容</label>
                    <textarea name="content" />
                </div>
                <div>
                    <button type="submit">投稿</button>
                </div>
            </form>
        </main>
    );
}


async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  redirect("/");
}