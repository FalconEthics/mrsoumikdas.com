'use client'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Image from "next/image";
import Line from "../assets/home/line.avif";
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
import { useContext } from "react";
import { UserContext } from "../store/UserContext";

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
          "@id": "https://www.mrsoumikdas.com/",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://www.mrsoumikdas.com/about",
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
    },
    {
      img: traceworks,
      title: "Front-end, ",
      role: "Developer",
      time: "Trace-works - 2022",
      desc: "I joined Traceworks as an intern last year to start my cs journey and gain some experience in web dev. domain",
      summary:
        "I primarily worked there with React & Firebase there and got to learn from some great industry experts. Overall i gained a lot of experience there but unfortunately had to leave after a few months for some uncertain reasons.",
    },
    {
      img: ngl,
      title: "Cc & Creatives ",
      role: "Team Lead",
      time: "NGL INDIA - 2021",
      desc: "I joined NGL INDIA (branch of ngl.one Germany) in 2021 as a Video Editor/VFX artist there at first but later on I was promoted to Handle all the Creatives and Content Creation operations. In easy words I was responsible for all the uploads going live on their Social handles and YouTube Channel.",
      summary:
        "Only within the first two months of my joining I made NGL India reach 8k+ online audience in total.",
    },
  ];

  const education = [
    {
      img: uol,
      course: "University of London, ",
      uni: "Goldsmiths",
      time: "BSc in Computer Science - present",
      desc: "I am doing my B.Sc in Computer Science Engineering from Goldsmiths University of London, UK with Artificial Intelligence as my Honorary Subject/Specialization.",
    },
    {
      img: cit,
      course: "Central Institute of ",
      uni: "Technology",
      time: "Diploma in CSE - 2019 to 2022",
      desc: '"I did my Diploma in Computer Science Engineering from Central Institute of Technology, Kokrajhar, Assam, India with a CGPA of 7.6 in 2022."',
    },
  ];

  const certificates = [cs50, ai4, personal, londonApp, bharat];

  return (
    <div>
      <div className="flex w-full min-h-screen flex-col items-center overflow-x-clip overflow-y-auto">
        <Nav />
        <Contact />
        <div className="relative flex flex-col space-y-[8%] md:space-y-0 pt-[8%] md:justify-between md:items-center md:py-0 w-full">
          <div className="text-center px-10 md:px-[16%]">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
              Know more about me and my Work
            </h1>
            <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
              _
            </p>
          </div>
          <p className="px-10 md:px-[16%] text-dim break-words text-center">
            "India annually produces 1.5 million engineers every year but I
            believe that am not just another Indian engineer among those
            millions rather I am among the few passionate ones"
          </p>
          <div className="flex flex-col align-middle w-full relative px-10 md:px-[16%]">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
              Work Experiences
            </h2>
            {work.map((item, index) => {
              return (
                <div
                  className={`flex flex-col justify-center items-center w-full space-y-[8%] py-[8%] ${index != work.length - 1 ? "pb-[20%]" : ""
                    }`}
                >
                  <Image
                    src={item.img}
                    placeholder="blur"
                    quality={100}
                    key={index}
                    className="w-[60%] h-64 md:w-[8%] border border-white p-4 py-10 rounded-2xl"
                    alt={item.title}
                  />
                  <div className="flex flex-col text-sm break-word space-y-1">
                    <div className="">
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                        {item.title}
                      </h3>
                      <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-lg from-main to-secondary text-center">
                        {item.role}
                      </p>
                    </div>
                    <p className="">{item.time}</p>
                    <p className="text-dim">{item.desc}</p>
                    <p className="text-dim">{item.summary}</p>
                  </div>
                </div>
              );
            })}
            <Image
              placeholder="blur"
              quality={100}
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-[-2%] right-[35%]  md:right-[45%] "
            />
          </div>
          <div className="flex flex-col align-middle w-full py-[8%] relative px-10 md:px-[16%] bg-dark">
            <div className="text-center px-10 md:px-[16%]">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                My Academics
              </h2>
              <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                _
              </p>
            </div>
            {education.map((item, index) => {
              return (
                <div
                  className={`flex flex-col justify-center items-center w-full space-y-[8%] py-[8%] ${index != education.length - 1 ? "pb-[20%]" : ""
                    }`}
                >
                  <Image
                    src={item.img}
                    placeholder="blur"
                    quality={100}
                    key={index}
                    className="w-[60%] h-72 md:w-[8%] border border-white p-4 py-10 rounded-2xl"
                    alt={item.course}
                  />
                  <div className="flex flex-col text-sm break-word space-y-1">
                    <div className="">
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                        {item.course}
                      </h3>
                      <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-lg from-main to-secondary text-center">
                        {item.uni}
                      </p>
                    </div>
                    <p className="">{item.time}</p>
                    <p className="text-dim">{item.desc}</p>
                  </div>
                </div>
              );
            })}
            <Image
              placeholder="blur"
              quality={100}
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-[-0.2%] right-[35%]  md:right-[45%] "
            />
          </div>
          <div className="flex flex-col align-middle w-full px-10 md:px-[16%]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
                My Certifications
              </h2>
              <p className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r text-3xl from-main to-secondary text-center">
                _
              </p>
            </div>
            <div className="flex flex-col space-y-[8%] pt-[8%] w-full items-center justify-center">
              {certificates.map((item, index) => {
                return (
                  <Image
                    placeholder="blur"
                    quality={100}
                    src={item}
                    key={index}
                    alt=""
                    className="w-[60%] md:w-[8%]"
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full px-10 md:px-[16%]">
            <div className="p-4 flex flex-col items-center justify-center bg-dark rounded-lg space-y-2">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center inline">
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
                className="bg-black w-fit flex flex-row justify-center items-center space-x-1 border border-white p-2 px-4 font-bold rounded-lg text-sm"
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
