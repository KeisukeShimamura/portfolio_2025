"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { link: "#about", title: "About" },
    { link: "#skill", title: "Skill" },
    { link: "#works", title: "Works" },
    { link: "#contact", title: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-500" />
          </Link>

          {/* デスクトップメニュー */}
          <ul className="hidden lg:flex items-center gap-6 ml-auto">
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="text-white flex items-center group"
                >
                  <motion.svg
                    className="inline-block w-3 h-3 mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    initial={{ y: 0 }}
                    whileHover={{
                      y: [-30, 0, -10, 0],
                      transition: {
                        duration: 0.5,
                        repeat: 1,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <circle cx="12" cy="12" r="8" />
                  </motion.svg>
                  <span className="pl-0.5 font-bold">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute h-0.5 w-full bg-gray-900 transition-all ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-2 h-0.5 w-full bg-gray-900 transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-gray-900 transition-all ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ハンバーガーメニュー */}
        {isOpen && (
          <div
            className={`lg:hidden fixed inset-x-0 top-[73px] bg-black backdrop-blur-sm transition-transform duration-300 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <ul className="container mx-auto py-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors font-bold"
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
