// import components
import ContactForm from "@/ui/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center my-8 text-green-500">
          Let&apos;s Talk!
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
