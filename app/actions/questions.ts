"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/app/lib/prisma";

export async function updateQuestion(
    id: number,
    formData: FormData
) {
    const answer =
        formData.get("answer")?.toString().trim() ?? "";

    const published =
        formData.get("published") === "on";

    await prisma.question.update({
        where: {
            id,
        },
        data: {
            answer: answer || null,
            answered: answer.length > 0,
            published,
        },
    });

    revalidatePath("/admin/questions");
    revalidatePath("/questions");

    redirect("/admin/questions");
}