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
    siteName: "Portfolio Site - PROJECTS",
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

export default function ProjectsLayout({ children }) {
  return <section>{children}</section>;
}
