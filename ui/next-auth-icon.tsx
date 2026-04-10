import Image from "next/image";

export function NextAuthIcon() {
  return (
    <Image
      src="/tech-icons/next-auth.png"
      alt="NextAuth.js"
      fill
      draggable={false}
      priority
      className="object-contain"
      sizes="42px"
    />
  );
}