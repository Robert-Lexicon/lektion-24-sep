import Form from "next/form";
import { redirect } from "next/navigation";

// nodemailer + gmail - https://dev.to/emmanuel_xs/how-to-send-emails-for-free-in-nextjs-using-gmail-and-nodemailer-4i6e
// resend - https://resend.com/docs/send-with-nextjs

//server action (inline) - mutations
async function contactAction(formData: FormData) {
  "use server";
  const email = formData.get("email");
  const title = formData.get("title");
  const message = formData.get("message");

  //skicka till api eller annat...

  console.log(email);

  //redirect("/contact/thanks") //redirect to other page
  redirect("/contact?status=error"); //redirect using search params
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { status } = await searchParams;
  return (
    <section className="grid gap-4">
      <h2 className="text-xl font-bold text-center">Contact us</h2>
      {status === "success" && (
        <p className="text-green-600 text-center font-bold">
          Thank you for contacting us!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-bold">
          Oh no, appears we have an error...
        </p>
      )}
      <Form className="grid gap-2" action={contactAction}>
        <label htmlFor="email">Your e-mail</label>
        <input
          className="border p-2"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="your@email.com"
          required
        />

        <label htmlFor="title">Title</label>
        <input
          className="border p-2"
          type="text"
          name="title"
          id="title"
          placeholder="My subject"
          required
          minLength={4}
          maxLength={99}
        />

        <label htmlFor="message">Message</label>
        <textarea
          className="border p-2"
          id="message"
          name="message"
          rows={10}
          placeholder="My message is..."
          required
          minLength={10}
        />

        <button
          className="justify-self-end bg-neutral-200 p-2 cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </Form>
    </section>
  );
}
