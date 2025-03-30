
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import foto from "../assets/DAP_9833.png";
import CV from "../assets/CV.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "CV.pdf"; // Nama file saat di-download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "A Web Developer Enthusiast";
  const typingSpeed = 75; // ms per character
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    if (isVisible && displayText.length < fullText.length) {
      typingRef.current = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (displayText.length === fullText.length) {
      setIsTypingComplete(true);
    }

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [isVisible, displayText, fullText]);

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="home" className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-20 py-20">
      <div className={`w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} ref={containerRef}>
        <h2 className="text-lg md:text-xl font-medium text-accent">Hello, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Alvin <span className="text-accent">Syahri</span>
        </h1>
        <div className="h-16">
          <p className="text-xl md:text-2xl text-secondary/80 mt-2 font-light">
            <span className="inline-block">{displayText}</span>
            <span className={`inline-block w-1 h-7 bg-accent ml-1 ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </p>
        </div>
        <p className="text-base md:text-lg text-primary/70 mt-4 max-w-lg">
          A passionate <span className="text-accent font-medium">Web Developer</span> with expertise in
          <span className="text-accent font-medium"> back-end development,</span> , API integration, and database management. I recently graduated with a
          <span className="text-accent font-medium"> D-IV in Informatics Engineering </span> from Lhokseumawe State Polytechnic.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Button className="btn btn-accent hover:shadow-lg hover:shadow-accent/20 transition-all" onClick={handleDownload}>
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            className="text-white hover:shadow-lg transition-all"
            onClick={() => scrollToSection("#contact")}
          >
            Contact Me <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={`w-full lg:w-1/2 flex justify-center items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative">
            <img
              src={foto}
              alt="Alvin Syahri"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Floating skill badges */}
            <div className="absolute -top-4 -right-8 transform rotate-3 transition-all duration-500 group-hover:translate-y-1">
              <span className="badge badge-softBlue px-3 py-1.5">Laravel Developer</span>
            </div>
            <div className="absolute -bottom-4 -left-6 transform -rotate-2 transition-all duration-500 group-hover:translate-y-1">
              <span className="badge badge-softBlue px-3 py-1.5">Backend Engineer</span>
            </div>
            <div className="absolute top-1/4 -left-12 transform rotate-12 transition-all duration-500 group-hover:-translate-x-1">
              <span className="badge badge-softGray px-3 py-1.5">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
