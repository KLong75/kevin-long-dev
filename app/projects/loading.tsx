export default function Loading() {
  // Number of skeleton cards to show
  const skeletons = Array.from({ length: 4 });

  return (
    <div className="flex flex-1">
      <div className="w-full">
        <div className="h-12 my-6 bg-green-900/30 rounded-2xl w-42 mx-auto" />
        <div className="w-full">
          <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-12 p-6 sm:p-12 w-full">
            {skeletons.map((_, i) => (
              <li
                key={i}
                className="flex flex-col justify-between h-full min-h-[500px] shadow-2xl shadow-green-500/50 border-2 border-neutral-600 rounded-2xl p-2 animate-pulse bg-neutral-900"
              >
                <div className="flex-1 flex flex-col">
                  <div className="my-4 h-8 bg-neutral-700 rounded w-2/3 mx-auto" />
                  <div className="h-6 bg-neutral-700 rounded w-1/3 mx-auto mb-4" />
                  <div className="my-4 flex items-center justify-center">
                    <div className="w-1/3 h-100 bg-neutral-800 rounded-xl border-4 border-zinc-900 shadow-lg shadow-zinc-200/50" />
                  </div>
                  <div className="flex items-center justify-center my-8 p-6">
                    <div className="w-full h-80 bg-neutral-800 rounded-xl px-4 border-4 border-zinc-900 shadow-lg shadow-zinc-200/50" />
                  </div>
                  <div className="text-shadow-black-background-black p-4">
                    <div className="h-6 bg-neutral-700 rounded w-1/2 mx-auto mb-4" />
                    <div className="h-40 bg-neutral-800 rounded-2xl border-4 border-zinc-900 shadow-lg shadow-zinc-200/50" />
                  </div>
                  <ul className="p-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
                    <div className="h-6 bg-neutral-700 rounded col-span-1 md:col-span-2 2xl:col-span-3 mb-4 w-1/2 mx-auto" />
                    {[...Array(6)].map((_, j) => (
                      <li
                        key={j}
                        className="h-8 bg-green-900 rounded-2xl m-2"
                      />
                    ))}
                  </ul>
                  <div className="p-4">
                    <div className="h-6 bg-neutral-700 rounded w-1/3 mx-auto mb-2" />
                    <div className="h-6 bg-neutral-800 rounded w-2/3 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center space-x-12 my-6">
                  <div className="w-24 h-8 bg-neutral-800 rounded-xl" />
                  <div className="w-24 h-8 bg-neutral-800 rounded-xl" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
