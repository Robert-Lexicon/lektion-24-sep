"use client";
import { deleteProductFromClientAction } from "@/app/admin/_lib/actions";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

// endpoint: https://fakeapi.platzi.com/en/rest/products/#delete-a-product
// could be nice with some alert before maybe? https://ui.shadcn.com/docs/components/alert-dialog

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-neutral-200 p-2 cursor-pointer"
      type="submit"
      disabled={pending}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}

export default function DeleteForm({ id }: { id: number }) {
  // Client Action (new in react 19)
  // this is a async function that is called in the action,
  // and communicates with the server action
  // we can do client things here like calling a toast or interacting with the user

  const clientAction = async (formData: FormData) => {
    const id = formData.get("id") as string;

    if (id === "") {
      toast.error("Product not deleted!");
    }

    const result = await deleteProductFromClientAction(parseInt(id));

    if (!result) {
      toast.error("Product not deleted!");
    } else {
      toast.success("Product deleted!");
    }
  };

  return (
    <Form action={clientAction}>
      {/* here we use a hidden readonly input to pass the id to the action */}
      <input hidden readOnly name="id" value={id} />
      <DeleteButton />
    </Form>
  );
}
