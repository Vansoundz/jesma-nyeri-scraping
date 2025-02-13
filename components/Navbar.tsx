"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({
  links = [],
}: {
  links: { label: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className="bg-white sticky top-0 z-[1000]">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Jesma Estates
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {links.map((link) => (
                <Link href={`/${link.href}`} className="" key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "fixed inset-0 z-50" : "hidden"
        } bg-gray-100 md:hidden flex flex-col px-4 py-2 my-16 h-full transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link href={`/${link.href}`} className="block " key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
