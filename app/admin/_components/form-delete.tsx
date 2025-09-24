"use client";
import { deleteProduct } from "@/app/admin/_lib/actions";
import Form from "next/form";

// endpoint: https://fakeapi.platzi.com/en/rest/products/#delete-a-product
// could be nice with some alert before maybe? https://ui.shadcn.com/docs/components/alert-dialog

export default function DeleteForm({ id }: { id: number }) {
  return (
    <Form action={deleteProduct}>
      {/* here we use a hidden readonly input to pass the id to the action */}
      <input hidden readOnly name="id" value={id} />
      <button
        className="bg-neutral-600 text-white p-2 cursor-pointer"
        type="submit"
      >
        Delete
      </button>
    </Form>
  );
}
