import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: "/github.svg",
      label: "GitHub",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: "/x.svg",
      label: "X (Twitter)",
    },
  ];

  return (
    <footer className="w-full py-12 px-4 border-t border-gray-200 font-objective">
      <div className="container mx-auto">
        <div className="flex justify-center gap-24 md:gap-48 lg:gap-96">
          {/* サイト内リンク */}
          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ソーシャルリンク */}
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={link.label}
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={36}
                    height={36}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0 items-center text-sm text-gray-600 mt-8 border-t border-gray-200 pt-4">
          <div className="flex-1">{/* 左側の空白スペース */}</div>
          <p className="flex-1 text-center">
            &copy; {new Date().getFullYear()} Keisuke Shimamura. All rights
            reserved.
          </p>
          <div className="flex-1 text-right">
            <p className="text-xs">
              Icons by{" "}
              <a
                href="https://icons8.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900"
              >
                Icons8
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
