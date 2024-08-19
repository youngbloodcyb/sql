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

export default function TopicCard({
  id,
  name,
  created_at,
  updated_at,
}: {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{id}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Created at: {created_at.toLocaleDateString()}</p>
        <p>Updated at: {updated_at.toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Link href={`/topics/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <DeleteButton id={id} />
        <Link href={`/topics/${id}/notes`}>
          <Button variant="outline">Add note</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}