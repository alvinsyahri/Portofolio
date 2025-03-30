
import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { iain, sirehat, dbscan, inflow, gampongGeutanyoe } from "../utils/proyek";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  technologies: string[];
  repoUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "IAIN Lhokseumawe TRY OUT Application",
    description: "Act as a Backend Developer to manage master data, question data, and student trial results using the Laravel framework while modifying and adding components on the front-end side. This project involves implementing a trial exam system in collaboration with a lecturer from the Lhokseumawe State Islamic Institute. The system is designed to ensure that students can only take exams within the specified hours and that exam packages are categorized based on the student's study program, preventing students from outside the designated program from accessing the exam",
    image: iain[0],
    additionalImages: [
      iain[1],
      iain[2],
      iain[3]
    ],
    technologies: ["HTML", "CSS", "Javascript", "PHP", "Boostrap", "Laravel", "MySQL"],
    repoUrl: "https://github.com/TajulMunandar/Try-Out-App",
    category: "Backend Developer"
  },
  {
    id: 2,
    title: "Community Health Centers Application (Sirehat Cerdas)",
    description: "Acting as a Backend Developer to manage master data and drug grouping using the Laravel and Flask frameworks while modifying and adding components on the front-end side. This project was developed for assessment at the KMIPN VI competition in Jakarta, in collaboration with a health center in Puentet Village, Lhokseumawe City, located in Blang Mangat District.  The idea behind this application is to digitize and integrate previously paper-based processes into one data system, covering everything from patient registration to issuing digital prescriptions, simplifying the entire workflow. In addition, we apply machine learning to analyze drug usage trends and predict future patient visits.",
    image: sirehat[0],
    additionalImages: [
      sirehat[1],
      sirehat[2] 
    ],
    technologies: ["HTML", "CSS", "Javascript", "PHP", "Python", "Boostrap", "Laravel", "Flask", "MySQL", "Machine Learning"],
    repoUrl: "https://github.com/TajulMunandar/Sirehat-Cerdas",
    category: "Backend Developer"
  },
  {
    id: 3,
    title: "DBSCAN based Sentiment Analysis Application",
    description: "Acting as a Fullstack Developer using the Python-based Flask framework to design UI/UX, DFD, ERD, and database while integrating the Density-Based Spatial Clustering of Applications with Noise (DBSCAN) method for mentor feedback analysis. This project was developed to fulfill my undergraduate requirements in collaboration with Infinite Learning, a company focused on talent development through learning programs such as bootcamps in partnership with Merdeka Campus. The project aimed to analyze student sentiment—positive, negative, or neutral—by calculating the weight of feedback sentences using the DBSCAN method. However, the results were less than satisfactory, indicating that DBSCAN was not an optimal approach for this particular case.",
    image: dbscan[0],
    additionalImages: [
      dbscan[1] 
    ],
    technologies: ["HTML", "CSS", "Javascript", "Python", "Boostrap", "Flask", "MySQL", "Machine Learning"],
    repoUrl: "https://github.com/alvinsyahri/TugasAkhir",
    category: "FullStack Developer"
  },
  {
    id: 4,
    title: "Inventory Application (Inflow)",
    description: "Acting as a Backend Developer using the Express.js framework to create master data and API functions while modifying the front-end using React.js. This project was a result of learning the MERN stack (MongoDB, Express.js, React.js, and Node.js). We developed this project during an internship at Infinite Learning, where MERN technology was used. As a learning experience, we built a simple inventory system that displays stock borrowing activities on the dashboard and in a Telegram group, making it easier to track items that are still usable or no longer in use.",
    image: inflow[0],
    additionalImages: [
      inflow[1],
      inflow[2] 
    ],
    technologies: ["HTML", "CSS", "Javascript", "React", "Boostrap", "Express", "MongoDB"],
    repoUrl: "https://github.com/alvinsyahri/backend-inventoris",
    category: "Backend Developer"
  },
  {
    id: 5,
    title: "Village Application (Gampong Geutanyoe)",
    description: "Acting as a Backend Developer to manage master data using Laravel while modifying and adding components on the front-end side. This project was developed for assessment in the KMIPN IV competition in Batam under the e-government category, aiming to assist village officials and promote village digitalization. Features include village landing pages, digital submission of correspondence and residence applications, and an online complaint system. Although our team did not win the competition, we received the **BEST PRESENTATION** award.",
    image: gampongGeutanyoe[0],
    additionalImages: [
      gampongGeutanyoe[1],
      gampongGeutanyoe[2],
      gampongGeutanyoe[3],
      gampongGeutanyoe[4],
      gampongGeutanyoe[5],
      gampongGeutanyoe[6]
    ],
    technologies: ["HTML", "CSS", "Javascript", "PHP", "Boostrap", "Laravel", "MySQL"],
    repoUrl: "https://github.com/alvinsyahri/KMIPN2022.git",
    category: "Backend Developer"
  }
];

// Soft color classes for badges
const softColorClasses = [
  'badge-softBlue',
  'badge-softGray'
];

// Function to get a random color class
const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * softColorClasses.length);
  return softColorClasses[randomIndex];
};

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  // Get all unique technologies
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort();

  // Create a color map to ensure consistent colors for the same technology
  const techColorMap = useMemo(() => {
    return allTechnologies.reduce((map, tech) => {
      map[tech] = getRandomColorClass();
      return map;
    }, {} as Record<string, string>);
  }, [allTechnologies]);

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <h2 className="section-title text-center w-full mb-12">Featured Projects</h2>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Button
          variant={filter === null ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {allTechnologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <div className="project-card cursor-pointer group">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">View Details</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-sm text-primary/70 flex-1">{project.description.substring(0, 100)}...</p>

                  {/* Menampilkan kategori proyek */}
                  <p className="text-sm font-medium text-primary/80 mt-2">Role: {project.category}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={`badge ${techColorMap[tech]}`}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && <span className="badge badge-softGray">+{project.technologies.length - 3}</span>}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <DialogDescription>
                  <div className="mt-6">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md mb-4" />

                    {project.additionalImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.additionalImages.map((img, i) => (
                          <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full h-32 object-cover rounded-md" />
                        ))}
                      </div>
                    )}

                    <h4 className="text-lg font-semibold mb-2 mt-4">Description</h4>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <h4 className="text-lg font-semibold mb-2 mt-4">Role</h4>
                    <p className="text-gray-700 mb-4">{project.category}</p>

                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`badge ${techColorMap[tech]}`}>{tech}</span>
                      ))}
                    </div>

                    <div className="flex space-x-4 mt-6">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                          Source Code <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Projects;
