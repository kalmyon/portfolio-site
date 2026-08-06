"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/app/lib/prisma";


export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await prisma.post.create({
        data: {
        title,
        content,
        },
    });

    redirect("/");
}


export async function updatePost(
    id: number,
    formData: FormData
) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    redirect(`/posts/${id}`);
}


export async function deletePost(
    id: number
) {
    await prisma.post.delete({
      where: {
        id,
      },
    });
    
    redirect("/");
}