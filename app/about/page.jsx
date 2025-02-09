/**
 * FILEPATH: /mnt/sdb2/CODING/Projects/mrsoumikdas.com/app/about/page.jsx
 * @module About
 * @desc This module exports the About component, which displays information about the developer and their work experience, education, and certifications.
 */

"use client";
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
import Contact from "../components/Contact";
import Image from "next/image";
import Line from "../assets/home/line.webp";
import { motion } from "framer-motion";
import PageTrasition from "../components/PageTrasition";
import { isMobile } from "react-device-detect";
//images
import technorishi from "../assets/about/technorishi.webp";
import tripsy from "../assets/about/tripsy.webp";
import traceworks from "../assets/about/traceworks.webp";
import ngl from "../assets/about/ngl.webp";
import priti from "../assets/about/priti.webp";
import cit from "../assets/about/cit.webp";
import uol from "../assets/about/uol.webp";
//certificates
import cs50 from "../assets/about/cs50.webp";
import ai4 from "../assets/about/ai4students.webp";
import bharat from "../assets/about/baratAcharya.webp";
import londonApp from "../assets/about/londonApp.webp";
import personal from "../assets/about/personalBranding.webp";
//icons
import { AiOutlineContacts } from "@react-icons/all-files/ai/AiOutlineContacts";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import mConnector from "../assets/about/mConnector.webp";
import connector from "../assets/about/connector.webp";
import connector2 from "../assets/about/connector2.webp";
import dynamic from "next/dynamic";

/**
 * @typedef {Object} WorkExperience
 * @property {string} img - The image of the company logo.
 * @property {string} title - The job title of the developer.
 * @property {string} role - The role of the developer.
 * @property {string} time - The duration of the job.
 * @property {string} desc - The job description.
 * @property {string} summary - A summary of the developer's responsibilities.
 * @property {string} url - The URL of the company's website.
 */

/**
 * @typedef {Object} Education
 * @property {string} img - The image of the university logo.
 * @property {string} course - The name of the course.
 * @property {string} uni - The name of the university.
 * @property {string} time - The duration of the course.
 * @property {string} desc - The course description.
 * @property {string} url - The URL of the university's website.
 */

/**
 * @typedef {Object} Certificate
 * @property {string} img - The image of the certificate.
 */

/**
 * @function About
 * @desc The About component displays information about the developer and their work experience, education, and certifications.
 * @returns {JSX.Element} The About component.
 */
