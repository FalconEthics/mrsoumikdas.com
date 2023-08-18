"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/Carousel";

// importing images
import Banner from "./assets/home/banner.avif";
import Rect from "./assets/home/rect.avif";
import Line from "./assets/home/line.avif";
import Skills from "./assets/home/Skills.svg";
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

import { useContext } from "react";
import { UserContext } from "./store/UserContext";
import Contact from "./components/Contact";

export default function Home() {
  const { showModal, setShowModal } = useContext(UserContext);

  // schema for google bots
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Soumik Das",
    url: "https://www.mrsoumikdas.com/",
    image: "https://www.mrsoumikdas.com/assets/logo.avif",
    jobTitle: "React Developer",
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
      "@id": "https://www.mrsoumikdas.com/",
    },
  };

  const slides = [
    {
      img: p1,
      title: "LIKELY",
      desc: "A social media platform frontend inspired from Twitter and Insta made with Vue.js",
      url: "https://github.com/FalconEthics/Likey",
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

  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-x-clip overflow-y-auto">
        <Contact />
        <Nav />
        <div>
          {/* Hero section */}
          <div className="relative flex flex-col md:flex-row-reverse space-y-[8%] py-[8%] md:justify-between md:items-center md:space-y-[0%] md:py-[3%] px-10 md:px-[16%]">
            <div className="relative w-full md:w-1/2">
              <Image
                className="slide-in relative z-10 w-full h-full  md:h-auto"
                src={Banner}
                alt="Soumik Das"
              />
              <Image
                className="slide-tilt absolute inset-0 w-full  h-full md:h-auto"
                src={Rect}
                alt="BG"
              />
            </div>
            <div className="flex flex-col w-full space-y-2 h-fit">
              <div className="flex flex-row space-x-2">
                <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">
                  Hey
                </p>
                <p className="text-4xl md:text-6xl font-bold">It's</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Soumik Das here!
              </h1>
              <p className="md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                Welcome to my part of the internet!
              </p>
            </div>
            <Image
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-[-0.3%] right-[35%]  md:right-[45%] "
            />
          </div>
          {/* Skills section */}
          <div className="relative flex flex-col md:flex-row-reverse space-y-[8%] py-[8%]  md:py-[3%] bg-dark px-10 md:px-[16%] md:space-y-0 md:justify-between md:items-center">
            <Image src={Skills} alt="sills" className="w-full md:w-[40%]" />
            <div className="break-words md:w-1/2 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold inline pr-2">
                I'm a Front-end Developer, based in
              </h2>
              <p className="text-2xl md:text-3xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">
                INDIA
              </p>
              <p className="pt-2 break-all text-dim md:text-lg ">
                I love to get beautiful and interactive uis get into life, with
                proficiency in front end frameworks and tools like: React/React
                Native, Next.js, Tailwind Css, Framer Motion and etc. I am very
                passionate about what i do and so have keen interest in learning
                new and trending technologies, be that a framework or a tool!
              </p>
            </div>
            <Image
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-[-0.3%] right-[35%]  md:right-[45%] "
            />
          </div>
          {/* My Projects Section */}
          <div className="z-10 w-full h-[65vh] md:h-[70vh] relative overflow-hidden flex flex-col justify-center items-center">
            <div className="text-center absolute top-[8%]">
              <h2 className="text-3xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                My Projects
              </h2>
              <p className="text-3xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">
                _
              </p>
            </div>
            <Image
              src={Bg}
              alt="bg"
              className="z-0 absolute top-0 right-[+20%] scale-50 md:left-[10%] md:scale-75"
            />
            <Carousel images={slides} />
            <Link
              href={"/projects"}
              className="absolute bottom-[8%] w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
            >
              <BiShowAlt />
              <p>show more</p>
            </Link>
            <Image
              src={Line}
              alt="sectiond divider"
              className="z-10 absolute bottom-[-0.3%] md:bottom-0 right-[35%] md:right-[45%] "
            />
          </div>
          {/* About Section */}
          <div className="relative md:w-full flex flex-col md:flex-row space-y-[8%] py-[8%] md:py-[2%] bg-dark px-10 md:px-[16%] md:space-y-0 md:justify-between md:items-center">
            <Image src={About} alt="sills" className=" md:w-[45%]" />
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h2 className="text-2xl md:text-4xl font-bold">
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
                    setShowModal(!showModal);
                  }}
                  className="bg-black w-fit flex flex-row justify-center items-center space-x-1 border border-white p-2 px-4 font-bold rounded-lg"
                >
                  <AiOutlineContacts className="text-main" />
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-secondary to-white">
                    Contact
                  </p>
                </button>
                <Link
                  href={"/about"}
                  className="w-fit flex flex-row justify-center items-center space-x-1 bg-gradient-to-r from-main to-secondary p-2 px-4 font-bold rounded-lg"
                >
                  <FaAngleDoubleRight />
                  <p>Know more</p>
                </Link>
              </div>
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
    </>
  );
}
