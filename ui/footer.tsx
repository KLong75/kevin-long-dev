import ContactIconLinks from "./contact-icon-links";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center my-6 z-0 text-shadow-black-background-black">
      <ContactIconLinks orientation="horizontal" />
      <p className="text-green-500 my-2">© 2025 kevinlong.dev</p>
  
    </footer>
  );
}
