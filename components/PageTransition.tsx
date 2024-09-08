"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
          className={
            "bg-primary pointer-events-none fixed top-0 h-screen w-screen"
          }
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;
