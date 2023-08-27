/**
 * FILEPATH: /mnt/sdb2/CODING/Projects/mrsoumikdas.com/app/projects/page.jsx
 * @module Projects
 */

"use client";
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
import Contact from "../components/Contact";
import Link from "next/link";
import { useState, useLayoutEffect, useContext } from "react";
import { UserContext } from "../store/UserContext";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { motion } from "framer-motion";
import PageTrasition from "../components/PageTrasition";
//Frameworks
import react from "../assets/projects/Rectangle 29.avif";
import motionImg from "../assets/projects/Rectangle 30.avif";
import rn from "../assets/projects/Rectangle 31.avif";
import expo from "../assets/projects/Rectangle 32.avif";
import next from "../assets/projects/Rectangle 44.avif";
//Tools
import tailwind from "../assets/projects/Rectangle 33.avif";
import git from "../assets/projects/Rectangle 34.avif";
import firebase from "../assets/projects/Rectangle 35.avif";
import ad from "../assets/projects/Rectangle 36.avif";
import seo from "../assets/projects/Rectangle 37.avif";
import docker from "../assets/projects/Rectangle 38.avif";
import vercel from "../assets/projects/Rectangle 39.avif";
import linux from "../assets/projects/Rectangle 40.avif";
//Languages
import js from "../assets/projects/Rectangle 41.avif";
import c from "../assets/projects/Rectangle 43.avif";
import asm from "../assets/projects/Rectangle 45.avif";
import Image from "next/image";
//projects
import keeper from "../assets/projects/Group 17.avif";
import covid from "../assets/projects/Rectangle 22.avif";
import oiram from "../assets/projects/Group 18.avif";
import apply from "../assets/projects/Group 13.avif";
import likely from "../assets/projects/Group 14.avif";
import gpt from "../assets/projects/Rectangle 26.avif";
import tri from "../assets/projects/Rectangle 27.avif";
import calc from "../assets/projects/Rectangle 28.avif";
//coming soon img
import soon from "../assets/projects/Group 16.avif";
import dynamic from "next/dynamic";

/**
 * Projects component
 * @returns {JSX.Element} Projects component
 */
