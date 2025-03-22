"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { link: "/#about", title: "About" },
    { link: "/works", title: "Works" },
    { link: "/#contact", title: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      <nav className="container mx-auto px-4 py-1 my-3">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-500" />
          </Link>

          {/* デスクトップメニュー */}
          <ul className="hidden lg:flex items-center gap-12 ml-auto">
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="flex items-center px-1 border-b-3 border-transparent hover:border-gray-900 transition-all duration-500"
                >
                  <span className="pl-0.5 font-objective font-bold">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 z-50 rounded-lg transition-colors"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 h-0.5 w-full bg-gray-900 transition-all ${
                  isOpen ? "top-2 rotate-45 bg-white" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-full bg-gray-900 transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-gray-900 transition-all ${
                  isOpen ? "top-2 -rotate-45 bg-white" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ハンバーガーメニュー */}
        {isOpen && (
          <div
            className={`lg:hidden fixed top-3 right-3 w-44 bg-black rounded-2xl backdrop-blur-sm transition-transform duration-500 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <ul className="mx-auto pt-12 p-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="block px-6 py-2 text-white hover:bg-gray-100 hover:text-black rounded-lg transition-colors font-objective font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
