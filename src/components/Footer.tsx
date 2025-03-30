
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Alvin Syahri</h2>
            <p className="text-gray-300 max-w-md">
              Backend Developer passionate about building scalable, efficient, and secure server-side applications and APIs.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>+62 (823) 8397-4449</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <span>alvinsyahri080.com</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/alvinsyahri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Github size={20} className="hover:animate-pulse-soft" />
              </a>
              <a href="https://www.linkedin.com/in/alvin-syahri-885163240/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Linkedin size={20} className="hover:animate-pulse-soft" />
              </a>
              <a href="https://www.instagram.com/alvn_syhr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} className="hover:animate-pulse-soft" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alvin Syahri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
