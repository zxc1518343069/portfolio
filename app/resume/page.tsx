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

const skills = {
  title: "My skills",
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
                experience
              </TabsContent>
              <TabsContent value={"education"} className={"w-full"}>
                education
              </TabsContent>
              <TabsContent value={"skills"} className={"w-full"}>
                skills
              </TabsContent>
              <TabsContent value={"about"} className={"w-full"}>
                about
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
