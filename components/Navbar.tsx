"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          Product Explorer
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          <Link
            href="/"
            className={`hover:underline ${pathname === "/" ? "font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:underline ${
              pathname === "/about" ? "font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/categories/books"
            className={`hover:underline ${
              pathname.startsWith("/categories/books") ? "font-bold" : ""
            }`}
          >
            Books
          </Link>
        </div>

        {/* 🔍 SearchBar */}
        
      </div>
    </nav>
  );
}

