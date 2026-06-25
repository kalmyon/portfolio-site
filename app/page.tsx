import { prisma } from "./lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main>
      <h1>ブログ記事一覧</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </article>
      ))}
    </main>
  );
}