"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center justify-center text-green-500 text-shadow-black-background-black">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl">Something went wrong.</h2>
        <span>Please try again</span>
      </div>
    </div>
  );
}
