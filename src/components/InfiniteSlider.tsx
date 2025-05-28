import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const columnLeftImages = ["/01.png", "/02.png"];
const columnRightImages = ["/03.png", "/04.png"];

export default function InfiniteSlider() {
  const firstBlockLeftRef = useRef<HTMLDivElement>(null);
  const [animationDistance, setAnimationDistance] = useState(0);

  useLayoutEffect(() => {
    if (firstBlockLeftRef.current) {
      const singleBlockHeight = firstBlockLeftRef.current.offsetHeight;
      if (singleBlockHeight > 0)
        setAnimationDistance(singleBlockHeight + 16);
    }
  }, []);

  return (
    <>
      {/* Slider horizontal */}
      <div className="md:hidden max-w-[min(100vw,40rem)] w-fit overflow-hidden relative">
        <div className="w-max">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {[...columnLeftImages, ...columnRightImages, ...columnLeftImages, ...columnRightImages].map((src, index) => (
              <img key={index} src={src} alt={`Slider image ${index}`} width={128} height={128} className="rounded-3xl w-40 h-auto p-2" loading={index < 4 ? "eager" : "lazy"} />
            ))}
          </motion.div>
          <div className="absolute inset-0 h-full w-[min(100%,100vw)] justify-between flex pointer-events-none">
            <div className="w-20 h-full bg-gradient-to-l to-white from-transparent" />
            <div className="w-20 h-full bg-gradient-to-r to-white from-transparent" />
          </div>
        </div>
      </div>

      {/* Slider vertical */}
      <div className="md:flex hidden max-h-[16rem] lg:max-h-[20rem] xl:max-h-[24rem] xl:min-w-96 overflow-hidden relative gap-4">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 h-20 w-full bg-gradient-to-t to-white from-transparent" />
          <div className="absolute bottom-0 h-20 w-full bg-gradient-to-b to-white from-transparent" />
        </div>

        <motion.div
          className="flex flex-col gap-4"
          animate={
            animationDistance > 0
              ? { y: ["0px", `-${animationDistance - 1}px`] }
              : { y: "0px" }
          }
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        >
          <div ref={firstBlockLeftRef} className="flex flex-col gap-4">
            {columnLeftImages.map((src, index) => (
              <img
                key={`up-block1-${index}`}
                src={src}
                alt={`Image Block 1 ${index}`}
                width={256}
                height={256}
                className="rounded-3xl p-2"
                loading={index < columnLeftImages.length ? "eager" : "lazy"}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {columnLeftImages.map((src, index) => (
              <img
                key={`up-block2-${index}`}
                src={src}
                alt={`Image Block 2 ${index}`}
                width={256}
                height={256}
                className="rounded-3xl p-2"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          animate={
            animationDistance > 0
              ? { y: [`-${animationDistance - 1}px`, "0px"] }
              : { y: "0px" }
          }
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        >
          <div className="flex flex-col gap-4">
            {columnRightImages.map((src, index) => (
              <img
                key={`down-block1-${index}`}
                src={src}
                alt={`Image Block 1 ${index}`}
                width={256}
                height={256}
                className="rounded-3xl p-2"
                loading={index < columnRightImages.length ? "eager" : "lazy"}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {columnRightImages.map((src, index) => (
              <img
                key={`down-block2-${index}`}
                src={src}
                alt={`Image Block 2 ${index}`}
                width={256}
                height={256}
                className="rounded-3xl p-2"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
