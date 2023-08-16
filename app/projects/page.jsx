"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
//Frameworks
import react from "../assets/projects/Rectangle 29.avif";
import motion from "../assets/projects/Rectangle 30.avif";
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
import Contact from "../components/Contact";
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

const Projects = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://www.mrsoumikdas.com/",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://www.mrsoumikdas.com/projects",
          name: "Projects",
        },
      },
    ],
  };

  const skills = {
    Frameworks: [react, motion, rn, expo, next],
    Tools: [tailwind, git, firebase, ad, seo, docker, vercel, linux],
    Languages: [js, c, asm],
  };

  const projects = [
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
      url: "https://github.com/FalconEthics/COVID-UN/releases/download/v-1.0.0/COVID-UN.apk",
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
      title: "Likely",
      desc: "A social media platform frontend inspired from Twitter and Insta made with Vue.js",
      repo: "https://github.com/FalconEthics/Likely",
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
      desc: "a simple calculator that can perform basic arithmetic operations written intel - 8086 Assembly Language",
      repo: "https://github.com/FalconEthics/CALCASM",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col items-center w-full">
        <Contact />
        <Nav />
        <div className="relative flex flex-col md:flex-row-reverse space-y-[8%] pt-[8%] md:justify-between md:items-center md:space-y-[0%] md:py-[3%] w-full">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center">
            Preferred Tech Stacks
          </h1>
          <div className="flex flex-row w-full justify-between px-10 md:px-[16%]">
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center">
                Frameworks
              </p>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {skills.Frameworks.map((item, index) => {
                  return <Image src={item} key={index} className="w-[60%]" />;
                })}
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center">
                Tools
              </p>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {skills.Tools.map((item, index) => {
                  return width < 720 ? (
                    index < 5 && (
                      <Image src={item} key={index} className="w-[60%]" />
                    )
                  ) : (
                    <Image src={item} key={index} className="w-[60%]" />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center">
                Languages
              </p>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {skills.Languages.map((item, index) => {
                  return <Image src={item} key={index} className="w-[60%]" />;
                })}
              </div>
            </div>
          </div>
          <div className="text-center px-10 md:px-[16%]">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
              My Projects
            </h2>
            <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
              _
            </p>
          </div>
          <div className="w-full flex flex-col">
            {projects.map((item, index) => {
              return (
                <div className="flex flex-col w-full">
                  <Image src={item.img} key={index} alt="projects" />
                  <div className={`flex flex-col px-10 md:px-[16%] py-[8%] space-y-2 ${index == projects.length - 1 && 'pb-0' }`}>
                    <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main from-0% via-secondary via-10% to-white to-70% text-2xl">
                      {item.title}
                    </h3>
                    <p>{item.desc}</p>
                    <div className="flex flex-row items-center justify-start space-x-4">
                      <Link
                        href={item.repo}
                        className={
                          item.url
                            ? "bg-black w-fit flex flex-row justify-center items-center space-x-1 border border-white p-2 px-4 font-bold rounded-lg"
                            : "w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
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
                          href={item.url}
                          className="w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center px-10 md:px-[16%] pb-[8%] space-y-6 bg-dark w-full">
            <Image src={soon} alt="soon" className="w-[80%]"/>
            <p className="text-sm text-dim text-center">
              I am still working on some of the projects and I don't want to
              present any unfinished works here. So, as soon as I complete them
              I will be adding them here 👍 ~ till then you can check out my
              GitHub profile for all the latest repos:
            </p>
            <Link
              href={"https://github.com/FalconEthics"}
              className="text-sm w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
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
    </>
  );
};

export default Projects;
