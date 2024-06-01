import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left ">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Luke Coleman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I exel at craftinf elegant digital experiences and I am proficient
              in various programming languages and technologies
            </p>
            {/* Buttons and socials */}
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
