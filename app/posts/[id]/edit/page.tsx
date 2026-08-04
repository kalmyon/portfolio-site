import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
export default async function EditPage({
    params,
}:{
    params: Promise<{id: string}>;
}){
    const { id } = await params;

    const post = await prisma.post.findUnique({
        where: { 
            id: Number(id), 
        },
    });

    if(!post){
        return (
            <main>
                <h1>記事が見つかりませんでした</h1>
            </main>
        );
    }

    async function updatePost(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title,
                content,
            },
        });

        redirect(`/posts/${id}`);
    }
    return (
    <main>
        <h1>記事編集</h1>

        <form action= {updatePost}>
            <div>
                <label>タイトル</label>
                <br />
                <input
                    type="text"
                    name="title"
                    defaultValue={post.title}
                />
            </div>

            <br />

            <div>
                <label>本文</label>
                <br />
                <textarea
                    name="content"
                    defaultValue={post.content ?? ""}
                    rows={10}
                />
            </div>

            <br />

            <button type="submit">
                更新
            </button>
        </form>
    </main>
    );
}