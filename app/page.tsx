import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className={"h-full"}>
      <div className="container mx-auto h-full">
        <div
          className={
            "flex flex-col items-center justify-between xl:flex-row xl:pb-16 xl:pt-8"
          }
        >
          <div className={"order-2 text-center xl:order-none xl:text-left"}>
            <span className={"text-xl text-white/60"}>
              花有重开日,人无再少年
            </span>
            <h1 className={"h1"}>
              Hello I&apos;m <br />{" "}
              <span className={"text-accent"}>吴 轶琛</span>
            </h1>
            <p className={"mb-9 max-w-[500px] text-white/80"}>
              没有太多明显的有点（不爱自夸），但主打的听劝 <br />
              英雄联盟手游大乱斗爱好者 <br />
              工作是一名前端开发，熟悉前端各类主流编程技术（不主流也学） <br />
              愿景是做一名全栈开发 <br />
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
      <div className={"pb-4 text-center text-white/50"}>
        工作座右铭: 计算机的世界没有黑魔法，所有的东西只是我现在不知道而已
      </div>
      <Stats />
    </section>
  );
}
