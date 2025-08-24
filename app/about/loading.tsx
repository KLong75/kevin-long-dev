export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center text-green-500 animate-pulse">
      {/* About Me */}
      <div className="w-full max-w-7xl mt-12 lg:mt-18 3xl:mt-24">
        <div className="h-10 w-64 mx-auto bg-green-900/30 rounded-2xl my-8" />
        <div className="flex justify-center w-full mt-6">
          <div className="h-6 w-3/4 bg-neutral-800 rounded-2xl" />
        </div>
      </div>
      {/* Download Resume */}
      <div className="flex justify-center w-full mt-6">
        <div className="h-10 w-48 bg-green-900/30 rounded-2xl" />
      </div>
      {/* Education */}
      <div className="w-full max-w-7xl mt-6">
        <div className="h-8 w-48 mx-auto bg-green-900/30 rounded-2xl mb-6" />
        <ul className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => (
            <li
              key={i}
              className="m-2 rounded-2xl p-4 shadow-lg shadow-green-500/50 border-2 border-green-500 bg-neutral-900"
            >
              <div className="h-6 w-32 bg-neutral-700 rounded mb-2 mx-auto" />
              <div className="h-5 w-40 bg-neutral-800 rounded mx-auto" />
            </li>
          ))}
        </ul>
      </div>
      {/* Experience */}
      <div className="w-full max-w-7xl mt-6">
        <div className="h-8 w-48 mx-auto bg-green-900/30 rounded-2xl mb-6" />
        <ul className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <li
              key={i}
              className="m-2 rounded-2xl p-4 shadow-lg shadow-green-500/50 border-2 border-green-500 bg-neutral-900"
            >
              <div className="h-6 w-32 bg-neutral-700 rounded mb-2 mx-auto" />
              <div className="h-5 w-40 bg-neutral-800 rounded mx-auto mb-2" />
              <div className="h-4 w-24 bg-neutral-700 rounded mx-auto" />
            </li>
          ))}
        </ul>
      </div>
      {/* Technical Skills */}
      <div className="w-full max-w-7xl mt-6">
        <div className="h-8 w-56 mx-auto bg-green-900/30 rounded-2xl mb-6" />
        <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(15)].map((_, i) => (
            <li
              key={i}
              className="h-8 bg-green-900/30 rounded-2xl"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
