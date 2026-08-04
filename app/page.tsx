import Link from "next/link";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        ブログ記事一覧
      </h1>

      {posts.map((post) => (
        <article
          key={post.id}
          className="mb-6 rounded-lg bg-white p-6 shadow"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            <Link
              href={`/posts/${post.id}`}
              className="hover:text-blue-600"
            >
              {post.title}
            </Link>
          </h2>

          <p className="text-gray-600">
            {post.content}
          </p>
        </article>
      ))}
    </>
  );
}