"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/const/const";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className={"flex items-center justify-center"}>
        <CiMenuFries className={"text-accent text-[32px]"} />
      </SheetTrigger>
      <SheetContent className={"flex flex-col"}>
        <div className={"mb-40 mt-32 text-center text-2xl"}>
          <Link href={"/"}>
            <h1 className={"text-4xl font-semibold"}>
              Chen <span className={"text-accent"}>.</span>
            </h1>
          </Link>
        </div>
        <nav className={"flex flex-col items-center justify-center gap-8"}>
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`${pathname === link.path && "text-accent border--b-2 border-accent"} hover:text-accent text-xl capitalize transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
export default MobileNav;
