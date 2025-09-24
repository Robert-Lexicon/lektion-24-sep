"use client";
import { createProduct } from "@/app/admin/_lib/actions";
import { PlatziCategory } from "@/lib/types";
import Form from "next/form";
import Link from "next/link";
import { useFormStatus } from "react-dom";

// https://nextjs.org/docs/app/getting-started/project-structure#route-groups-and-private-folders

// a fancier button using formstatus to see if the server action is pending or not
function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-neutral-200 p-2 cursor-pointer"
      type="submit"
      disabled={pending}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default function FormCreate({
  categories,
}: {
  categories: PlatziCategory[];
}) {
  return (
    <Form className="grid gap-2" action={createProduct}>
      <label htmlFor="category">Category</label>
      <select name="category" id="category" className="border p-2">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="title">Title</label>
      <input
        className="border p-2"
        type="text"
        name="title"
        id="title"
        placeholder="Product title"
        required
        minLength={4}
        maxLength={99}
      />

      <label htmlFor="description">Description</label>
      <textarea
        className="border p-2"
        id="description"
        name="description"
        rows={10}
        placeholder="Product description"
        required
        minLength={10}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        className="border p-2"
        type="number"
        name="price"
        placeholder="99"
        // min={0.50}
        // step={0.10}
        required
      />

      <label htmlFor="imageUrl">Image url</label>
      <input
        id="imageUrl"
        className="border p-2"
        type="url"
        name="imageUrl"
        placeholder="https://placehold.co/600x400"
        required
      />

      <div className="justify-self-end flex gap-2">
        <Link
          className="border border-neutral-200 p-2 cursor-pointer"
          href="/admin"
        >
          Cancel
        </Link>
        <SaveButton />
      </div>
    </Form>
  );
}
