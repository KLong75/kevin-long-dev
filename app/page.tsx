import { connection } from "next/server";
import PopcornIcons from "@/ui/popcorn-icons";

export default async function Home() {
  await connection();
  return (
    <div className="flex flex-1 items-center justify-center w-full">
      <div className="relative w-[80vw] 3xl:w-[60vw] h-[80vh] 3xl:h-[60vh] flex items-center justify-center">
        <PopcornIcons />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="text-green-500 text-xl md:text-2xl lg:text-4xl font-bold text-center">
            Kevin Long | Full Stack Developer
          </h2>
          <h3 className="text-green-500 lg:text-xl font-semibold text-center">
            React | Next.js | TypeScript | Node.js | Express
          </h3>
        </div>
      </div>
    </div>
  );
}