"use client";

import { Button } from "@/components/ui/button";
import { deleteNote } from "@/lib/data/notes";
import { createClientAction } from "@/lib/helpers/client-action";

export function DeleteButton({ id }: { id: number }) {
  const deleteNoteWithId = deleteNote.bind(null, id);
  const deleteAction = createClientAction(deleteNoteWithId);
  return (
    <form action={deleteAction}>
      <Button variant="destructive" type="submit">
        Delete
      </Button>
    </form>
  );
}
