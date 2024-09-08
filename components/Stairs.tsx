import { animate, motion } from "framer-motion";
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className={"relative h-screen w-full bg-white"}
          />
        );
      })}
    </>
  );
}

export default Stairs;
