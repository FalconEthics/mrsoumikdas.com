'use client'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";
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
import appy from "../assets/projects/Group 13.avif";
import likey from "../assets/projects/Group 14.avif";
import gpt from "../assets/projects/Rectangle 26.avif";
import tri from "../assets/projects/Rectangle 27.avif";
import calc from "../assets/projects/Rectangle 28.avif";

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
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: covid,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: oiram,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: appy,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: likey,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: gpt,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: tri,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
    {
      img: calc,
      title: '',
      desc: '',
      repo: '',
      url: ''
    },
  ]

  return (
    <>
      <div className="flex min-h-screen flex-col items-center w-full">
        <Contact />
        <Nav />
        <div className="relative flex flex-col md:flex-row-reverse space-y-[8%] py-[8%] md:justify-between md:items-center md:space-y-[0%] md:py-[3%] w-full px-10 md:px-[16%]">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center">Preferred Tech Stacks</h1>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center">Frameworks</p>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {
                  skills.Frameworks.map((item, index) => {
                    return (
                      <Image src={item} key={index} className="w-[60%]" />
                    )
                  })
                }
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center">Tools</p>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {
                  skills.Tools.map((item, index) => {
                    return width < 720 ? (
                      index < 5 &&
                      <Image src={item} key={index} className="w-[60%]" />
                    )
                      : (
                        <Image src={item} key={index} className="w-[60%]" />
                      )
                  })
                }
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-4 items-center w-1/3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white text-center">Languages</p>
              <div className="flex flex-col justify-start items-center space-y-4 w-full">
                {
                  skills.Languages.map((item, index) => {
                    return (
                      <Image src={item} key={index} className="w-[60%]" />
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">My Projects</h2>
            <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">_</p>
          </div>
          <div>
            <div>
              {/*   <Image src={item} key={index} /> */}
              {/* <div> */}
              {/*   <h3></h3> */}
              {/*   <p></p> */}
              {/*   <div> */}
              {/*     <Link href={""} /> */}
              {/*     <Link href={""} /> */}
              {/*   </div> */}
              {/* </div> */}
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
    </>
  );
};

export default Projects;
