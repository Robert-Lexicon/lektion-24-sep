import Form from "next/form";

// nodemailer + gmail - https://dev.to/emmanuel_xs/how-to-send-emails-for-free-in-nextjs-using-gmail-and-nodemailer-4i6e
// resend - https://resend.com/docs/send-with-nextjs

export default function Contact() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl font-bold text-center">Contact us</h2>
      <Form className="grid gap-2" action="">
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
