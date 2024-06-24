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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Em sapiente voluptates repellendus, commodi sint ratione. Odio, et!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke",
    },
    {
      fieldName: "Phone",
      fieldValue: "012345678",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "id",
    },
    {
      fieldName: "Email",
      fieldValue: "id",
    },
    {
      fieldName: "X",
      fieldValue: "id",
    },
    {
      fieldName: "Languages",
      fieldValue: "English and Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Em sapiente voluptates repellendus, commodi sint ratione. Odio, et!",
  items: [
    {
      company: "Tech1",
      position: "dev",
      duration: "2022-fulltime",
    },
    {
      company: "Tech2",
      position: "dev",
      duration: "2022-fulltime",
    },
    {
      company: "Tech3",
      position: "dev",
      duration: "2022-fulltime",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Em sapiente voluptates repellendus, commodi sint ratione. Odio, et!",
  items: [
    {
      institution: "Inst1",
      degree: "dev",
      duration: "2022-fulltime",
    },
    {
      institution: "Inst2",
      degree: "dev",
      duration: "2022-fulltime",
    },
    {
      institution: "Inst3",
      degree: "dev",
      duration: "2022-fulltime",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Em sapiente voluptates repellendus, commodi sint ratione. Odio, et!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" border border-sky-500 min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className=" border border-red-500 container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full ">
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
