/**
 * This module exports a React component that renders the home page of the website.
 * @module
 */

"use client";
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
import Contact from "./components/Contact";
import Image from "next/image";
import Link from "next/link";
const Carousel = dynamic(() => import("./components/Carousel"));
import { motion } from "framer-motion";
import PageTrasition from "./components/PageTrasition";

// importing images
import Banner from "./assets/home/banner.avif";
import Rect from "./assets/home/rect.avif";
import Line from "./assets/home/line.avif";
import Skills from "./assets/home/Skills.avif";
import Bg from "./assets/home/bg.avif";
import About from "./assets/home/about.avif";
import { BiShowAlt } from "@react-icons/all-files/bi/BiShowAlt";
import { FaAngleDoubleRight } from "@react-icons/all-files/fa/FaAngleDoubleRight";
import { AiOutlineContacts } from "@react-icons/all-files/ai/AiOutlineContacts";

// for slides
import p2 from "./assets/home/p2.avif";
import p1 from "./assets/home/p1.avif";
import p5 from "./assets/home/p5.avif";
import p4 from "./assets/home/p4.avif";
import p3 from "./assets/home/p3.avif";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "./store/UserContext";
import dynamic from "next/dynamic";

/**
 * A React component that renders the home page of the website.
 * @returns {JSX.Element} The JSX code for the home page.
 */
