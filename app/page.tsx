import PopcornIcons from "@/ui/popcorn-icons";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center ">
      <div className="w-full h-screen lg:h-80 overflow-hidden relative  items-center justify-center">
        {/* PopcornIcons first, no background */}
        <PopcornIcons />
        <div className="flex justify-center items-center h-full absolute inset-0 pointer-events-none">
          <h1 className="text-green-500 text-2xl lg:text-4xl font-bold text-shadow-black-background-black text-center">
            Kevin Long | Full Stack Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
