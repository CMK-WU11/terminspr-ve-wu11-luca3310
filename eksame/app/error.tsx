"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="p-5 h-screen bg-primary text-primaryWhite">
      <h1 className="mb-2 text-lg">Hovsa: {error.message}</h1>
      <button
        className="p-1 px-2 rounded-lg border-2 border-solid transition border-primaryWhite duration-50 hover:bg-primaryWhite hover:text-primary"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
