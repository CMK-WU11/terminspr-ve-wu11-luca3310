"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="p-5 h-screen bg-primary text-primaryWhite">
      <h1 className="mb-2 text-lg">Not Found</h1>
      <Link href="/">
        <button className="p-1 px-2 rounded-lg border-2 border-solid transition border-primaryWhite duration-50 hover:bg-primaryWhite hover:text-primary">
          home page
        </button>
      </Link>
    </main>
  );
}
