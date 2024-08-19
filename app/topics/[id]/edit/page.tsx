import { EditForm } from "../../edit-form";
import { getTopicById } from "@/lib/data/topics";

type TopicRow = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export default async function Page({ params }: { params: { id: number } }) {
  const topic = (await getTopicById(params.id)) as TopicRow;

  return (
    <div className="space-y-4">
      <EditForm id={params.id} name={topic.name} />
    </div>
  );
}
