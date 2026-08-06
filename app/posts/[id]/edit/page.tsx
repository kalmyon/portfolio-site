import { prisma } from "@/app/lib/prisma";
import { updatePost } from "@/app/actions/post";
export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    return (
      <>
        <h1 className="text-3xl font-bold">
          記事が見つかりませんでした
        </h1>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        記事編集
      </h1>

      <form
        action={updatePost.bind(null, post.id)}
        className="space-y-6 rounded-lg bg-white p-8 shadow"
      >
        <div>
          <label className="mb-2 block font-semibold">
            タイトル
          </label>

          <input
            type="text"
            name="title"
            defaultValue={post.title}
            className="
              w-full
              rounded
              border
              border-gray-300
              p-3
              focus:border-blue-500
              focus:outline-none
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            本文
          </label>

          <textarea
            name="content"
            defaultValue={post.content ?? ""}
            rows={10}
            className="
              w-full
              rounded
              border
              border-gray-300
              p-3
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
          更新
        </button>
      </form>
    </>
  );
}