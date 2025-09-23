"use client";
import { PlatziCategory } from "@/lib/types";
import Form from "next/form";
import Link from "next/link";

// https://nextjs.org/docs/app/getting-started/project-structure#route-groups-and-private-folders

export default function FormCreate({
  categories,
}: {
  categories: PlatziCategory[];
}) {
  return (
    <Form className="grid gap-2" action="">
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
        <button className="bg-neutral-200 p-2 cursor-pointer" type="submit">
          Save
        </button>
      </div>
    </Form>
  );
}
