import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import { updateQuestion } from "@/app/actions/questions";
type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function QuestionDetailPage({ params }: PageProps) {
    const { id } = await params;

    const question = await prisma.question.findUnique({
        where: {
            id: Number(id),
        },
    });

    if(!question) {
        notFound();
    }
    return (
		<>
			<div className="max-w-3xl mx-auto p-6">
				<h1 className="text-2xl font-bold mb-6">質問編集</h1>

				{/* 質問内容 */}
				<div className="mb-6">
					<h2 className="text-lg font-semibold mb-2">質問内容</h2>

					<div className="rounded-lg border p-4 bg-gray-50">
						<p className="whitespace-pre-wrap">{question.content}</p>
					</div>
				</div>

				{/* 編集フォーム */}
				<form action={updateQuestion.bind(null, question.id)}>
					<div className="mb-6">
						<label
							htmlFor="answer"
							className="block text-lg font-semibold mb-2"
						>
							回答
						</label>

						<textarea
							id="answer"
							name="answer"
							defaultValue={question.answer ?? ""}
							rows={8}
							className="w-full rounded-lg border p-3"
						/>
					</div>

					<div className="mb-6">
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="published"
								defaultChecked={question.published}
							/>
							公開する
						</label>
					</div>

					<button
						type="submit"
						className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
					>
						保存
					</button>
				</form>
			</div>
		</>
	);
}