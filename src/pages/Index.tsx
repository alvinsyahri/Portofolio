
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Alvin Syahri | Web Developer Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Header />
      <main>
        <TechStack />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
