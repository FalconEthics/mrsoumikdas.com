/**
 * Navigation component for the website.
 * @module Nav
 * @default
 */

"use client";
import Image from "next/image";
import flatLogo from "../assets/flatLogo.webp";
import menuBtn from "../assets/menu bar.webp";
import borderBottom from "../assets/Line 4.webp";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

/**
 * @typedef {Object} Route
 * @property {string} name - The name of the route.
 * @property {string} path - The path of the route.
 */

/**
 * The navigation component.
 * @returns {JSX.Element} The navigation component.
 */
export default function Nav() {
  // Get the clicked state and setClicked function from the UserContext.
  const { clicked, setClicked, showModal, setShowModal } =
    useContext(UserContext);

  // Get the current pathname and router from Next.js.
  const pathname = usePathname();
  const router = useRouter();

  // Define the routes for the navigation.
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
    <div className="lg:flex lg:flex-col lg:items-center w-full relative">
      {/* The navigation bar */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`relative w-full lg:w-[1150px] py-5 md:py-6 px-10  flex flex-row justify-between items-center overflow-x-hidden overflow-y-auto`}
      >
        {/* The website logo */}
        <Image src={flatLogo} alt="Soumik Das" />

        <div>
          {/* The navigation links */}
          <div className="flex-row justify-center md:text-lg items-center space-x-4 font-mono hidden md:flex">
            {routes.map((item, index) => {
              return (
                <button
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
            {/* The contact button */}
            <button
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

        {/* The menu button */}
        <Image
          onClick={() => setClicked(!clicked)}
          src={menuBtn}
          alt="Menu"
          className="md:hidden"
        />
        {/* The bottom border */}
      </div>
      <Image
        src={borderBottom}
        alt="border"
        className="w-full lg:w-screen h-1 absolute bottom-0 right-0"
      />

      {/* The mobile menu */}
      {clicked && (
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            setClicked(!clicked);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="overflow-x-hidden w-full h-screen backdrop-blur-md absolute top-0 right-0 z-50 flex justify-center items-start"
        >
          <div className="slide-in p-6 pl-10 pr-0 flex flex-col text-xl w-8/12 shadow-2xl shadow-main rounded-2xl mt-[30%] bg-black bg-opacity-80">
            {/* The mobile navigation links */}
            {routes.map((item, index) => {
              return (
                <Link
                  passHref
                  rel="noopener noreferrer"
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
            {/* The mobile contact button */}
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
    </div>
  );
}
