"use client";

import { Button } from "@/components/ui/button";
import { deleteTopic } from "@/lib/data/topics";
import { createClientAction } from "@/lib/helpers/client-action";

export function DeleteButton({ id }: { id: number }) {
  const deleteTopicWithId = deleteTopic.bind(null, id);
  const deleteAction = createClientAction(deleteTopicWithId);
  return (
    <form action={deleteAction}>
      <Button variant="destructive" type="submit">
        Delete
      </Button>
    </form>
  );
}
