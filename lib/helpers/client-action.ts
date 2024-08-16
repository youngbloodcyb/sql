import { toast } from "sonner";

type ServerActionFunction = (
  formData: FormData
) => Promise<{ error: string } | undefined>;

/**
 * Creates a client action function.
 *
 * @param serverAction - The server action function used to create the client action.
 * @returns The client action function.
 */
export function createClientAction(serverAction: ServerActionFunction) {
  return async function clientAction(formData: FormData) {
    const result = await serverAction(formData);
    console.log(result);
    if (result?.error) {
      toast.error(result?.error);
    } else {
      toast.success("Success");
    }
  };
}
