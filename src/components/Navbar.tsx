
import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Image src="slack.svg" width={20} height={20} alt="logo" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>
        {/* search bar */}

        <button className="bg-black rounded-xl px-4 py-2 text-white">
          <Link href="/sign-in">Sign In</Link>
        </button>
      </div>
    </div>
  );
}
