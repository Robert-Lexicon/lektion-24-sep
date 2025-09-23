import { PlatziCategory, PlatziProduct } from "@/lib/types";
import Form from "next/form";
import Link from "next/link";

export default async function UpdateProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [categoryResponse, productResponse] = await Promise.all([
    fetch("https://api.escuelajs.co/api/v1/categories"),
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`),
  ]);

  //data here is always any since you can't know before what it is
  const [categoriesData, productData] = await Promise.all([
    categoryResponse.json(),
    productResponse.json(),
  ]);

  //so we need to reassign to set the right types (hopefully with some error checking before)
  const product: PlatziProduct = productData;
  const categories: PlatziCategory[] = categoriesData;

  return (
    <Form className="grid gap-2" action="">
      <label htmlFor="category">Category</label>
      <select
        name="category"
        id="category"
        className="border p-2"
        defaultValue={product.category.id}
      >
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
        defaultValue={product.title}
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
        defaultValue={product.description}
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
        defaultValue={product.price}
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
        defaultValue={product.images[0]}
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
