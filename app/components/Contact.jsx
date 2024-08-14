/**
 * Contact component that displays contact information and a modal when showModal is true
 * @module Contact
 * @default
 */

"use client";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { motion } from "framer-motion";
import line from "../assets/contact/smallArrow.webp";
import orbit from "../assets/contact/orbit.webp";
import line2 from "../assets/contact/arrow.webp";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

/**
 * Contact component
 * @returns {JSX.Element} Contact component
 */
export default function Contact({ showModal, setShowModal }) {
  // Get showModal and setShowModal from UserContext
  const { offscreen, onscreen } = useContext(UserContext);

  // Render Contact component
  return (
    <>
      {/* Render modal if showModal is true */}
      {showModal && (
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(!showModal);
          }}
          initial={offscreen}
          animate={onscreen}
          className="absolute overflow-hidden w-full h-screen backdrop-blur-md top-0 right-0 z-50 flex justify-center items-start"
        >
          <div
            className={`p-4 flex flex-col space-y-5 md:flex-row-reverse md:space-y-0 md:space-x-5 text-xl w-10/12 lg:w-7/12 shadow-2xl shadow-main rounded-2xl mt-[10%] 
            md:mt-[15%] lg:mt-[10%] md:p-10  md:h-6/12 bg-black bg-opacity-80 justify-center items-center`}
          >
            <Image
              src={orbit}
              className={"w-10/12 md:w-6/12 md:justify-center md:items-center"}
            />
            <div className="text-center md:text-start space-y-2 md:w-1/2  md:flex md:flex-col md:justify-between md:items-start">
              {/* Render Contact title */}
              <div className="font-black text-3xl md:text-4xl lg:text-5xl mb-6 flex flex-row space-x-2 justify-center items-center md:items-start md:justify-start">
                <p>Contact</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                  Me
                </p>
              </div>
              {/* Render phone number */}
              <p className="text-dim text-sm lg:text-base">Phone</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("tel:+91-98540-27242", "_blank");
                }}
                className="flex flex-row space-x-2 lg:w-fit w-full md:mt-0 justify-center items-center font-medium text-base md:text-lg lg:text-xl lg:hover:text-2xl md:items-start md:justify-start hover:text-xl"
              >
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                  +91
                </p>
                <p>9854027242</p>
              </button>
              {/* Render email */}
              <p className="text-dim text-sm lg:text-base">Email</p>
              <button
                className="lg:w-fit font-medium text-base md:text-lg lg:text-xl lg:hover:text-2xl hover:text-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("mailto:mail2soumikdas@gmail.com", "_blank");
                }}
              >
                mail2soumikdas@gmail.com
              </button>
              {/* Render LinkedIn */}
              <p className="text-dim text-sm lg:text-base">Linked-In</p>
              <button
                className="lg:w-fit w-full font-medium text-base md:text-lg lg:text-xl lg:hover:text-2xl hover:text-xl text-start"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    "https://www.linkedin.com/in/soumik-das-profile/",
                    "_blank"
                  );
                }}
              >
                linkedin.com/in/soumik-das-profile
              </button>
              <div className="flex flex-col justify-center items-center pt-3 md:pt-5 md:justify-start md:flex-row ">
                {/* Render social media icons */}
                <p className="hidden md:block text-base lg:text-lg">or</p>
                <Image src={line} alt="Line" className="md:hidden" />
                <Image
                  src={line2}
                  alt="line2"
                  className="hidden md:block mt-1"
                />
                <div className="flex flex-row space-x-3 pt-3 pb-8 text-2xl lg:text-3xl md:p-0 md:pl-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "https://twitter.com/Mr_Soumik_Das",
                        "_blank"
                      );
                    }}
                  >
                    <AiFillInstagram className="hover:text-4xl lg:hover:text-5xl" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "https://www.instagram.com/itz.raaj.das/",
                        "_blank"
                      );
                    }}
                  >
                    <FaDiscord className="hover:text-4xl lg:hover:text-5xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
