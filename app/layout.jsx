import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import UserContextProvider from "./store/UserContext";

const inter = Space_Grotesk({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Soumik Das | Frontend Web Developer",
  description:
    "I love to get beautiful and interactive uis get into life, with proficiency in front end frameworks and tools like: React/React Native, Next.js, Tailwind Css, Framer Motion and etc. I am very passionate about what i do and so have keen interest in learning new and trending technologies, be that a framework or a tool!",
  keywords: ['soumik', 'soumik das', 'mr soumik', 'mr soumik das', 'soumikdas', 'frontend developer', 'web developer', 'react', 'react 18', ' react developer', ' nextjs developer', ' frontend dev', ' react dev', ' web dev', ' react native developer', ' frontend portfolio', ' frontend developer portfolio', ' react dev portfolio', ' 3d portfolio'],
  colorScheme: 'dark',
  creator: 'Soumik Das',
  publisher: 'Soumik Das',
  metadataBase: new URL('https://www.mrsoumikdas.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: 'INDEX, FOLLOW',
  openGraph: {
    title: 'Soumik Das | Frontend Web Developer',
    description: 'I love to get beautiful and interactive uis get into life, with proficiency in front end frameworks and tools like: React/React Native, Next.js, Tailwind Css, Framer Motion and etc. I am very passionate about what i do and so have keen interest in learning new and trending technologies, be that a framework or a tool!',
    url: 'https://www.mrsoumikdas.com/',
    siteName: 'Portfolio Site',
    images: [
      {
        url: '/logo.avif',
        width: 800,
        height: 800,
      },
      {
        url: '/logoFlat.avif',
        width: 1000,
        height: 300,
        alt: 'Soumik Das',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}) {

return (
  <html lang="en">
    <body className={inter.className}>
        <UserContextProvider>
        {children}
        </UserContextProvider>
      </body>
  </html>
);
}
