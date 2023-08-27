"use client";
import Image from "next/image";
import flatLogo from "../assets/flatLogo.avif";
import menuBtn from "../assets/menu bar.avif";
import closeBtn from "../assets/ep_close-bold.avif";
import borderBottom from "../assets/Line 4.avif";
import { useContext, useState, useLayoutEffect } from "react";
import { UserContext } from "../store/UserContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav() {
  const { clicked, setClicked, showModal, setShowModal } =
    useContext(UserContext);
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  const [w1920, setW] = useState(false);

  useLayoutEffect(() => {
    setW(screen.availWidth == 1920 || screen.availHeight == 1440);
    console.log(screen.availWidth);
  }, []);

  return (
    <>
      <div
        className={`relative w-screen py-5 md:py-6 px-10 md:px-[16%] flex flex-row justify-between items-center overflow-auto ${
          w1920 && pathname !== "/projects" && "md:px-[20%]"
        }`}
      >
        <Image data-cursor-exclusion src={flatLogo} alt="Soumik Das" />

        <div>
          <div className="flex-row justify-center md:text-lg items-center space-x-4 font-mono hidden md:flex">
            {routes.map((item, index) => {
              return (
                <button
                  data-cursor-exclusion
                  key={index}
                  className={`p-2 hover:scale-90 ${
                    item.path == pathname && "text-secondary"
                  }`}
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
            <button
              data-cursor-exclusion
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(!showModal);
              }}
              className="p-2 hover:scale-90"
            >
              Contact
            </button>
          </div>
        </div>

        {!clicked ? (
          <Image
            onClick={() => setClicked(!clicked)}
            src={menuBtn}
            alt="Menu"
            className="md:hidden"
          />
        ) : (
          <Image
            onClick={() => setClicked(!clicked)}
            src={closeBtn}
            alt="Close Menu"
            className="md:hidden z-50"
          />
        )}
        <Image
          src={borderBottom}
          alt="border"
          className="w-screen h-1 absolute bottom-0 right-0"
        />
      </div>
      {clicked && (
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            setClicked(!clicked);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="overflow-clip w-screen h-screen backdrop-blur-md absolute top-0 right-0 z-50 flex justify-center items-start"
        >
          <div className="slide-in p-6 pl-10 pr-0 flex flex-col text-xl w-8/12 shadow-2xl shadow-main rounded-2xl mt-[30%] bg-black bg-opacity-80">
            {routes.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`hover:text-main border-b border-main p-4 ${
                    item.path == pathname && "text-secondary"
                  } ${index == 0 && "pt-0"}`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(!showModal);
                setClicked(!clicked);
              }}
              className="p-4 pb-0 text-start"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
