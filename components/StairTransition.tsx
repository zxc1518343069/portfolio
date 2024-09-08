"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "@/components/Stairs";

function StairTransition() {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode={"wait"}>
        <div key={pathName}>
          <div
            className={
              "pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen"
            }
          >
            <Stairs />
          </div>
          <motion.div
            className={
              "bg-primary pointer-events-none fixed top-0 h-screen w-screen"
            }
            initial={{ opacity: "1" }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
