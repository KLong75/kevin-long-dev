import Image from "next/image";

export function NeonIcon() {
  return (
    <div>
      {" "}
      <Image
        src="/tech-icons/neon.png" 
        alt="Neon"
        width={36}
        height={36}
        style={{ display: "inline-block" }}
        draggable={false}
        priority
      />
    </div>
  );
}