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
import { updateTopic } from "@/lib/data/topics";
import { createClientAction } from "@/lib/helpers/client-action";

export function EditForm({ id, name }: { id: number; name: string }) {
  const updateTopicWithId = updateTopic.bind(null, id);
  const update = createClientAction(updateTopicWithId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit yout Topic</CardTitle>
        <CardDescription>Edit topic name</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="demo" action={update}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Edit your topic"
                defaultValue={name}
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
