"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 5,
    text: "Projects completed",
  },
  {
    num: 7,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Recently code commits",
  },
];

function Stats() {
  return (
    <section className={"pd-12 x xl:pd-0 pt-4 xl:pt-0"}>
      <div className={"container mx-auto"}>
        <div
          className={"mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none"}
        >
          {stats.map((item) => {
            return (
              <div
                key={item.text}
                className={
                  "flex flex-1 items-center justify-center gap-4 xl:justify-start"
                }
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1.5}
                  className={"text-4xl font-extrabold xl:text-6xl"}
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
