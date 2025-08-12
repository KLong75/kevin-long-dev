// import components
import ContactForm from "@/ui/contact-form";
// import from utils
import { delayPageLoad } from "@/utils/utils";

export default async function ContactPage() {
  await delayPageLoad(4000);
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center  text-green-500 mb-12">
          Let&apos;s Talk!
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
