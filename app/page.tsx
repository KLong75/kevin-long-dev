import { connection } from "next/server";
import PopcornIcons from "@/ui/popcorn-icons";

export default async function Home() {
  await connection();
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full h-200 md:h-220 lg:h-280 2xl:h-300 relative items-center justify-center">
        {/* PopcornIcons first, no background */}
        <PopcornIcons />
        <div className="flex flex-col justify-center items-center h-full absolute inset-0 pointer-events-none">
          <h1 className="text-green-500 text-xl md:text-2xl lg:text-4xl font-bold text-center">
            Kevin Long | Full Stack Developer
          </h1>
          <h2 className="text-green-500 lg:text-xl font-semibold text-center">
            React | Next.js | TypeScript | Node.js | Express
          </h2>
        </div>
      </div>
    </div>
  );
}
