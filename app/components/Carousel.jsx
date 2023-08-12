"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";

export default function Carousel({ images }) {
  const [midItem, setMidItem] = useState(Math.floor(images.length / 2));

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
        className="absolute text-2xl top-[37%] left-[5%] text-main"
      />
      <AiOutlineDoubleRight
        onClick={goRight}
        className="absolute text-2xl top-[37%] right-[5%] text-main"
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
              left: `${(index - midItem) * 80 + 25}vw`,
              scale: index === midItem ? 1.5 : 0.9,
            }}
            transition={{
              type: "spring",
              sriffness: 260,
            }}
            className="absolute w-[50%] space-y-4"
          >
            <Image
              onClick={() => {
                window.open(image.url, "_blank");
              }}
              src={image.img}
              alt="img"
              className={`w-full ${index === midItem ? "z-40" : "z-0"}`}
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
