"use client";
import Image from "next/image";
import flatLogo from "../assets/flatLogo.avif";
import menuBtn from "../assets/menu bar.svg";
import closeBtn from "../assets/ep_close-bold.svg";
import borderBottom from "../assets/Line 4.svg";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Nav() {
  const { clicked, setClicked } = useContext(UserContext);
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

  return (
    <>
      <div className="relative w-screen py-5 md:py-6 px-10 md:px-[16%] flex flex-row justify-between items-center overflow-auto">
        <Image src={flatLogo} alt="Soumik Das" />

        <div>
          <div className="flex-row justify-center items-center space-x-4 font-mono hidden md:flex">
            {routes.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`p-2 ${item.path == pathname && "text-secondary"}`}
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
            <button className="p-2">Contact</button>
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
          className="w-screen h-auto absolute bottom-0 right-0"
        />
      </div>
      {clicked && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setClicked(!clicked);
          }}
          className="overflow-clip w-screen h-screen backdrop-blur-md fade-in absolute top-0 right-0 z-50 flex justify-center items-start"
        >
          <div className="slide-in p-6 pl-10 pr-0 flex flex-col text-xl w-8/12 shadow-2xl shadow-main rounded-2xl mt-[30%] bg-black bg-opacity-80">
            {routes.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`hover:text-main border-b border-main p-4 ${item.path == pathname && "text-secondary"
                    } ${index == 0 && "pt-0"}`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
            <button className="p-4 pb-0 text-start">Contact</button>
          </div>
        </div>
      )}
    </>
  );
}
