"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo-icon.svg" alt="Lanna Labs icon" width={32} height={32} />
          <span className="text-foreground font-semibold text-sm tracking-tight">Lanna Labs</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link href="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <Link
          href="https://cal.com/rob-doughty-ffsaqo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Let&apos;s talk
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-background/20 text-xs">
            →
          </span>
        </Link>
      </nav>
    </header>
  );
}
