/**
 * Metadata object containing information about the page for SEO purposes.
 * @typedef {Object} Metadata
 * @property {string} title - The title of the page.
 * @property {string} description - The description of the page.
 * @property {string[]} keywords - An array of keywords related to the page.
 * @property {Object} openGraph - An object containing Open Graph metadata for the page.
 * @property {string} openGraph.title - The title of the page for Open Graph.
 * @property {string} openGraph.description - The description of the page for Open Graph.
 * @property {string} openGraph.url - The URL of the page for Open Graph.
 * @property {string} openGraph.siteName - The name of the site for Open Graph.
 * @property {Object[]} openGraph.images - An array of images for Open Graph.
 * @property {string} openGraph.images.url - The URL of the image for Open Graph.
 * @property {number} openGraph.images.width - The width of the image for Open Graph.
 * @property {number} openGraph.images.height - The height of the image for Open Graph.
 * @property {string} openGraph.images.alt - The alt text of the image for Open Graph.
 * @property {string} openGraph.locale - The locale of the page for Open Graph.
 * @property {string} openGraph.type - The type of the page for Open Graph.
 */

/**
 * The metadata for the Projects page.
 * @type {Metadata}
 */
export const metadata = {
  title: "Soumik Das | PROJECTS",
  description: "Explore some of the best projects of mine with source code!",
  keywords: [
    "projects soumik",
    "projects soumik das",
    "projects mr soumik",
    "projects mr soumik das",
    "projects soumikdas",
    "top frontend project ideas",
    "frontend projects",
  ],
  openGraph: {
    title: "Soumik Das | PROJECTS",
    description: "Explore some of the best projects of mine with source code!",
    url: "https://mrsoumikdas.com/projects",
    siteName: "Soumik's Portfolio Site - PROJECTS",
    locale: "en_US",
    type: "website",
  },
};

/**
 * The layout component for the Projects page.
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns {JSX.Element} - The ProjectsLayout component.
 */
export default function ProjectsLayout({ children }) {
  return <section>{children}</section>;
}
