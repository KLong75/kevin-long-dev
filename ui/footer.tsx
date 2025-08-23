import ContactIconLinks from "./contact-icon-links";

export default function Footer() {
  return (
    <footer className="text-xs flex flex-col justify-center items-center my-2 z-0 text-shadow-black-background-black">
      <ContactIconLinks orientation="horizontal" size={24} />
      <p className="text-green-500 mt-4">© 2025 kevinlong.dev</p>
    </footer>
  );
}
