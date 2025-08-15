// import link data
import { contactIconLinkData } from "../lib/contact-icon-link-data";
// import components
import IconLink from "./icon-link";
// import react icons
// import { SiGithub } from "react-icons/si";
// import { SiLinkedin } from "react-icons/si";
// import { TfiEmail } from "react-icons/tfi";
// import { MdEmail } from "react-icons/md";

type ContactIconLinkProps = {
  orientation: "vertical" | "horizontal";
};

type ContactIconLinkData = {
  href: string;
  icon: React.ElementType;
  // label: string;
};

export default function ContactIconLinks({
  orientation,
}: ContactIconLinkProps) {
  return (
    <div
      className={`flex justify-center space-x-6 ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}>
      {contactIconLinkData.map(({ href, icon: Icon,  }: ContactIconLinkData) => (
        <IconLink key={href} href={href} icon={Icon}  />
      ))}
    </div>
  );
}
