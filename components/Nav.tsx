"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/const/const";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className={"flex gap-8"}>
      {navLinks.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={`${pathname === link.path && "text-accent border--b-2 border-accent"} hover:text-accent font-medium capitalize transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
export default Nav;