export default function Home() {
  // Get the context from the UserContext provider.
  const {
    showModal,
    setShowModal,
    slideIn,
    slideOut,
    scaleIn,
    scaleOut,
    offscreen,
    onscreen,
    slideTilt,
    slideTiltOut,
  } = useContext(UserContext);

  // schema for google bots
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Soumik Das",
    url: "https://mrsoumikdas.com/",
    image: "https://mrsoumikdas.com/assets/logo.avif",
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Tripsy Games",
    },
    sameAs: [
      "https://www.linkedin.com/in/soumik-das-profile/",
      "https://github.com/falconethics",
      "https://twitter.com/mr-soumik-das",
    ],
    description:
      "I am a passionate web developer with expertise in building user-friendly and creative websites. Explore my portfolio to see my latest projects.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Santinagar, w/no. 3",
      addressLocality: "Kokrajhar",
      postalCode: "783370",
      addressCountry: "Soumik Das",
    },
    email: "mail2soumikdas@gmail.com",
    telephone: "+91-9854027242",
    studentOf: {
      "@type": "University",
      name: "University of London",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mrsoumikdas.com/",
    },
  };

  // Define an array of slides for the carousel.
  const slides = [
    {
      img: p1,
      title: "LIKEY",
      desc: "A social media platform frontend inspired from Twitter and Insta made with Vue.js",
      url: "https://likey-falconethics.vercel.app/",
    },
    {
      img: p2,
      title: "Appy3D",
      desc: "a 3D website that features stunning animations that activate as the userscrolls",
      url: "https://appy3d-ooesozt5u-falconethics.vercel.app/",
    },
    {
      img: p3,
      title: "KEEPER-APP",
      desc: "a quick notes-keeping app with cloud save feature made with React & Firebase",
      url: "https://the-keeper-app-fe.web.app/",
    },
    {
      img: p4,
      title: "COVID-UN",
      desc: "a one-stop solution for all covid-19 stats & updates made with React Native",
      url: "https://github.com/FalconEthics/COVID-UN",
    },
    {
      img: p5,
      title: "OIRAM",
      desc: "a browser-based survival game inspired by Mario that runs with thehelp of p5.js",
      url: "https://oiram-falconethics.vercel.app/",
    },
  ];

  // State variable to keep track of screen width.
  const [w1920, setW] = useState(false);

  // Use layout effect to set the state variable when the component mounts.
  useEffect(() => {
    setW(screen.availWidth == 1920 || screen.availHeight == 1440);
    // console.log(window.innerWidth);
  }, []);

  // Return the JSX code for the home page.
  return (
    <PageTrasition>
      {/* Imports the cursor component from the react-creative-cursor package. */}
      <main
        className={`flex min-h-screen flex-col items-center overflow-x-clip overflow-y-auto`}
      >
        {/* Imports the contact modal*/}
        <Contact />
        <div>
          {/* Hero section */}
          <div
            className={`relative flex flex-col md:flex-row-reverse space-y-[8%] py-[8%] md:justify-between md:items-center md:space-y-[0%] md:py-[4%] px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            }`}
          >
            <div className="relative w-full md:w-1/2">
              <motion.div
                initial={slideIn}
                whileInView={slideOut}
                className="relative z-10 w-full h-full md:h-auto drop-shadow-lg"
              >
                <Image
                  src={Banner}
                  className="w-full h-full"
                  alt="Soumik Das"
                  quality={100}
                  priority
                />
              </motion.div>
              <motion.div
                initial={slideTilt}
                whileInView={slideTiltOut}
                className="absolute inset-0 w-full  h-full md:h-auto"
              >
                <Image className="w-full h-full" src={Rect} alt="BG" priority />
              </motion.div>
            </div>
            <div className="flex flex-col w-full space-y-2 h-fit">
              <div className="flex flex-row space-x-2">
                <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">
                  Hey
                </p>
                <p className="text-4xl md:text-6xl font-bold">It's</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Soumik Das here
              </h1>
              <h2 className="md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                Welcome to my part of the internet!
              </h2>
            </div>
            <Image
              src={Line}
              alt="sectiond divider"
              className={`z-10 absolute bottom-[-0.3%] right-[35%]  md:right-[45%] ${
                w1920 && "md:right-[46.5%]"
              }`}
            />
          </div>
          {/* Skills section */}
          <div
            className={`relative flex flex-col md:flex-row-reverse space-y-[8%] py-[8%]  md:py-[4%] bg-dark px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } md:space-y-0 md:justify-between md:items-center`}
          >
            <motion.div
              initial={scaleIn}
              whileInView={scaleOut}
              className="w-full md:w-[40%] scale-in"
            >
              <Image
                src={Skills}
                quality={100}
                priority
                alt="sills"
                className="w-full"
              />
            </motion.div>
            <div className="break-words md:w-1/2 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold inline pr-2">
                I'm a Front-end Developer, based in
              </h2>
              <p className="text-2xl md:text-3xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">
                INDIA
              </p>
              <p className="pt-2 break-all text-dim md:text-lg ">
                I love to get beautiful and interactive designs get into life,
                with proficiency in front end frameworks and tools like:
                React/React Native, Next.js, Tailwind Css, Framer Motion and
                etc. I am very passionate about what i do and so have keen
                interest in learning new and trending technologies, be that a
                framework or a tool!
              </p>
            </div>
            <Image
              src={Line}
              alt="sectiond divider"
              className={`z-10 absolute bottom-[-0.3%] right-[35%]  md:right-[45%] ${
                w1920 && "md:right-[46.5%]"
              }`}
            />
          </div>
          {/* My Projects Section */}
          <div
            className={`z-10 w-full h-[65vh] md:h-[70vh] relative overflow-hidden flex flex-col justify-center items-center ${
              w1920 && "md:h-[75vh]"
            }`}
          >
            <div className="text-center absolute top-[8%]">
              <h2 className="text-3xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                My Projects
              </h2>
              <p className="text-3xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">
                _
              </p>
            </div>
            <Image
              placeholder="blur"
              quality={100}
              src={Bg}
              alt="bg"
              className="z-0 absolute top-0 right-[+20%] scale-50 md:left-[10%] md:scale-75"
            />
            {/* imports the carousel component from the components folder. */}
            <Carousel images={slides} />
            <Link
              passHref
              rel="noopener noreferrer"
              href={"/projects"}
              className="absolute hover:scale-90 bottom-[8%] w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
            >
              <BiShowAlt />
              <p>show more</p>
            </Link>
            <Image
              src={Line}
              alt="sectiond divider"
              className={`z-10 absolute bottom-[-0.3%] md:bottom-0 right-[35%] md:right-[45%] ${
                w1920 && "md:right-[46.5%]"
              }`}
            />
          </div>
          {/* About Section */}
          <div
            className={`relative md:w-full flex flex-col md:flex-row space-y-[8%] py-[8%] md:py-[2%] bg-dark px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } md:space-y-0 md:justify-between md:items-center`}
          >
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              className="md:w-[45%]"
            >
              <Image
                src={About}
                placeholder="blur"
                quality={100}
                alt="sills"
                className="w-full"
              />
            </motion.div>
            <motion.div
              initial={slideIn}
              whileInView={slideOut}
              className="flex flex-col space-y-4"
            >
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h2
                  className={` text-2xl md:text-4xl font-bold ${
                    w1920 && "md:text-5xl"
                  }`}
                >
                  Wanna know more about
                </h2>
                <p className="text-2xl md:text-4xl break-all font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                  me and my work?
                </p>
              </div>
              <div className="flex flex-row  justify-center items-center space-x-4 md:justify-start md:space-x-6">
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
                    });
                    setShowModal(true);
                  }}
                  className="bg-black hover:scale-90 w-fit flex flex-row justify-center items-center space-x-1 border border-white p-2 px-4 font-bold rounded-lg"
                >
                  <AiOutlineContacts className="text-main" />
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                    Contact
                  </p>
                </button>
                <Link
                  passHref
                  rel="noopener noreferrer"
                  href={"/about"}
                  className="w-fit flex hover:scale-90 flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
                >
                  <FaAngleDoubleRight />
                  <p>Know more</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>

      {/* schema for bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageTrasition>
  );
}
