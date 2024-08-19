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
import { createTopic } from "@/lib/data/topics";
import { createClientAction } from "@/lib/helpers/client-action";

export function CreateForm() {
  const create = createClientAction(createTopic);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Topic</CardTitle>
        <CardDescription>Create a topic for your notes</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="demo" action={create}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Name of your topic" />
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
