import { CreateForm } from "./create-form";
import { getNotesByTopicId } from "@/lib/data/notes";
import NoteCard from "./note-card";

type NoteRow = {
  id: number;
  title: string;
  content: string;
  topic_id: number;
  created_at: Date;
  updated_at: Date;
};

export default async function Page({ params }: { params: { id: number } }) {
  const notes = (await getNotesByTopicId(params.id)) as NoteRow[];

  return (
    <div className="space-y-4">
      <h1>Notes for topic: {params.id}</h1>
      <CreateForm topicId={params.id} />
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          topicId={note.topic_id}
          created_at={note.created_at}
          updated_at={note.updated_at}
        />
      ))}
    </div>
  );
}
