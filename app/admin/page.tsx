import DeleteForm from "@/app/admin/_components/form-delete";
import { PlatziProduct } from "@/lib/types";
import Link from "next/link";

//-------
// BASICS
//-------
// getting started with updating data - https://nextjs.org/docs/app/getting-started/updating-data
// server actions (Codevolution) - https://www.youtube.com/watch?v=xWFbnrTap3M

//-------
// HOOKS
//-------
// useFormsStatus reference - https://react.dev/reference/react-dom/hooks/useFormStatus
// useFormStatus (tapaScript by Tapas Adhikary) - https://www.youtube.com/watch?v=AXGRPUl_3Ts
// useFormStatus (Codevolution) - https://www.youtube.com/watch?v=o3M7RmsyiBU
// useActionState reference - https://react.dev/reference/react/useActionState
// useActionState (tapaScript by Tapas Adhikary) - https://www.youtube.com/watch?v=PWFKgdGmhxg
// useActionState (Codevolution) - https://www.youtube.com/watch?v=4-3K7SgoVf4
// Server actions, revalidate data (useFormState is now called useActionState!) (leerob) - https://www.youtube.com/watch?v=dDpZfOQBMaU
// useFormStatus + useActionState - https://playfulprogramming.com/posts/what-is-use-action-state-and-form-status

//-------
// A little bit of everything of the above - https://nextjs.org/docs/app/guides/forms
//-------

//-------
// CLIENT ACTIONS
//-------
// https://vercel.com/blog/whats-new-in-react-19
// Error Handling in Server Actions Next.js (ByteGrad) - https://www.youtube.com/watch?v=nsMzWA6_3RA

export default async function Admin() {
  const platziRes = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
  );
  const platziData: PlatziProduct[] = await platziRes.json();

  return (
    <section className="grid gap-4">
      <h2 className="text-xl font-bold text-center">Products</h2>
      <Link
        href="admin/create"
        className="cursor-pointer border px-2 py-1 bg-green-200 w-fit justify-self-end"
      >
        Create new
      </Link>

      <table className="w-full text-left table-auto divide-y-2 mb-4">
        <thead>
          <tr>
            <th scope="col" className="px-2">
              Title
            </th>
            <th scope="col" className="text-right pe-10">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {platziData.map((product) => (
            <tr key={product.id}>
              <th className="font-normal px-2">{product.title}</th>
              <th className="font-normal flex justify-end gap-2 p-2">
                <Link
                  href={`/admin/update/${product.id}`}
                  className="border p-2 cursor-pointer"
                >
                  Edit
                </Link>
                <DeleteForm id={product.id} />
                <button
                  className="bg-neutral-600 text-white p-2 cursor-pointer"
                  type="submit"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
