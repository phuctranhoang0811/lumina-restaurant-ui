"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Banquet Facilities", href: "/banquet-facilities" },
    { name: "Catering", href: "/catering" },
    { name: "Menu Kits", href: "/menu-kits" },
    { name: "Hosting", href: "/hosting-services" },
    { name: "Visiting Hours", href: "/visiting-hours" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isDarkNav = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkNav
          ? "bg-stone-900/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
      aria-label="Global Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-serif tracking-widest uppercase transition-colors ${
            isDarkNav ? "text-amber-50" : "text-white"
          }`}
          aria-label="Restaurant Home"
        >
          Lumina
        </Link>

        {/* Desktop Menu - Hidden on smaller screens due to many links */}
        <div className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-amber-400 ${
                isDarkNav ? "text-stone-200" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="ml-4 px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium tracking-wider uppercase transition-colors rounded-sm"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex xl:hidden items-center space-x-4">
          <Link
            href="/reservation"
            className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium tracking-wider uppercase transition-colors rounded-sm"
          >
            Book
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${
              isDarkNav ? "text-stone-200 hover:text-amber-400" : "text-white hover:text-amber-200"
            }`}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-stone-900/95 backdrop-blur-md shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen border-t border-stone-800" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-200 hover:text-amber-400 text-lg tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
