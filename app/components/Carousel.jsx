"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";
import { useLayoutEffect } from "react";

export default function Carousel({ images }) {
  const [midItem, setMidItem] = useState(Math.floor(images.length / 2));
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [w1920, setW] = useState(false);

  useLayoutEffect(() => {
    setW(screen.availWidth == 1920 || screen.availHeight == 1440);
    console.log(screen.availWidth);
  }, []);

  const goRight = () => {
    if (midItem <= images.length - 1) {
      if (midItem + 1 != images.length) {
        setMidItem(midItem + 1);
      } else {
        setMidItem(0);
      }
    }
  };

  const goLeft = () => {
    if (midItem >= 0) {
      if (midItem != 0) {
        setMidItem(midItem - 1);
      } else {
        setMidItem(images.length - 1);
      }
    }
  };

  return (
    <>
      <AiOutlineDoubleLeft
        onClick={goLeft}
        className="absolute text-2xl top-[37%] md:top-[43%] left-[5%] text-main"
      />
      <AiOutlineDoubleRight
        onClick={goRight}
        className="absolute text-2xl top-[37%] md:top-[43%] right-[5%] text-main"
      />
      {images.map((image, index) => {
        return (
          <motion.div
            key={index}
            initial={{
              scale: 0,
              rotation: -180,
            }}
            animate={{
              rotate: 0,
              left: `${
                width < 720
                  ? (index - midItem) * 80 + 25
                  : (index - midItem) * 30 + 40
              }vw`,
              scale:
                width < 720
                  ? index === midItem
                    ? 1.5
                    : 0.9
                  : index === midItem
                  ? 1.5
                  : 1,
            }}
            transition={{
              type: "spring",
              sriffness: 260,
            }}
            className="absolute w-[50%] md:w-[20%] space-y-4"
          >
            <Image
              onClick={() => {
                window.open(image.url, "_blank");
              }}
              src={image.img}
              alt="img"
              className={`w-full ${index === midItem ? "z-40" : "z-0 blur-sm"}`}
            />
            <div>
              <p className="font-bold text-sm">{image.title}</p>
              <p className="text-dim text-xs break-all">{image.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
