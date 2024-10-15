"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "Stackoverflow-clone",
    desc: "一个模仿Stackoverflow的论坛网站",
    done: true,
    stick: [
      { name: "Next.js" },
      { name: "Tailwindcss" },
      { name: "WebHook" },
      { name: "Shadcn/ui" },
      { name: "Clerk" },
      { name: "Mongodb" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://stackoverflow-clone-sepia-nine.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend Project",
    title: "portfolio",
    desc: "个人简历网站",
    done: true,
    stick: [
      { name: "Next.js" },
      { name: "Tailwindcss" },
      { name: "framer-motion" },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://portfolio-blush-sigma-68.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack Project",
    title: "English learn",
    desc: "英语学习网站，类似多邻国",
    stick: [{ name: "Next.js" }, { name: "Tailwindcss" }, { name: "Other" }],
    image: "/assets/work/thumb5.png",
    done: false,
    live: "",
    github: "",
  },
];
export default function Works() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: SwiperClass) {
    const index = swiper.activeIndex;
    setProject(projects[index]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeIn" },
      }}
      className={"flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"}
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col xl:flex-row xl:gap-[30px]"}>
          <div
            className={
              "order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between"
            }
          >
            <div className={"flex h-[50%] flex-col gap-[30px]"}>
              <div
                className={
                  "text-outline text-8xl font-extrabold leading-none text-transparent"
                }
              >
                {project.num}
              </div>
              <h2
                className={
                  "text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent"
                }
              >
                {project.category}
              </h2>
              <p className={"text-white/60"}>{project.desc}</p>
              <ul className={"flex flex-wrap gap-4"}>
                {project.stick.map((item, index) => {
                  return (
                    <li key={item.name} className={"text-xl text-accent"}>
                      {item.name}
                      {index !== project.stick.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className={"border border-white/20"}></div>
              <div className={"flex items-center gap-4"}>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          "group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5"
                        }
                      >
                        <BsArrowUpRight
                          className={
                            "text-3xl text-white group-hover:text-accent"
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.done ? `Live project` : `doing`}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} aria-disabled>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          "group flex h-[70px] w-[70px] cursor-not-allowed items-center justify-center rounded-full bg-white/5"
                        }
                      >
                        <BsGithub
                          className={
                            "text-3xl text-white group-hover:text-accent"
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className={"w-full"}>
                    <div
                      className={
                        "group relative flex h-[460px] items-center justify-center bg-pink-50/20"
                      }
                    >
                      <div
                        className={
                          "absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"
                        }
                      ></div>
                      <div className={"relative h-full w-full"}>
                        <Image
                          src={project.image}
                          fill
                          className={"object-cover"}
                          alt={""}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
