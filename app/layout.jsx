import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import UserContextProvider from "./store/UserContext";
import Nav from "./components/Nav";
import { Analytics } from "@vercel/analytics/react";

// Define font subset and display type
const inter = Space_Grotesk({ subsets: ["latin"], display: "swap" });

/**
 * Metadata object containing information about the website
 * @typedef {Object} Metadata
 * @property {string} title - The title of the website
 * @property {string} description - The description of the website
 * @property {string[]} keywords - An array of keywords related to the website
 * @property {string} colorScheme - The color scheme of the website
 * @property {string} creator - The creator of the website
 * @property {string} publisher - The publisher of the website
 * @property {URL} metadataBase - The base URL of the website's metadata
 * @property {Object} alternates - An object containing alternate URLs for the website
 * @property {string} robots - The robots meta tag for the website
 * @property {Object} openGraph - An object containing Open Graph metadata for the website
 */

/**
 * The metadata object for the website
 * @type {Metadata}
 */
export const metadata = {
  title: "Soumik Das | Cross-Platform App Developer",
  description:
    "I love to get beautiful and interactive designs get into life, with proficiency in front end frameworks and tools like: React/React Native, Next.js, Tailwind Css, Framer Motion and etc. I am very passionate about what i do and so have keen interest in learning new and trending technologies, be that a framework or a tool!",
  keywords: [
    "soumik",
    "soumik das",
    "mr soumik",
    "mr soumik das",
    "soumikdas",
    "frontend developer",
    "web developer",
    "react",
    "react 18",
    "react developer",
    "nextjs developer",
    "frontend dev",
    "react dev",
    "web dev",
    "react native developer",
    "frontend portfolio",
    "frontend developer portfolio",
    "react dev portfolio",
    "3d portfolio",
  ],
  colorScheme: "dark",
  creator: "Soumik Das",
  publisher: "Soumik Das",
  metadataBase: new URL("https://mrsoumikdas.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: "INDEX, FOLLOW",
  openGraph: {
    title: "Soumik Das | Cross-Platform Web Developer",
    description:
      "I love to get beautiful and interactive designs get into life, with proficiency in cross-platform front end frameworks and tools like: React/React Native, Next.js, Tailwind Css, Framer Motion and etc. I am very passionate about what i do and so have keen interest in learning new and trending technologies, be that a framework or a tool!",
    url: "https://mrsoumikdas.com/",
    siteName: "Soumik's Portfolio Site",
    locale: "en_US",
    type: "website",
  },
};

/**
 * The root layout component for the website
 * @param {Object} props - The props for the component
 * @param {React.ReactNode} props.children - The child components to render
 * @returns {JSX.Element} - The root layout component
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ cursor: "crosshair" }}>
        <UserContextProvider>
          <Nav />
          {children}
          <Analytics />
        </UserContextProvider>
      </body>
    </html>
  );
}
