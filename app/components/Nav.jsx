/**
 * Navigation component for the website.
 * @module Nav
 * @default
 */

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

  // State to check if the screen width is 1920.
  const [w1920, setW] = useState(false);

  // Check if the screen width is 1920 on mount.
  useLayoutEffect(() => {
    setW(screen.availWidth == 1920 || screen.availHeight == 1440);
    // console.log(screen.availWidth);
  }, []);

  return (
    <>
      {/* The navigation bar */}
      <div
        className={`relative w-screen py-5 md:py-6 px-10 md:px-[16%] flex flex-row justify-between items-center overflow-auto ${
          w1920 && pathname !== "/projects" && "md:px-[20%]"
        }`}
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
                setShowModal(true);
              }}
              className="p-2 hover:scale-90"
            >
              Contact
            </button>
          </div>
        </div>

        {/* The menu button */}
        {!clicked ? (
          <Image
            onClick={() => setClicked(!clicked)}
            src={menuBtn}
            alt="Menu"
            className="md:hidden"
          />
        ) : (
          // The close button
          <Image
            onClick={() => setClicked(!clicked)}
            src={closeBtn}
            alt="Close Menu"
            className="md:hidden z-50"
          />
        )}
        {/* The bottom border */}
        <Image
          src={borderBottom}
          alt="border"
          className="w-screen h-1 absolute bottom-0 right-0"
        />
      </div>

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
          className="overflow-clip w-screen h-screen backdrop-blur-md absolute top-0 right-0 z-50 flex justify-center items-start"
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
    </>
  );
}
