import { EditForm } from "../../edit-form";
import { getNoteById } from "@/lib/data/notes";

type NoteRow = {
  id: number;
  title: string;
  content: string;
  topic_id: number;
  created_at: Date;
  updated_at: Date;
};

export default async function Page({
  params,
}: {
  params: { id: number; noteId: number };
}) {
  const note = (await getNoteById(params.noteId)) as NoteRow;

  return (
    <div className="space-y-4">
      <EditForm id={params.noteId} title={note.title} content={note.content} />
    </div>
  );
}