const Projects = () => {
  // this state is used to determine the width of the screen to apply responsive design to very specific screen sizes
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // this function is used to set the width of the screen
    setWidth(window.innerWidth);
  }, []);

  /**
   * JSON-LD schema for breadcrumb list
   * @type {Object}
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://mrsoumikdas.com/",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://mrsoumikdas.com/projects",
          name: "Projects",
        },
      },
    ],
  };

  /**
   * Object containing skills and their corresponding images
   * @type {Object}
   */
  const skills = {
    Frameworks: [react, motionImg, rn, expo, next],
    Tools: [tailwind, git, firebase, ad, seo, docker, vercel, linux],
    Languages: [js, c, asm],
  };

  /**
   * Array of project objects
   * @type {Array}
   */
  const projects = [
    // this object contains the details of all the projects
    {
      img: keeper,
      title: "Keeper-App",
      desc: "a quick notes-keeping app with cloud save feature made with 	React & Firebase",
      repo: "https://github.com/FalconEthics/keeper-app",
      url: "https://the-keeper-app-fe.web.app/",
    },
    {
      img: covid,
      title: "COVID-UN",
      desc: "a one-stop solution for all covid-19 stats & updates made with React Native",
      repo: "https://github.com/FalconEthics/COVID-UN",
      url: "https://github.com/FalconEthics/COVID-UN/releases/tag/v-1.0.0",
    },
    {
      img: oiram,
      title: "Oiram",
      desc: "a browser-based survival game inspired by Mario that runs with the help of p5.js",
      repo: "https://github.com/FalconEthics/OIRAM",
      url: "https://oiram-falconethics.vercel.app/",
    },
    {
      img: apply,
      title: "Appy3D",
      desc: "a 3D website that features stunning animations that activate as the user scrolls!",
      repo: "https://github.com/FalconEthics/Appy3d",
      url: "https://appy3d-ooesozt5u-falconethics.vercel.app/",
    },
    {
      img: likely,
      title: "Likey",
      desc: "A social media platform frontend inspired from Twitter and Insta made with Vue.js",
      repo: "https://github.com/FalconEthics/Likey",
      url: "https://likey-falconethics.vercel.app/",
    },
    {
      img: gpt,
      title: "Mr. GPT",
      desc: "a Discord bot that uses OpenAI's GPT 3 learning model to generate text responses.",
      repo: "https://github.com/FalconEthics/Mr-GPT",
    },
    {
      img: tri,
      title: "Trinetro",
      desc: "a single RPAS/Drone that can be used on Air, Water and Land for various purposes.",
      repo: "https://github.com/FalconEthics/Trinetro-Drone",
    },
    {
      img: calc,
      title: "CalcAsm",
      desc: "a simple calculator that can perform basic arithmetic operations written in intel - 8086 Assembly Language",
      repo: "https://github.com/FalconEthics/CALCASM",
    },
  ];

  // import the animation objects from the UserContext
  const { slideIn, slideOut, slide, scaleIn, scaleOut, fadeIn, fadeOut } =
    useContext(UserContext);

  return (
    <PageTrasition>
      {/* incerts the custom cursor from react-creative-cursor */}
      <div className="flex min-h-screen flex-col items-center w-full overflow-x-clip overflow-y-auto">
        {/* Incerts the contact modal */}
        <Contact />
        {/* Tools Section  */}
        <div className="relative flex flex-col space-y-[8%] md:space-y-0 pt-[8%] md:justify-between md:items-center md:py-0 w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center md:pt-[3%]">
            Preferred Tech Stacks
          </h1>
          {/* Tech Stack section for mobile */}
          <div className="flex flex-row md:flex-col w-full justify-between md:items-start px-10 md:px-[16%] md:hidden">
            <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-start space-y-4 items-center w-1/3 md:w-full">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r md:text-xl from-main via-secondary to-white text-center md:pr-4">
                Frameworks
              </h2>
              <div className="flex flex-col md:flex-row justify-start  items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                {skills.Frameworks.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      placeholder="blur"
                      quality={100}
                      key={index}
                      className="w-[60%] md:w-[8%]"
                      alt="Frameworks i know"
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-start space-y-4 items-center w-1/3 md:w-full">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r md:text-xl from-main via-secondary to-white text-center md:pr-4">
                Tools
              </h2>
              <div className="flex flex-col md:flex-row justify-start  items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                {skills.Tools.map((item, index) => {
                  return (
                    index < 5 && (
                      <Image
                        src={item}
                        key={index}
                        placeholder="blur"
                        quality={100}
                        className="w-[60%] md:w-[8%]"
                        alt="Frameworks i know"
                      />
                    )
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-start space-y-4 items-center w-1/3 md:w-full">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r md:text-xl from-main via-secondary to-white text-center md:pr-4">
                Languages
              </h2>
              <div className="flex flex-col md:flex-row justify-start pl-[1%] items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                {skills.Languages.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      key={index}
                      placeholder="blur"
                      quality={100}
                      className="w-[60%]"
                      alt="Languages i know"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Tech Stack section for desktop */}
          <motion.div
            initial={slideIn}
            whileInView={slideOut}
            className="hidden md:flex flex-row h-full justify-start items-center w-full px-[16%] md:py-[3%]"
          >
            <div className="h-full flex flex-col justify-between items-start space-y-14">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r md:text-xl from-main via-secondary to-white text-center md:pr-4">
                Frameworks
              </h2>
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r md:text-xl from-main via-secondary to-white text-center md:pr-4">
                Tools
              </h2>
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r md:text-xl from-main via-secondary to-white text-center md:pr-4">
                Languages
              </h2>
            </div>
            <div className="flex flex-col justify-center space-y-4 items-center">
              <div className="flex flex-col md:flex-row justify-start pl-[1%] items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
                {skills.Frameworks.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      key={index}
                      placeholder="blur"
                      quality={100}
                      className="w-[60%] md:w-[8%]"
                      alt="Frameworks i know"
                    />
                  );
                })}
              </div>
              <div className="flex flex-col md:flex-row justify-start pl-[1%] items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
                {skills.Tools.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      key={index}
                      className="w-[60%] md:w-[8%]"
                      placeholder="blur"
                      quality={100}
                      alt="Tools i know"
                    />
                  );
                })}
              </div>
              <div className="flex flex-col md:flex-row justify-start pl-[1%] items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
                {skills.Languages.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      key={index}
                      placeholder="blur"
                      quality={100}
                      className="w-[60%] md:w-[8%]"
                      alt="Languages i know"
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
          {/* Projects showcase section  */}
          <div className="text-center px-10 md:px-[16%]">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
              My Projects
            </h2>
            <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
              _
            </p>
          </div>
          <div className="w-full flex flex-col md:pt-[3%] ">
            {projects.map((item, index) => {
              return (
                <div
                  className={`flex flex-col w-full  ${
                    index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    initial={index % 2 ? slide : slideIn}
                    whileInView={slideOut}
                    viewport={{ once: true }}
                    className={`md:w-1/2`}
                  >
                    <Image
                      src={item.img}
                      placeholder="blur"
                      quality={100}
                      key={index}
                      alt="my projects"
                      className={`w-full`}
                    />
                  </motion.div>
                  <div
                    className={`flex flex-col px-10 ${
                      index % 2 == 0 ? "md:pr-[16%]" : "md:pl-[16%]"
                    } py-[8%] md:justify-between space-y-2 md:w-1/2 ${
                      index == projects.length - 1 && ""
                    }`}
                  >
                    <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main from-0% via-secondary via-10% to-white to-70% text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="md:text-xl">{item.desc}</p>
                    <motion.div
                      initial={slideIn}
                      whileInView={slideOut}
                      className="flex flex-row items-center justify-start space-x-4"
                    >
                      <Link
                        passHref
                        href={item.repo}
                        className={
                          item.url
                            ? "bg-black w-fit flex hover:scale-90 flex-row justify-center items-center space-x-1 border border-white p-2 px-4 font-bold rounded-lg"
                            : "w-fit flex flex-row hover:scale-90 justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
                        }
                      >
                        <AiFillGithub />
                        <p
                          className={
                            item.url
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white"
                              : "text-white"
                          }
                        >
                          REPOSITORY
                        </p>
                      </Link>
                      {item.url && (
                        <Link
                          passHref
                          href={item.url}
                          className="w-fit flex flex-row hover:scale-90 justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
                        >
                          <p className="text-white">
                            {item.img == keeper || item.img == likely
                              ? "OPEN WEB-APP"
                              : item.img == covid
                              ? "DOWNLOAD APK"
                              : item.img == oiram
                              ? "PLAY GAME!"
                              : item.img == apply
                              ? "OPEN WEBSITE"
                              : ""}
                          </p>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Coming soon section */}
          <div className="flex flex-col justify-center items-center px-10 md:px-[16%] pb-[5%] space-y-6 bg-dark w-full">
            <motion.div
              initial={fadeIn}
              whileInView={fadeOut}
              className="w-[80%] md:w-[50%]"
            >
              <Image
                placeholder="blur"
                quality={100}
                src={soon}
                alt="soon"
                className="w-full"
              />
            </motion.div>
            <h2 className="text-sm md:text-base md:w-[75%] text-dim text-center">
              I am still working on some of the projects and I don't want to
              present any unfinished works here. So, as soon as I complete them
              I will be adding them here 👍 ~ till then you can check out my
              GitHub profile for all the latest repos:
            </h2>
            <Link
              passHref
              href={"https://github.com/FalconEthics"}
              className="text-sm hover:scale-90 shadow-lg md:text-base w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
            >
              <FaGithubAlt />
              <p>Know more</p>
            </Link>
          </div>
        </div>
        <Footer />
      </div>

      {/* schema for bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageTrasition>
  );
};

export default Projects;
