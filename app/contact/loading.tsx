export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center animate-pulse">
      <div className="max-w-2xl w-full">
        <div className="h-12 mb-12 bg-green-900/30 rounded-2xl w-2/3 mx-auto" />
        <form className="px-12 py-6 max-w-200 mx-auto relative">
          <div className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <div className="h-5 w-24 bg-green-900/30 rounded mb-2" />
              <div className="h-10 w-full bg-neutral-800 rounded-2xl" />
            </div>
            {/* Phone */}
            <div>
              <div className="h-5 w-24 bg-green-900/30 rounded mb-2" />
              <div className="h-10 w-full bg-neutral-800 rounded-2xl" />
            </div>
            {/* Email */}
            <div>
              <div className="h-5 w-24 bg-green-900/30 rounded mb-2" />
              <div className="h-10 w-full bg-neutral-800 rounded-2xl" />
            </div>
            {/* Message */}
            <div>
              <div className="h-5 w-24 bg-green-900/30 rounded mb-2" />
              <div className="h-80 w-full bg-neutral-800 rounded-2xl" />
            </div>
            {/* Button */}
            <div className="flex justify-center items-center p-6 mt-4">
              <div className="h-10 w-32 bg-green-900/30 rounded-2xl" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
