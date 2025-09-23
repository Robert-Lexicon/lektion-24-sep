import FormCreate from "@/app/admin/_components/form-create";
import { PlatziCategory } from "@/lib/types";

// https://fakeapi.platzi.com/en/rest/products/#create-a-product

export default async function Create() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: PlatziCategory[] = await res.json();

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-center">Add new product</h2>
      <FormCreate categories={categories} />
    </section>
  );
}
