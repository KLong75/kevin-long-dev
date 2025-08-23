import { connection } from "next/server";
import PopcornIcons from "@/ui/popcorn-icons";
import TechTriangleTextDisplay from "@/ui/tech-triangle-text-display";
// import { delayPageLoad } from "@/utils/utils";

export default async function Home() {
  await connection();
  // await delayPageLoad(6000);
  return (
    <div className="flex flex-1 items-center justify-center w-full text-shadow-black-background-black">
      <div className="relative w-[80vw] 2xl:w-[40vw] h-[80vh] 2xl:h-[60vh] flex items-center justify-center">
        <PopcornIcons />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="font-share-tech-mono text-green-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center">
            Kevin Long | Full Stack Developer
          </h2>
          <h3 className="text-green-500 text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl font-semibold text-center">
            React | Next.js | Node.js | TypeScript | JavaScript | Tailwind CSS
          </h3>
          {/* <TechTriangleTextDisplay /> */}
        </div>
      </div>
    </div>
  );
}