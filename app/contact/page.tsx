// import from next
import { connection } from "next/server";
// import components
import ContactFormContainer from "@/ui/contact-form-container";
// import from utils
// import { delayPageLoad } from "@/utils/utils";

export default async function ContactPage() {
  await connection();
  return (
    <div className="flex flex-1 items-center justify-center text-green-500 text-shadow-black-background-black">
      <div className="max-w-2xl w-full">
        <ContactFormContainer />
      </div>
    </div>
  );
}
