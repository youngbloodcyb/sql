"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { getErrorMessage } from "../helpers/error-message";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const TopicSchema = z.object({
  name: z.string(),
});

export async function createTopic(formData: FormData) {
  try {
    const { name } = TopicSchema.parse({
      name: formData.get("name"),
    });
    await sql`
          INSERT INTO topic (name, created_at, updated_at)
          VALUES (${name}, NOW(), NOW());
      `;
    revalidatePath("/topics");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export async function getTopics() {
  const data = await sql`SELECT * FROM topic;`;
  return data.rows;
}

export async function getTopicById(id: number) {
  const data = await sql`
        SELECT * FROM topic
        WHERE id = ${id};
    `;
  return data.rows[0];
}

export async function updateTopic(id: number, formData: FormData) {
  try {
    const { name } = TopicSchema.parse({
      name: formData.get("name"),
    });
    await sql`
          UPDATE topic
          SET name = ${name},
          updated_at = NOW()
          WHERE id = ${id};
        `;

    revalidatePath("/topics");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  redirect("/topics");
}

export async function deleteTopic(id: number) {
  try {
    await sql`
      DELETE FROM topic
      WHERE id = ${id};
    `;
    revalidatePath("/topics");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
