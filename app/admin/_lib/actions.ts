"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const image = formData.get("imageUrl") as string;

  //we could loop thru all formData and then process it more after instead of above
  //const postData = Object.fromEntries(formData.entries())

  const newProduct = {
    title,
    price: parseInt(price),
    description,
    categoryId: parseInt(category),
    images: [image],
  };

  const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });

  //if(!res.ok)  later ...

  const data = await res.json();
  console.log(data);

  revalidatePath("/"); //typ tömmer cache så vi tvingas ladda om datan
  redirect("/admin?status=success");
}

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id");
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  //if(!res.ok)  later ...

  const data = await res.json();
  //if data=true ...
  console.log(data);
  revalidatePath("/");
}
