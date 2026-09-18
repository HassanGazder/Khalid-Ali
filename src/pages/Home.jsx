import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div data-testid="home-page">
      <Seo
        title="Khalid Ali — Video Editor & Graphic Designer in Dubai"
        siteName="Khalid Ali"
        description="Dubai-based video editor and graphic designer crafting cinematic brand films, music videos, and social edits. Color grading, motion graphics, and sound design under one roof."
        image="/Khalid.JPEG"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Khalid Ali",
          jobTitle: "Video Editor & Graphic Designer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero
          onContact={() => navigate("/contact")}
        />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
