"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span /><span />
      </button>
      {isOpen && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
      </nav>}
    </div>
  );
}
