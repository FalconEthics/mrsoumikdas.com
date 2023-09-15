/**
 * FILEPATH: /mnt/sdb2/CODING/Projects/mrsoumikdas.com/app/projects/page.jsx
 * @module Projects
 */

"use client";
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
import Contact from "../components/Contact";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { motion } from "framer-motion";
import PageTrasition from "../components/PageTrasition";
import { isMobile } from "react-device-detect";
//Frameworks
import react from "../assets/projects/Rectangle 29.webp";
import motionImg from "../assets/projects/Rectangle 30.webp";
import rn from "../assets/projects/Rectangle 31.webp";
import expo from "../assets/projects/Rectangle 32.webp";
import next from "../assets/projects/Rectangle 44.webp";
//Tools
import tailwind from "../assets/projects/Rectangle 33.webp";
import git from "../assets/projects/Rectangle 34.webp";
import firebase from "../assets/projects/Rectangle 35.webp";
import ad from "../assets/projects/Rectangle 36.webp";
import seo from "../assets/projects/Rectangle 37.webp";
import docker from "../assets/projects/Rectangle 38.webp";
import vercel from "../assets/projects/Rectangle 39.webp";
import linux from "../assets/projects/Rectangle 40.webp";
//Languages
import js from "../assets/projects/Rectangle 41.webp";
import c from "../assets/projects/Rectangle 43.webp";
import asm from "../assets/projects/Rectangle 45.webp";
import Image from "next/image";
//projects
import keeper from "../assets/projects/Group 17.webp";
import covid from "../assets/projects/Rectangle 22.webp";
import oiram from "../assets/projects/Group 18.webp";
import apply from "../assets/projects/Group 13.webp";
import likely from "../assets/projects/Group 14.webp";
import gpt from "../assets/projects/Rectangle 26.webp";
import tri from "../assets/projects/Rectangle 27.webp";
import calc from "../assets/projects/Rectangle 28.webp";
import edia from "../assets/projects/edia.webp";
//coming soon img
import soon from "../assets/projects/Group 16.webp";
import dynamic from "next/dynamic";

/**
 * Projects component
 * @returns {JSX.Element} Projects component
 */
