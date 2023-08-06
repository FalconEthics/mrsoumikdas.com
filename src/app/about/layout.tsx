import type { Metadata } from "next";
export const metadata: Metadata = {
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
    url: "https://www.mrsoumikdas.com/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body></body>
    </html>
  );
}
