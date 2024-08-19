"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createNote } from "@/lib/data/notes";
import { createClientAction } from "@/lib/helpers/client-action";

export function CreateForm({ topicId }: { topicId: number }) {
  const createNoteWithTopicId = createNote.bind(null, topicId);
  const create = createClientAction(createNoteWithTopicId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Note for Topic: {topicId}</CardTitle>
        <CardDescription>Create a note</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="demo" action={create}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Title of note" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="content of note"
                className="resize-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" form="demo">
          Create
        </Button>
      </CardFooter>
    </Card>
  );
}
