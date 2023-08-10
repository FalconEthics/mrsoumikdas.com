import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
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

  return (
      <div>
        <div className="flex min-h-screen flex-col items-center justify-between">
          <Nav />
          <h1>About Route</h1>
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
