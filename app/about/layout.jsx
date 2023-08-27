import UserContextProvider from "../store/UserContext";

/**
 * Metadata object containing information about the page for SEO purposes.
 * @typedef {Object} Metadata
 * @property {string} title - The title of the page.
 * @property {string} description - A brief description of the page.
 * @property {string[]} keywords - An array of keywords associated with the page.
 * @property {Object} openGraph - Additional metadata for Open Graph protocol.
 * @property {string} openGraph.title - The title of the page for Open Graph protocol.
 * @property {string} openGraph.description - A brief description of the page for Open Graph protocol.
 * @property {string} openGraph.url - The URL of the page for Open Graph protocol.
 * @property {string} openGraph.siteName - The name of the site for Open Graph protocol.
 * @property {Object[]} openGraph.images - An array of images for Open Graph protocol.
 * @property {string} openGraph.images.url - The URL of the image for Open Graph protocol.
 * @property {number} openGraph.images.width - The width of the image for Open Graph protocol.
 * @property {number} openGraph.images.height - The height of the image for Open Graph protocol.
 * @property {string} openGraph.images.alt - The alt text of the image for Open Graph protocol.
 * @property {string} openGraph.locale - The locale of the page for Open Graph protocol.
 * @property {string} openGraph.type - The type of the page for Open Graph protocol.
 */

/**
 * The metadata object containing information about the page for SEO purposes.
 * @type {Metadata}
 */
export const metadata = {
  title: "Soumik Das | ABOUT",
  description:
    "Know more about me and my Work, India annually produces 1.5 million engineers every year but I believe that am not just another Indian engineer among those millions rather I am among the few passionate ones.",
  keywords: [
    "about soumik",
    "about soumik das",
    "about mr soumik",
    "about mr soumik das",
    "about soumikdas",
  ],
  openGraph: {
    title: "Soumik Das | ABOUT",
    description:
      "Know more about me and my Work, India annually produces 1.5 million engineers every year but I believe that am not just another Indian engineer among those millions rather I am among the few passionate ones.",
    url: "https://mrsoumikdas.com/about",
    siteName: "Portfolio Site - ABOUT",
    images: [
      {
        url: "/logo.avif",
        width: 800,
        height: 800,
      },
      {
        url: "/logoFlat.avif",
        width: 1000,
        height: 300,
        alt: "Soumik Das",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

/**
 * The layout component for the About page.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} - The AboutLayout component.
 */
export default function AboutLayout({ children }) {
  return (
    <section>
      <UserContextProvider>{children}</UserContextProvider>
    </section>
  );
}
