import { motion } from "framer-motion";
import InfiniteSlider from "./InfiniteSlider";
import Wave from "react-wavify";

export default function HeroSection() {
  return (
    <section className="size-full min-h-[calc(100vh-112px)] flex-1 flex flex-col justify-between items-center overflow-y-visible ">
      <div className="flex md:flex-row gap-8 flex-col w-full flex-1 px-4 items-center justify-center md:w-[48rem] lg:w-[56rem] xl:w-[68rem]">
        <div className="font-nanum italic w-[min(32rem,100%)] md:w-full text-6xl font-normal xl:text-7xl text-center align-top">
          {"Soluciones "}
          <span className="w-fit h-fit relative inline-block leading-none align-top">
            tecnol<span className="tilde">o</span>gicas
            <motion.span
              initial={{ scaleX: 0, left: "-53%" }}
              animate={{ scaleX: 1.06, left: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0, delay: 0.5 }}
              className="absolute -z-10 top-[calc(100%/6)] left-0 w-full h-2/3 bg-[#F2931F]/55 inline-block"
            ></motion.span>
          </span>
          {" y "}
          <span className="w-fit h-fit relative inline-block leading-none align-top">
            juridicas
            <motion.span
              initial={{ scaleX: 0, right: "-55%" }}
              animate={{ scaleX: 1.1, right: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0, delay: 0.5 }}
              className="absolute -z-10 top-[calc(100%/6)] right-0 w-full h-2/3 bg-[#007CD4]/55 inline-block"
            ></motion.span>
          </span>
          {" a un clic"}
        </div>
        <InfiniteSlider />
      </div>
      <div className="relative w-full z-10">
        <Wave
          className="bottom-0"
          fill="#F2931F"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 10,
            amplitude: 20,
            speed: 0.1,
            points: 3,
          }}
        />
        <Wave
          className="absolute -bottom-1"
          fill="#007CD4"
          paused={false}
          options={{
            height: 55,
            amplitude: 50,
            speed: 0.1,
            points: 3,
          }}
        />
      </div>
    </section>
  );
}
