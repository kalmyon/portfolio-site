import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-white shadow">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                    Portfolio
                </Link>

                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="/" className="hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className="hover:text-blue-600">
                                Blog
                            </Link>
                        </li>
                         <li>
              <Link
                href="/questions"
                className="hover:text-blue-600"
              >
                Ask
              </Link>
            </li>

            <li>
              <a
                href="https://github.com/kalmyon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}