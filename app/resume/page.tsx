"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore",
  info: [
    {
      fileName: "Name",
      fileValue: "Wu Yichen",
    },
    {
      fileName: "WeChat",
      fileValue: "",
    },
    {
      fileName: "Experience",
      fileValue: "3+ years ",
    },
    {
      fileName: "Name",
      fileValue: "Wu Yichen",
    },
    {
      fileName: "Nationality",
      fileValue: "China",
    },
    {
      fileName: "Email",
      fileValue: "",
    },
    // {
    //   fileName: "Freelance",
    //   fileValue: "Available",
    // },
  ],
};

const exprience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quibusdam sunt explicabo inventore",
  items: [
    {
      company: "Kuai Shou",
      position: "Web Fe development",
      duration: "2022-Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quibusdam sunt explicabo inventore,",
  items: [
    {
      institution: "Online Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
  ],
};

const currentSkills = {
  title: "Current Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    { icon: <FaCss3 />, name: "css 3" },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
  ],
};

const learningSkills = {
  title: "Learning Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};
export default function Resume() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
        className={
          "flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
        }
      >
        <div className={"container mx-auto"}>
          <Tabs
            defaultValue={"experience"}
            className={"flex flex-col gap-[60px] xl:flex-row"}
          >
            <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 rounded-lg xl:mx-0">
              <TabsTrigger value={"experience"}>Experience</TabsTrigger>
              <TabsTrigger value={"education"}>Education</TabsTrigger>
              <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              <TabsTrigger value={"about"}>About me</TabsTrigger>
            </TabsList>

            <div className={"min-h-[70vh] w-full"}>
              <TabsContent value={"experience"} className={"w-full"}>
                <div
                  className={
                    "flex flex-col gap-[30px] text-center xl:text-left"
                  }
                >
                  <h3 className={"text-4xl font-bold"}>{exprience.title}</h3>
                  <p className={"mx-auto max-w-[600px] text-white/60 xl:mx-0"}>
                    {exprience.description}
                  </p>
                  <ScrollArea className={"h-[400px]"}>
                    <ul
                      className={"grid grid-cols-1 gap-[30px] lg:grid-cols-2"}
                    >
                      {exprience.items.map((item) => {
                        return (
                          <>
                            <li
                              key={item.duration}
                              className={
                                "flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                              }
                            >
                              <span className={"text-accent"}>
                                {item.duration}
                              </span>
                              <h3
                                className={
                                  "min-h-[60px] max-w-[260px] text-center text-xl lg:text-left"
                                }
                              >
                                {item.position}
                              </h3>
                              <div className={"flex items-center gap-3"}>
                                <span
                                  className={
                                    "h-[6px] w-[6px] rounded-full bg-accent"
                                  }
                                ></span>
                                <p className={"text-white/60"}>
                                  {item.company}
                                </p>
                              </div>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value={"education"} className={"w-full"}>
                <div
                  className={
                    "flex flex-col gap-[30px] text-center xl:text-left"
                  }
                >
                  <h3 className={"text-4xl font-bold"}>{education.title}</h3>
                  <p className={"mx-auto max-w-[600px] text-white/60 xl:mx-0"}>
                    {education.description}
                  </p>
                  <ScrollArea className={"h-[400px]"}>
                    <ul
                      className={"grid grid-cols-1 gap-[30px] lg:grid-cols-2"}
                    >
                      {education.items.map((item) => {
                        return (
                          <>
                            <li
                              key={item.duration}
                              className={
                                "flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                              }
                            >
                              <span className={"text-accent"}>
                                {item.duration}
                              </span>
                              <h3
                                className={
                                  "min-h-[60px] max-w-[260px] text-center text-xl lg:text-left"
                                }
                              >
                                {item.position}
                              </h3>
                              <div className={"flex items-center gap-3"}>
                                <span
                                  className={
                                    "h-[6px] w-[6px] rounded-full bg-accent"
                                  }
                                ></span>
                                <p className={"text-white/60"}>
                                  {item.institution}
                                </p>
                              </div>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value={"skills"} className={"h-full w-full"}>
                <div className={"flex flex-col gap-[30px]"}>
                  <div
                    className={
                      "flex flex-col gap-[30px] text-center xl:text-left"
                    }
                  >
                    <h3 className={"text-4xl font-bold"}>
                      {currentSkills.title}
                    </h3>
                    <p
                      className={"mx-auto max-w-[600px] text-white/60 xl:mx-0"}
                    >
                      {currentSkills.description}
                    </p>
                  </div>
                  <ul
                    className={
                      "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]"
                    }
                  >
                    {currentSkills.skillList.map((item) => {
                      return (
                        <li key={item.name}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className={
                                  "group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]"
                                }
                              >
                                <div
                                  className={
                                    "text-6xl transition-all duration-300 group-hover:text-accent"
                                  }
                                >
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className={"capitalize"}>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={"mt-8 flex flex-col gap-[30px]"}>
                  <div
                    className={
                      "flex flex-col gap-[30px] text-center xl:text-left"
                    }
                  >
                    <h3 className={"text-4xl font-bold"}>
                      {learningSkills.title}
                    </h3>
                    <p
                      className={"mx-auto max-w-[600px] text-white/60 xl:mx-0"}
                    >
                      {learningSkills.description}
                    </p>
                  </div>
                  <ul
                    className={
                      "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]"
                    }
                  >
                    {learningSkills.skillList.map((item) => {
                      return (
                        <li key={item.name}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className={
                                  "group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]"
                                }
                              >
                                <div
                                  className={
                                    "text-6xl transition-all duration-300 group-hover:text-accent"
                                  }
                                >
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className={"capitalize"}>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value={"about"}
                className={"w-full text-center xl:text-left"}
              >
                <div className={"flex flex-col gap-[30px]"}>
                  <h3 className={"text-4xl font-bold"}> {about.title}</h3>
                  <p className={"mx-auto max-w-[600px] text-white/60 xl:mx-0"}>
                    {about.description}
                  </p>
                  <ul
                    className={
                      "mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 lg:grid-cols-3 xl:mx-0 xl:grid-cols-2"
                    }
                  >
                    {about.info.map((item) => {
                      return (
                        <li
                          key={item.fileName}
                          className={
                            "flex items-center justify-center gap-4 xl:justify-start"
                          }
                        >
                          <span className={"text-white/60"}>
                            {item.fileName}
                          </span>
                          <span className={"text-xl"}>{item.fileValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
