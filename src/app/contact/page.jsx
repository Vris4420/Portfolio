"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:'123456789', 
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:'dummy@gmail.com', 
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Address',
    description:'ABCD Dummy Address', 
  },
 
]
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                culpa ea delectus, 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>
            </form>
          </div>
          {/* info  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"></div>
        </div>
      </div>
    </motion.section>
  );
};


export default Contact;
