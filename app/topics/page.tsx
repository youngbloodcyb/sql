import { CreateForm } from "./create-form";
import TopicCard from "./topic-card";
import { getTopics } from "@/lib/data/topics";

type TopicRow = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export default async function Page() {
  const topics = (await getTopics()) as TopicRow[];
  return (
    <div className="space-y-4">
      <CreateForm />
      {topics.map((topic, index) => (
        <TopicCard
          key={index}
          id={topic.id}
          name={topic.name}
          created_at={topic.created_at}
          updated_at={topic.updated_at}
        />
      ))}
    </div>
  );
}
