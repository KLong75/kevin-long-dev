import Image from "next/image";

export function FigmaIcon() {
  return (
    <div>
      {" "}
      <Image
        src="/tech-icons/figma.png"
        alt="Figma"
        width={36}
        height={36}
        // style={{ display: "inline-block" }}
        draggable={false}
        priority
      />
    </div>
  );
}