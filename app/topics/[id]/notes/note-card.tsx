import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "./delete-button";

export default function NoteCard({
  id,
  title,
  content,
  topicId,
  created_at,
  updated_at,
}: {
  id: number;
  title: string;
  content: string;
  topicId: number;
  created_at: Date;
  updated_at: Date;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{id}</CardTitle>
        <CardDescription>{title}</CardDescription>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Created at: {created_at.toLocaleDateString()}</p>
        <p>Updated at: {updated_at.toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Link href={`/topics/${topicId}/notes/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <DeleteButton id={id} />
      </CardFooter>
    </Card>
  );
}
