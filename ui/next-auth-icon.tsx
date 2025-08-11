import Image from "next/image";

export function NextAuthIcon() {
  return (
    <div>
      {" "}
      <Image
        src="/tech-icons/next-auth.png" // Place your PNG at public/icons/next-auth.png
        alt="NextAuth.js"
        width={32}
        height={32}
        style={{ display: "inline-block" }}
        draggable={false}
        priority
      />
    </div>
  );
}
