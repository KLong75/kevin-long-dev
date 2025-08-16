// import components
import ContactForm from "@/ui/contact-form-old";
import ContactFormContainer from "@/ui/contact-form-container";
// import from utils
import { delayPageLoad } from "@/utils/utils";

export default async function ContactPage() {
  await delayPageLoad(1000);
  return (
    <div className="flex flex-1 items-center justify-center text-green-500 text-shadow-black-background-black">
      <div className="max-w-2xl w-full">
        {/* <h2 className="text-4xl font-bold text-center  mb-12">
          Let&apos;s Talk!
        </h2> */}
        {/* <ContactForm /> */}
        <ContactFormContainer />
      </div>
    </div>
  );
}
