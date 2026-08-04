import { prisma } from "../../lib/prisma";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
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

  async function deletePost() {
    "use server";

    await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    
    redirect("/");
  }
  return (
    <main>
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <Link href={`/posts/${post.id}/edit`}>編集</Link>

      <form action={deletePost}>
        <button type="submit">削除</button>
      </form>
    </main>
  );
}