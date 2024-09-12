import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Metadata } from "next";





export default function Home() {
  return (
    <section className={"h-full"}>
      <div className="container mx-auto h-full">
        <div
          className={
            "flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8"
          }
        >
          <div className={"order-2 text-center xl:order-none xl:text-left"}>
            <span className={"text-xl"}>Software Developer</span>
            <h1 className={"h1"}>
              Hello I&apos;m <br />{" "}
              <span className={"text-accent"}>Wu Yichen</span>
            </h1>
            <p className={"mb-9 max-w-[500px] text-white/80"}>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            <div className={"flex flex-col items-center gap-8 xl:flex-row"}>
              <Button
                variant="outline"
                size="lg"
                className={"flex items-center gap-2 uppercase"}
              >
                <span>Download CV</span>
                <FiDownload className={"text-xl"}></FiDownload>
              </Button>
              <div className={"mb-8 xl:mb-0"}>
                <Social
                  containerClass={"flex gap-6"}
                  iconClass={
                    "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
