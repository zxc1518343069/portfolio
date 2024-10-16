"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/const/const";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={(props) => {
      setOpen(props)
    }}>
      <SheetTrigger className={"flex items-center justify-center"}>
        <CiMenuFries className={"text-[32px] text-accent"} />
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
              onClick={() => {
                setOpen(false)
              }}
              className={`${pathname === link.path && "border--b-2 border-accent text-accent"} text-xl capitalize transition-all hover:text-accent`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

      </SheetContent>
    </Sheet >
  );
}
export default MobileNav;
