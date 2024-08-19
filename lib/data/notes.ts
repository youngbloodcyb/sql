"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { getErrorMessage } from "../helpers/error-message";
import { redirect } from "next/navigation";

const NoteSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export async function createNote(topicId: number, formData: FormData) {
  try {
    const { title, content } = NoteSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });
    await sql`
            INSERT INTO note (title, content, topic_id, created_at, updated_at)
            VALUES (${title}, ${content}, ${topicId}, NOW(), NOW());
        `;
    revalidatePath("/topics/[id]/notes", "page");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export async function updateNote(id: number, formData: FormData) {
  let topicId = 0;
  try {
    const { title, content } = NoteSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });
    const data = await sql`
        UPDATE note
        SET title = ${title},
        content = ${content},
        updated_at = NOW()
        WHERE id = ${id}
        RETURNING id, topic_id;
      `;

    topicId = data.rows[0].topic_id;
    revalidatePath("/topics/[id]/notes", "page");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  if (topicId !== 0) redirect(`/topics/${topicId}/notes`);
}

export async function getNotesByTopicId(topicId: number) {
  const data = await sql`
        SELECT * FROM note
        WHERE topic_id = ${topicId};      
    `;

  return data.rows;
}

export async function getNoteById(id: number) {
  const data = await sql`
          SELECT * FROM note
          WHERE id = ${id};
      `;
  return data.rows[0];
}

export async function deleteNote(id: number) {
  try {
    await sql`
      DELETE FROM note
      WHERE id = ${id};
    `;
    revalidatePath("/topics/[id]/notes", "page");
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}
