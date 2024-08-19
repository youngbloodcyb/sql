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
import { updateNote } from "@/lib/data/notes";
import { createClientAction } from "@/lib/helpers/client-action";

export function EditForm({
  id,
  title,
  content,
}: {
  id: number;
  title: string;
  content: string;
}) {
  const updateNoteWithId = updateNote.bind(null, id);
  const update = createClientAction(updateNoteWithId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Note</CardTitle>
        <CardDescription>Create a note</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="demo" action={update}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Title of note"
                defaultValue={title}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="content of note"
                className="resize-none"
                defaultValue={content}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" form="demo">
          Update
        </Button>
      </CardFooter>
    </Card>
  );
}
