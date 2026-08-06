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

export async function createQuestion(formData: FormData) {

    const nickname = formData.get("nickname") as string;
    const content = formData.get("content") as string;

    await prisma.question.create({
        data: {
            nickname:nickname || null,
            content: content,
        },
    });

    redirect("/questions/new/complete");
}

export async function deleteQuestion(id: number) {
  "use server";

  await prisma.question.delete({
    where: {
      id,
    },
  });

  redirect("/admin/questions");
}