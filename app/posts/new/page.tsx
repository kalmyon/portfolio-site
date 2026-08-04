import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        新規記事作成
      </h1>

      <form
        action={createPost}
        className="space-y-6 rounded-lg bg-white p-8 shadow"
      >
        <div>
          <label className="mb-2 block font-semibold">
            タイトル
          </label>

          <input
            type="text"
            name="title"
            className="
              w-full
              rounded
              border
              border-gray-300
              p-3
              text-gray-900
              focus:border-blue-500
              focus:outline-none
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            内容
          </label>

          <textarea
            name="content"
            rows={10}
            className="
              w-full
              rounded
              border
              border-gray-300
              p-3
              text-gray-900
              focus:border-blue-500
              focus:outline-none
            "
          />
        </div>

        <button
          type="submit"
          className="
            rounded
            bg-blue-600
            px-6
            py-3
            text-white
            hover:bg-blue-700
          "
        >
          投稿
        </button>
      </form>
    </>
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