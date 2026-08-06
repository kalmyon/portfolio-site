import { notFound } from "next/navigation";

import { prisma } from "@/app/lib/prisma";


type PageProps = {
    params: Promise<{
        id: string;
    }>;
};


export default async function QuestionDetailPage({
    params,
}: PageProps) {
    const { id } = await params;

    const question = await prisma.question.findFirst({
        where: {
            id: Number(id),
            published: true,
            answered: true,
        },
    });

    if (!question) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">
                Question
            </h1>

            <article className="border rounded-lg p-6">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        Q.
                    </h2>

                    <p className="whitespace-pre-wrap">
                        {question.content}
                    </p>

                    {question.nickname && (
                        <p className="text-sm text-gray-500 mt-3">
                            by {question.nickname}
                        </p>
                    )}
                </section>


                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        A.
                    </h2>

                    <p className="whitespace-pre-wrap">
                        {question.answer}
                    </p>
                </section>
            </article>
        </div>
    );
}