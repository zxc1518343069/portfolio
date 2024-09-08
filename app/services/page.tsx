"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web development",
    description: "Web development app build with web development",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Web development app build with web development",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "Web development app build with web development",
    href: "",
  },
];

export default function Services() {
  return (
    <section
      className={"flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"}
    >
      <div className={"container mx-auto"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, easing: "easeInOut", delay: 2.4 },
          }}
          className={"grid grid-cols-1 gap-[60px] md:grid-cols-2"}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={"group flex flex-1 flex-col justify-center gap-6"}
            >
              <div className={"flex w-full items-center justify-between"}>
                <div
                  className={
                    "text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500"
                  }
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="group-hover: flex h-[70px] w-[70px] items-center justify-center rounded-full bg-accent bg-white transition-all duration-500 hover:-rotate-45"
                >
                  <BsArrowDownRight className={"text-3xl text-primary"} />
                </Link>
              </div>
              <h2 className="Leading-none text-[42px] font-bold text-white transition-all duration-500 group-hover:text-accent">
                {service.title}
              </h2>
              <p className={"text-white/60"}> {service.description}</p>
              <div className={"w-full border-b border-white/20"}></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
