import MobileNav from "@/components/Mobile/Nav";
import Nav from "@/components/Nav";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Chen<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className={"hidden items-center gap-8 xl:flex"}>
          <Nav />
          <Link href={"/resume"}>
            <Button>聊聊？</Button>
          </Link>
        </div>

        <div className={"xl:hidden"}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
