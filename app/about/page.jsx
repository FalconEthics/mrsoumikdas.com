"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Image from "next/image";
import Line from "../assets/home/line.avif";
import { motion } from "framer-motion";
//images
import tripsy from "../assets/about/tripsy.avif";
import traceworks from "../assets/about/traceworks.avif";
import ngl from "../assets/about/ngl.avif";
import cit from "../assets/about/cit.avif";
import uol from "../assets/about/uol.avif";
//certificates
import cs50 from "../assets/about/cs50.avif";
import ai4 from "../assets/about/ai4students.avif";
import bharat from "../assets/about/baratAcharya.avif";
import londonApp from "../assets/about/londonApp.avif";
import personal from "../assets/about/personalBranding.avif";
//icons
import { AiOutlineContacts } from "@react-icons/all-files/ai/AiOutlineContacts";
import { useContext, useLayoutEffect, useState } from "react";
import { UserContext } from "../store/UserContext";
import mConnector from "../assets/about/mConnector.avif";
import connector from "../assets/about/connector.avif";
import connector2 from "../assets/about/connector2.avif";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function About() {
  const { showModal, setShowModal } = useContext(UserContext);

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
          "@id": "https://mrsoumikdas.com/about",
          name: "About",
        },
      },
    ],
  };

  const work = [
    {
      img: tripsy,
      title: "React Native, ",
      role: "Developer",
      time: "Tripsy Games - present",
      desc: "Currently working as a react-native web developer at TripsyGames (formerly known as Wisedeck Technologies)",
      summary:
        "I work closely with a team of developers, designers, and project managers to ensure timely delivery of projects and high-quality outputs. I am responsible for developing and maintaining the front-end of both web and android applications, as well as implementing new features and functionalities.",
      url: "https://tripsygames.com",
    },
    {
      img: traceworks,
      title: "Front-end, ",
      role: "Developer",
      time: "Trace-works - 2022",
      desc: "I joined Traceworks as an intern last year to start my cs journey and gain some experience in web dev. domain",
      summary:
        "I primarily worked there with React & Firebase there and got to learn from some great industry experts. Overall i gained a lot of experience there but unfortunately had to leave after a few months for some uncertain reasons.",
      url: "https://traceworks.in",
    },
    {
      img: ngl,
      title: "Cc & Creatives ",
      role: "Team Lead",
      time: "NGL INDIA - 2021",
      desc: "I joined NGL INDIA (branch of ngl.one Germany) in 2021 as a Video Editor/VFX artist there at first but later on I was promoted to Handle all the Creatives and Content Creation operations. In easy words I was responsible for all the uploads going live on their Social handles and YouTube Channel.",
      summary:
        "Only within the first two months of my joining I made NGL India reach 8k+ online audience in total.",
      url: "https://ngl.one",
    },
  ];

  const education = [
    {
      img: uol,
      course: "University of London, ",
      uni: "Goldsmiths",
      time: "BSc in Computer Science - present",
      desc: "I am doing my B.Sc in Computer Science Engineering from Goldsmiths University of London, UK with Artificial Intelligence as my Honorary Subject/Specialization.",
      url: "https://www.london.ac.uk/",
    },
    {
      img: cit,
      course: "Central Institute of ",
      uni: "Technology",
      time: "Diploma in CSE - 2019 to 2022",
      desc: "I did my Diploma in Computer Science Engineering from Central Institute of Technology, Kokrajhar, Assam, India with a CGPA of 7.6 in 2022.",
      url: "https://cit.ac.in/",
    },
  ];

  const certificates = [cs50, ai4, personal, londonApp, bharat];

  const [w1920, setW] = useState(false);

  useLayoutEffect(() => {
    setW(screen.availWidth == 1920 || screen.availHeight == 1440);
    console.log(screen.availWidth);
  }, []);

  const slideIn = {
    x: 300,
    opacity: 0,
  };

  const slide = {
    x: -300,
    opacity: 0,
  };

  const slideOut = {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  const scaleIn = {
    scale: 0,
  };

  const scaleOut = {
    scale: 1,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  return (
    <div>
      <Cursor isGelly={true} />
      <div
        data-cursor-color="#ffffff"
        className="flex w-full min-h-screen flex-col items-center overflow-x-clip overflow-y-auto"
      >
        <Nav />
        <Contact />
        <div className="relative flex flex-col space-y-[8%] md:space-y-0 pt-[8%] md:justify-between md:items-center md:py-0 w-full">
          <div
            className={`text-center px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } md:pt-[4%]`}
          >
            <h1
              data-cursor-exclusion
              data-cursor-size="80px"
              className="fade-in text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline"
            >
              Know more about me and my Work
            </h1>
            <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
              _
            </p>
          </div>
          <h2
            data-cursor-exclusion
            className={`px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } md:text-lg text-dim break-words text-center py-[2%]`}
          >
            "India annually produces 1.5 million engineers every year but I
            believe that am not just another Indian engineer among those
            millions rather I am among the few passionate ones"
          </h2>
          <div
            className={`flex flex-col align-middle w-full relative px-10 md:px-[16%] md:pb-[4%] md:space-y-8 ${
              w1920 && "md:px-[20%]"
            }`}
          >
            <h2
              data-cursor-exclusion
              data-cursor-size="80px"
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline"
            >
              Work Experiences
            </h2>
            {work.map((item, index) => {
              return (
                <div
                  className={`relative flex flex-col ${
                    index % 2 ? "md:flex-row-reverse" : "md:flex-row"
                  } justify-center md:justify-between items-center w-full space-y-[8%] md:space-y-0 py-[8%] md:py-0 ${
                    index != work.length - 1 ? "pb-[20%]" : ""
                  }`}
                >
                  <motion.div
                    initial={index % 2 ? slideIn : slide}
                    whileInView={slideOut}
                    viewport={{ once: true, amount: 0.8 }}
                    className="w-[60%] hover:shadow-xl hover:shadow-secondary h-64 md:w-[22%] md:h-72 border border-white p-4 py-10 rounded-2xl"
                  >
                    <Image
                      data-cursor-exclusion
                      data-cursor-size="80px"
                      src={item.img}
                      placeholder="blur"
                      quality={100}
                      key={index}
                      alt={item.title}
                      className="w-full"
                      onClick={() => {
                        window.open(item.url, "_blank");
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={index % 2 ? slide : slideIn}
                    whileInView={slideOut}
                    viewport={{ once: true, amount: 0.8 }}
                    data-cursor-exclusion
                    className="flex flex-col text-sm md:text-base break-word space-y-1 md:w-[43%] break-all"
                  >
                    <div className="">
                      <h3 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                        {item.title}
                      </h3>
                      <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-lg md:text-2xl from-main to-secondary text-center">
                        {item.role}
                      </p>
                    </div>
                    <p className="">{item.time}</p>
                    <p className="text-dim">{item.desc}</p>
                    <p className="text-dim">{item.summary}</p>
                  </motion.div>
                  {index != work.length - 1 && (
                    <Image
                      quality={100}
                      src={mConnector}
                      alt="sectiond divider"
                      className="z-10 absolute bottom-[-1.5%] right-[48%] md:hidden"
                    />
                  )}
                </div>
              );
            })}
            <Image
              quality={100}
              src={connector}
              alt="connector1"
              className={`hidden md:block absolute scale-[80%] top-[5%] left-[34%] z-10 ${
                w1920 && "left-[38%]"
              }`}
            />
            <Image
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-0 right-[35%] md:right-[45%]"
            />
          </div>
          <div
            className={`flex flex-col align-middle w-full py-[8%] md:pt-[4%] relative px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } bg-dark md:pb-[4%] md:space-y-8`}
          >
            <div
              className={`text-center px-10 md:px-[16%] ${
                w1920 && "md:px-[20%]"
              }`}
            >
              <h2
                data-cursor-exclusion
                data-cursor-size="80px"
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline"
              >
                My Academics
              </h2>
              <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                _
              </p>
            </div>
            {education.map((item, index) => {
              return (
                <div
                  className={`relative flex flex-col  ${
                    index % 2 ? "md:flex-row" : "md:flex-row-reverse"
                  } justify-center md:justify-between items-center w-full space-y-[8%] md:space-y-0 py-[8%] md:py-0 ${
                    index != education.length - 1 ? "pb-[20%]" : ""
                  }`}
                >
                  <motion.div
                    initial={index % 2 ? slide : slideIn}
                    whileInView={slideOut}
                    viewport={{ once: true, amount: 0.8 }}
                    className={`w-[60%] h-72 hover:shadow-xl hover:shadow-secondary md:w-[22%] ${
                      w1920 ? "md:h-80" : "md:h-74"
                    } border border-white p-4 py-10 rounded-2xl`}
                  >
                    <Image
                      data-cursor-exclusion
                      data-cursor-size="80px"
                      src={item.img}
                      placeholder="blur"
                      quality={100}
                      key={index}
                      alt={item.course}
                      className="w-full h-full"
                      onClick={() => {
                        window.open(item.url, "_blank");
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={index % 2 ? slideIn : slide}
                    whileInView={slideOut}
                    viewport={{ once: true, amount: 0.8 }}
                    data-cursor-exclusion
                    className="flex flex-col text-sm md:text-base break-word md:w-[43%] space-y-1"
                  >
                    <div className="">
                      <h3 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                        {item.course}
                      </h3>
                      <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-lg md:text-2xl from-main to-secondary text-center">
                        {item.uni}
                      </p>
                    </div>
                    <p className="">{item.time}</p>
                    <p className="text-dim">{item.desc}</p>
                  </motion.div>
                  {index != education.length - 1 && (
                    <Image
                      quality={100}
                      src={mConnector}
                      alt="sectiond divider"
                      className="z-10 absolute bottom-[-1.5%] right-[48%] md:hidden"
                    />
                  )}
                </div>
              );
            })}
            <Image
              quality={100}
              src={connector2}
              alt="connector2"
              className={`hidden md:block absolute scale-[80%] top-[20%] left-[34%] z-10 ${
                w1920 && "left-[38%]"
              }`}
            />
            <Image
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-[-0.2%] right-[35%]  md:right-[45%] "
            />
          </div>
          <div
            className={`flex flex-col align-middle w-full px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } md:pt-[4%]`}
          >
            <div className="text-center">
              <h2
                data-cursor-exclusion
                data-cursor-size="80px"
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline"
              >
                My Certifications
              </h2>
              <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                _
              </p>
            </div>
            <div className="flex flex-col space-y-[8%] pt-[8%] w-full items-center justify-center md:hidden">
              {certificates.map((item, index) => {
                return (
                  <Image
                    data-cursor-exclusion
                    key={index}
                    placeholder="blur"
                    quality={100}
                    src={item}
                    alt="certificate img"
                    className="w-[60%] md:w-[8%]"
                  />
                );
              })}
            </div>
            <div className="grid-cols-4 grid-rows-2 gap-4 py-[4%] hidden md:grid">
              {certificates.map((item, index) => {
                return (
                  <motion.div
                    initial={scaleIn}
                    whileInView={scaleOut}
                    viewport={{ once: true, amount: 0.8 }}
                    className={`${index == 0 ? "col-span-2 row-span-2" : ""} ${
                      w1920 && "w-full"
                    }`}
                  >
                    <Image
                      data-cursor-exclusion
                      key={index}
                      placeholder="blur"
                      quality={100}
                      src={item}
                      alt="certificate img"
                      className="w-full"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div
            className={`w-full px-10 md:px-[16%] ${
              w1920 && "md:px-[20%]"
            } pb-[2%]`}
          >
            <div className="p-4 md:p-6 flex flex-col md:flex-row md:space-x-4 items-center justify-center bg-dark rounded-lg space-y-2">
              <div className="text-center">
                <h2
                  data-cursor-exclusion
                  className="text-2xl shadow-xl  md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline"
                >
                  Contact for more info
                </h2>
                <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                  _
                </p>
              </div>
              <button
                data-cursor-exclusion
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
                  });
                  setShowModal(!showModal);
                }}
                className="bg-black w-fit hover:scale-90 flex flex-row justify-center items-center space-x-1 border border-white p-2 px-4 font-bold rounded-lg text-sm"
              >
                <AiOutlineContacts className="text-main" />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                  Contact
                </p>
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
    </div>
  );
}
