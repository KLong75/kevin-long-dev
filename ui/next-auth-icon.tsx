import Image from "next/image";

export function NextAuthIcon() {
  return (
    <Image
      src="/tech-icons/next-auth.png" // Place your PNG at public/icons/next-auth.png
      alt="NextAuth.js"
      width={42}
      height={42}
      style={{ display: "inline-block" }}
      draggable={false}
      priority
    />
  );
}