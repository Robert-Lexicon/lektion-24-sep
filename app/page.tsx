//Next.js Form component - https://nextjs.org/docs/app/api-reference/components/form

import Form from "next/form";

export default function Home() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl font-bold text-center">Search</h2>
      <Form action="/">
        <label htmlFor="search">Search</label>
        <input className="border" type="text" id="search" name="query" />
        <label htmlFor="smt">Nåt annat</label>
        <input className="border" type="text" id="smt" name="somethingelse" />
        <button type="submit" className="cursor-pointer border p-2">
          Search
        </button>
      </Form>
    </section>
  );
}
