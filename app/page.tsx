import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold">
          Kaito Fukushima
        </h1>

      </section>
      
      {/* About */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold">
          About
        </h2>

        <p className="leading-8">
          松江工業高等専門学校 情報工学科所属 4年生
          <br />
          現在はWebアプリケーション開発を中心に学習しています。
          <br />フロントエンドだけでなくバックエンドやデータベース設計にも興味があります。
        </p>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "TypeScript",
            "React",
            "Prisma",
            "PostgreSQL",
            "Docker",
            "Python",
            "C++",
            "Unity",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Works */}
      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold">
          Works
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              Portfolio Site
            </h3>

            <p className="mt-3 text-gray-600">
              Next.js・Prisma・PostgreSQL・Dockerを用いて開発している
              ポートフォリオサイトです。
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              DiaryAI
            </h3>

            <p className="mt-3 text-gray-600">
              AIを活用した日記アプリです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/posts"
            className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Blog
          </Link>

          <Link
            href="/questions"
            className="rounded border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50"
          >
            匿名質問箱
          </Link>
        </div>
      </section>

      
    </>
  );
}