const Projects = (ref) => {
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
   * @type {Array<Object>}
   */
  const projects = [
    // this object contains the details of all the projects
    {
      img: keeper,
      title: "Keeper-App",
      desc: "it's a quick notes keeping application that provides a convenient way to create and organize quick notes with cloud save features made with React & Firebase",
      repo: "https://github.com/FalconEthics/keeper-app",
      url: "https://the-keeper-app-fe.web.app/",
    },
    {
      img: covid,
      title: "CO-UN",
      desc: "Covid Updates & News provides users with up-to-date pandemic info. Users can view current stats & News for countries around the world - made with React Native",
      repo: "https://github.com/FalconEthics/COVID-UN",
      url: "https://github.com/FalconEthics/COVID-UN/releases/tag/v-1.0.0",
    },
    {
      img: oiram,
      title: "Oiram",
      desc: "Welcome to OIRAM, the game that's not a Mario clone xD! a browser-based wacky adventurous survival game that runs with the help of p5.js",
      repo: "https://github.com/FalconEthics/OIRAM",
      url: "https://oiram-falconethics.vercel.app/",
    },
    {
      img: apply,
      title: "Appy3D",
      desc: "a 3D website that features stunning animations that activate as the user scrolls! I designed this for one of my favourite new startups, @Nothing phones",
      repo: "https://github.com/FalconEthics/Appy3d",
      url: "https://appy3d-ooesozt5u-falconethics.vercel.app/",
    },
    {
      img: likely,
      title: "Likey",
      desc: "a functional social media platform frontend inspired from Twitter and Insta populated with JsonPlaceHolder mock data, made with Vue.js",
      repo: "https://github.com/FalconEthics/Likey",
      url: "https://likey-falconethics.vercel.app/",
    },
    {
      img: gpt,
      title: "Mr. GPT",
      desc: "a Discord bot that uses OpenAI's GPT 3 learning model to generate text responses. made with node.js, discord api and openai's gpt 3 api",
      repo: "https://github.com/FalconEthics/Mr-GPT",
    },
    {
      img: edia,
      title: "E-DIA",
      desc: "Enhanced Duplicate Image Analyzer is a command-line application written in C that helps you efficiently find and delete duplicate images in a directory",
      repo: "https://github.com/FalconEthics/E-DIA",
    },
    {
      img: tri,
      title: "Trinetro",
      desc: "a single RPAS/Drone that can be used operate on Air, Water and Land that can be utilized for various purposes like surveillance, delivery and etc.",
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
  const { showModal, setShowModal, slideIn, slideOut, slide, fadeIn, fadeOut } =
    useContext(UserContext);

  return (
    <PageTrasition ref={ref}>
      {/* incerts the custom cursor from react-creative-cursor */}
      <div className="flex min-h-screen flex-col items-center w-full overflow-x-hidden overflow-y-auto">
        {/* Incerts the contact modal */}
        <Contact showModal={showModal} setShowModal={setShowModal} />
        {/* Tools Section  */}
        <div className="relative flex flex-col space-y-[8%] md:space-y-0 pt-[8%] md:justify-between md:items-center md:py-0 w-full">
          <h1 className="lg:w-[1150px]  text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center md:pt-[3%]">
            Preferred Tech Stacks
          </h1>
          {/* Tech Stack section for mobile */}
          <div className=" flex flex-row w-full justify-between px-10 md:hidden">
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3 ">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center ">
                Frameworks
              </h2>
              <div className="flex flex-col justify-start  items-center space-y-4 w-full">
                {skills.Frameworks.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      placeholder="blur"
                      quality={100}
                      key={index}
                      className="w-16"
                      alt="Frameworks i know"
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3 ">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center ">
                Tools
              </h2>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {skills.Tools.map((item, index) => {
                  return (
                    index < 5 && (
                      <Image
                        src={item}
                        key={index}
                        placeholder="blur"
                        quality={100}
                        className="w-16"
                        alt="Frameworks i know"
                      />
                    )
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center md:pr-4">
                Languages
              </h2>
              <div className="flex flex-col justify-start pl-[1%] items-center space-y-4 w-full">
                {skills.Languages.map((item, index) => {
                  return (
                    <Image
                      src={item}
                      key={index}
                      placeholder="blur"
                      quality={100}
                      className="w-16"
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
            viewport={{ once: true, threshold: 0.5 }}
            className="lg:w-[1150px] px-10 hidden md:flex flex-row h-full justify-start items-center w-full md:py-[5%]"
          >
            <div className="h-full flex flex-col justify-between items-start space-y-14 md:space-y-8 lg:space-y-14">
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
                      className="md:w-10 lg:w-16"
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
                      className="md:w-10 lg:w-16"
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
                      className="md:w-10 lg:w-16"
                      alt="Languages i know"
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
          {/* Projects showcase section  */}
          <div className="text-center px-10 ">
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
                  key={index}
                  className={`flex flex-col w-full  ${
                    index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    initial={index % 2 ? slide : slideIn}
                    whileInView={slideOut}
                    viewport={{ once: true, threshold: 0.5 }}
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
                      index % 2 == 0 ? "md:pr-10" : "md:pl-10"
                    } py-[8%] md:py-10 lg:p-10 lg:w-[575px] md:justify-between lg:justify-center space-y-3 md:w-1/2 ${
                      index == projects.length - 1 && ""
                    }`}
                  >
                    <h3 className="font-bold lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-main from-0% via-secondary via-10% to-white to-70% text-2xl md:text-xl">
                      {item.title}
                    </h3>
                    <p className="md:text-base lg:text-lg">{item.desc}</p>
                    <motion.div
                      initial={slideIn}
                      whileInView={slideOut}
                      viewport={{ once: true, threshold: 0.5 }}
                      className="flex flex-row items-center justify-start md:text-sm lg:text-base space-x-4"
                    >
                      <button
                        onClick={() => {
                          window.open(item.repo, "_blank");
                        }}
                        className={
                          item.url
                            ? "bg-black w-fit flex hover:scale-90 flex-row justify-center items-center space-x-1 border border-white p-2 px-4 md:px-3 lg:px-4 font-bold rounded-lg"
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
                      </button>
                      {item.url && (
                        <button
                          onClick={() => {
                            window.open(item.url, "_blank");
                          }}
                          className="w-fit flex flex-row hover:scale-90 justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 md:px-3 lg:px-4 font-bold rounded-lg"
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
                        </button>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Coming soon section */}
          <div className="w-screen bg-dark lg:flex lg:flex-col lg:items-center">
            <div className="flex flex-col justify-center items-center px-10  pb-[5%] space-y-6 w-full lg:w-[1150px]">
              <motion.div
                initial={fadeIn}
                whileInView={fadeOut}
                viewport={{ once: true, threshold: 0.5 }}
                className="lg:w-2/3"
              >
                <Image
                  placeholder="blur"
                  quality={100}
                  src={soon}
                  alt="soon"
                  className="w-full"
                />
              </motion.div>
              <h2 className="text-sm md:text-base text-dim text-center">
                I am still working on some of the projects and I don't want to
                present any unfinished works here. So, as soon as I complete
                them I will be adding them here 👍 ~ till then you can check out
                my GitHub profile for all the latest repos:
              </h2>
              <button
                onClick={() => {
                  window.open("https://github.com/FalconEthics", "_blank");
                }}
                className="text-sm hover:scale-90 shadow-lg md:text-base w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
              >
                <FaGithubAlt />
                <p>Know more</p>
              </button>
            </div>
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
