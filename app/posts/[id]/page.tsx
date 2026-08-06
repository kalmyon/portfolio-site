import { prisma } from "../../lib/prisma";
import { notFound } from "next/navigation";
import { deletePost } from "@/app/actions/post";
import Link from "next/link";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-4xl font-bold">
          {post.title}
        </h1>

        <p className="whitespace-pre-wrap text-gray-900">
          {post.content}
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <Link
          href={`/posts/${post.id}/edit`}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          編集
        </Link>

        <form action={deletePost.bind(null, post.id)}>
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            削除
          </button>
        </form>
      </div>
    </>
  );
}