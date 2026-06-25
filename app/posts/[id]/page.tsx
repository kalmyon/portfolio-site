import { prisma } from "../../lib/prisma";
import { notFound } from "next/navigation";

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
    <main>
      <h1>{post.title}</h1>

      <p>{post.content}</p>
    </main>
  );
}