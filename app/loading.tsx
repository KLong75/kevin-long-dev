export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center w-full text-shadow-black-background-black">
      <div className="relative w-[90vw] md:w-[80vw] 2xl:w-[40vw] h-[60vh] md:h-[80vh] 2xl:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="h-8 w-64 md:w-96 bg-green-900/30 rounded-xl mb-4 animate-pulse" />
          <div className="h-6 w-48 md:w-72 bg-green-900/30 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