export default function About(ref) {
  const {
    showModal,
    setShowModal,
    slideIn,
    slideOut,
    slide,
    scaleIn,
    scaleOut,
    fadeIn,
    fadeOut,
  } = useContext(UserContext);

  /**
   * @constant {Object} jsonLd - The JSON-LD object for the breadcrumb list.
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
          "@id": "https://mrsoumikdas.com/about",
          name: "About",
        },
      },
    ],
  };

  /**
   * @constant {WorkExperience[]} work - The array of work experience objects.
   */
  const work = [
    {
      img: technorishi,
      title: "Cross-platform, ",
      role: "App Developer",
      time: "Technorishi : Present",
      desc: "Currently I am working as a Cross-platform App Developer at Technorishi, a consultancy firm based in Bangalore, India.",
      summary:
        "I am responsible for developing cross-platform apps for Android, IOS, PC & etc.. I have developed several apps for clients and have also been working on a few  internel tools that wil enable them to expand their services across multiple platforms and devices",
      url: "http://technorishi.co.in/",
    },
    {
      img: tripsy,
      title: "Full-stack, ",
      role: "Developer",
      time: "Tripsy Games : 2023-24",
      desc: "I joined TripsyGames (formerly known as Wisedeck Technologies) in 2023 to expand their infrastructure to support a bigger userbase",
      summary:
        "I played a key role in a project with over 20,000 active users, resolving nearly 70% of the frontend bugs related to functionality and performance. To enhance SEO and improve Web Vitals scores, I rewrote the entire web application using vanilla JavaScript and CSS, achieving a score of 90+ on critical landing pages. Additionally, I designed and implemented the complete administration infrastructure, including the Operations Configuration Portal, within just two months that capable of handling the suddent growth of the app's userbase.",
      url: "https://tripsygames.com",
    },
    {
      img: traceworks,
      title: "Front-end, ",
      role: "Developer",
      time: "Trace-works : 2022-23",
      desc: "I joined Traceworks in 2022 as an intern to start my cs journey and gain some experience in web dev. domain",
      summary:
        "I primarily worked there with React & Firebase there and got to learn from some great industry experts. Overall i gained a lot of experience and was part of a very passionate and dedicated team of web and app developers and during my tenure there worked with many renowned international clients like Nectar Dating, SOUL Radio and many more. but unfortunately had to leave after a few months for some uncertain reasons.",
      url: "https://traceworks.in",
    },
    {
      img: ngl,
      title: "Cc & Creatives ",
      role: "Team Lead",
      time: "NGL INDIA : 2021-22",
      desc: "I joined NGL INDIA (branch of ngl.one Germany) in 2021 as a Video Editor/VFX artist there at first but later on I was promoted to Handle all the Creatives and Content Creation operations. In easy words I was responsible for all the uploads going live on their Social handles and YouTube Channel.",
      summary:
        "Only within the first two months of my joining I made NGL India reach 8k+ online audience in total.",
      url: "https://ngl.one",
    },
    {
      img: priti,
      title: "Technical, ",
      role: "Support Associate",
      time: "M/s Priti Upahar : 2019-21",
      desc: "I started my career as a Technical Support Associate at M/s Priti Upahar, a local business in my hometown.",
      summary:
        "I was responsible for handling all the technical issues and queries of the customers and also for the maintenance of the company's website and social media handles.",
    }
  ];

  /**
   * @constant {Education[]} education - The array of education objects.
   */
  const education = [
    {
      img: uol,
      course: "University of London, ",
      uni: "Goldsmiths",
      time: "BSc in Computer Science - present",
      desc: "I am doing my B.Sc in Computer Science Engineering from Goldsmiths University of London, UK in Hybrid Learning Module with Artificial Intelligence as my Honorary Subject/Specialization.",
      url: "https://www.london.ac.uk/",
    },
    {
      img: cit,
      course: "Central Institute of ",
      uni: "Technology",
      time: "Diploma in CSE - 2019 to 2022",
      desc: "I did my Diploma in Computer Science Engineering from Central Institute of Technology, Kokrajhar, India with Specialization in Web Development and a CGPA of 7.6 in 2022.",
      url: "https://cit.ac.in/",
    },
  ];

  /**
   * @constant {Certificate[]} certificates - The array of certificate objects.
   */
  const certificates = [cs50, ai4, personal, londonApp, bharat];

  return (
    <PageTrasition ref={ref}>
      <main className="flex w-screen min-h-screen flex-col items-center overflow-x-hidden overflow-y-auto">
        <Contact showModal={showModal} setShowModal={setShowModal} />
        <div className="relative flex flex-col space-y-[8%] md:space-y-0 pt-[8%] md:justify-between md:items-center md:py-0 w-full">
          <motion.div
            initial={fadeIn}
            whileInView={fadeOut}
            className={`text-center px-10 md:pt-[4%] lg:w-[1150px]`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
              Know more about me and my Work
            </h1>
            <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
              _
            </p>
          </motion.div>
          <h2
            className={`px-10  md:text-lg text-dim break-words text-center py-[2%] lg:w-[1150px]`}
          >
            "India annually produces 1.5 million engineers every year but I
            believe that am not just another Indian engineer among those
            millions rather I am among the few passionate ones"
          </h2>
          <div
            className={`flex flex-col align-middle w-full lg:w-[1150px] relative px-10 md:pb-[8%] md:space-y-8`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
              Work Experiences
            </h2>
            {work.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative flex flex-col ${
                    index % 2 ? "md:flex-row-reverse" : "md:flex-row"
                  } justify-center md:justify-between items-center w-full space-y-[8%] md:space-y-0 py-[8%] md:py-0 ${
                    index != work.length - 1 && "pb-[20%]"
                  }`}
                >
                  <motion.div
                    initial={fadeIn}
                    whileInView={fadeOut}
                    viewport={{ once: true, threshold: 0.5 }}
                    className="w-48 h-64 lg:h-80 md:w-[200px] lg:w-[250px] hover:shadow-xl hover:shadow-secondary border border-white p-4 py-10 rounded-2xl"
                  >
                    <Image
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
                    viewport={{ once: true, threshold: 0.5 }}
                    className="flex flex-col text-sm lg:text-base break-word space-y-1 md:w-96 lg:w-[450px]"
                  >
                    <div className="">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                        {item.title}
                      </h3>
                      <p className="inline font-bold lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r text-lg md:text-xl from-main to-secondary text-center">
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
              className={`hidden lg:block absolute scale-[80%] top-[8%] left-[30%] z-10`}
            />
            <Image
              quality={100}
              src={connector}
              alt="connector2"
              className={`hidden lg:block absolute scale-[80%] top-[43%] left-[30%] z-10`}
            />
            <Image
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-0 right-[35%] md:right-[45%]"
            />
          </div>
          <div className="w-screen bg-dark lg:flex lg:flex-col lg:items-center">
            <div
              className={`flex flex-col align-middle w-full lg:w-[1150px] py-[8%] md:pt-[4%] relative px-10 md:pb-[8%] md:space-y-8`}
            >
              <div className={`text-center px-10`}>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                  My Academics
                </h2>
                <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                  _
                </p>
              </div>
              {education.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col  ${
                      index % 2 ? "md:flex-row" : "md:flex-row-reverse"
                    } justify-center md:justify-between items-center w-full space-y-[8%] md:space-y-0 py-[8%] md:py-0 ${
                      index != education.length - 1 ? "pb-[20%]" : ""
                    }`}
                  >
                    <motion.div
                      initial={fadeIn}
                      whileInView={fadeOut}
                      viewport={{ once: true, threshold: 0.5 }}
                      className={`w-48 h-72 lg:h-[340px] md:w-[210px] lg:w-[250px] hover:shadow-xl hover:shadow-secondary border border-white p-4 py-10 rounded-2xl`}
                    >
                      <Image
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
                      viewport={{ once: true, threshold: 0.5 }}
                      className="flex flex-col text-sm lg:text-base md:text-base break-word space-y-1 md:w-96 lg:w-[450px]"
                    >
                      <div className="">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                          {item.course}
                        </h3>
                        <p className="inline font-bold lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r text-lg md:text-xl from-main to-secondary text-center">
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
                className={`hidden lg:block absolute scale-[80%] top-[24%] left-[30%] z-10`}
              />
              <Image
                src={Line}
                alt="sectiond divider"
                className="z-10 absolute bottom-[-0.2%] right-[35%]  md:right-[45%] "
              />
            </div>
          </div>
          <div
            className={`flex flex-col align-middle w-full lg:w-[1150px] px-10  md:pt-[4%]`}
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                My Certifications
              </h2>
              <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                _
              </p>
            </div>
            <div className="flex flex-col space-y-[8%] pt-[8%] w-full items-center justify-center md:hidden">
              {certificates.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={scaleIn}
                    whileInView={scaleOut}
                    viewport={{ once: true, threshold: 0.5 }}
                    className="w-48 h-48"
                  >
                    <Image
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
            <div className="grid-cols-4 grid-rows-2 gap-4 py-[4%] hidden md:grid">
              {certificates.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={scaleIn}
                    whileInView={scaleOut}
                    viewport={{ once: true, threshold: 0.5 }}
                    className={`${index == 0 ? "col-span-2 row-span-2" : ""}`}
                  >
                    <Image
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
          <div className={`w-full lg:w-[1150px] px-10 pb-[2%]`}>
            <div className="p-4 md:p-6 flex flex-col md:flex-row md:space-x-4 items-center justify-center bg-dark rounded-lg space-y-2">
              <div className="text-center">
                <h2 className="text-2xl shadow-xl  md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                  Contact for more info
                </h2>
                <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                  _
                </p>
              </div>
              <button
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
      </main>

      {/* schema for bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageTrasition>
  );
}
