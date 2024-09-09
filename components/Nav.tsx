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
          className={`${pathname === link.path && "border--b-2 border-accent text-accent"} font-medium capitalize transition-all hover:text-accent`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
export default Nav;
