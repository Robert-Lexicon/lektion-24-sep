"use client";
import Form from "next/form";

// https://fakeapi.platzi.com/en/rest/products/#delete-a-product
// https://ui.shadcn.com/docs/components/alert-dialog

export default function DeleteForm({ id }: { id: number }) {
  return (
    <Form action="">
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
