"use client";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animation from "../assets/contact/animation.json";
import line from "../assets/contact/smallArrow.avif";
import line2 from "../assets/contact/arrow.avif";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

export default function Contact() {
  const { showModal, setShowModal } = useContext(UserContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {showModal && (
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(!showModal);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute overflow-clip w-screen h-screen backdrop-blur-md top-0 right-0 z-50 flex justify-center items-start"
        >
          <div className="slide-in p-4 flex flex-col space-y-5 md:flex-row-reverse md:space-y-0 md:space-x-5 text-xl w-10/12 md:w-6/12 shadow-2xl shadow-main rounded-2xl mt-[30%] md:mt-[15%] md:p-10  md:h-6/12 bg-black bg-opacity-80 justify-center items-center">
            <Lottie options={defaultOptions} style={{width: '50%'}} className={"w-full md:w-6/12 md:justify-center md:items-center"} />
            <div className="text-center md:text-start space-y-2 md:w-6/12  md:flex md:flex-col md:justify-between md:items-start">
              <div className="font-black text-3xl md:text-4xl mb-6 flex flex-row space-x-2 justify-center items-center md:items-start md:justify-start">
                <p>Contact</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                  Me
                </p>
              </div>
              <p className="text-dim text-sm">Phone</p>
              <Link
                href={"tel:+91-98540-27242"}
                className="flex flex-row space-x-2 w-full md:mt-0 justify-center items-center font-medium text-base md:text-lg md:items-start md:justify-start"
              >
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                  +91
                </p>
                <p>9854027242</p>
              </Link>
              <p className="text-dim text-sm">Email</p>
              <Link
                className="font-medium text-base md:text-lg"
                href={"mailto:mail2soumikdas@gmail.com"}
              >
                mail2soumikdas@gmail.com
              </Link>
              <p className="text-dim text-sm">Linked-In</p>
              <Link
                className="w-full font-medium text-base md:text-lg"
                href={"https://www.linkedin.com/in/soumik-das-profile/"}
              >
                linkedin.com/in/soumik-das-profile
              </Link>
              <div className="flex flex-col justify-center items-center pt-3 md:pt-5 md:justify-start md:flex-row ">
                <p className="hidden md:block text-base">or</p>
                <Image src={line} alt="Line" className="md:hidden"/>
                <Image src={line2} alt='line2' className="hidden md:block mt-1"/>
                <div className="flex flex-row space-x-3 pt-3 pb-8 text-2xl md:p-0 md:pl-3">
                  <Link href={"https://twitter.com/Mr_Soumik_Das"}>
                    <AiFillInstagram />
                  </Link>
                  <Link href={"https://discord.gg/qkcm8qGP8b"}>
                    <AiFillTwitterCircle />
                  </Link>
                  <Link href={"https://www.instagram.com/itz.raaj.das/"}>
                    <FaDiscord />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
