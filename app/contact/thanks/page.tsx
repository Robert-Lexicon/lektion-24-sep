import Form from "next/form";
import Link from "next/link";

// nodemailer + gmail - https://dev.to/emmanuel_xs/how-to-send-emails-for-free-in-nextjs-using-gmail-and-nodemailer-4i6e
// resend - https://resend.com/docs/send-with-nextjs

export default function Thanks() {
  return (
    <section className="grid gap-4  text-center">
      <h2 className="text-xl font-bold">Thank you for contacting us!</h2>
      <p>We will get back to you asap!</p>
    </section>
  );
}
