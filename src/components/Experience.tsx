
import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[]; 
}

const education: Education[] = [
  {
    id: 1,
    institution: "Politeknik Negeri Lhokseumawe",
    degree: "Bachelor of Applied Science in Computer",
    field: "Informatics Engineering",
    startDate: "Aug 2020",
    endDate: "Oct 2024",
    description: "Graduated with honors. Specializing in web development with internship experience and project assignments based on real needs."
  },
  {
    id: 2,
    institution: "SMK Negeri 1 Lhokseumawe",
    degree: "Non-Degree Program",
    field: "Rekayasa Perangkat Lunak",
    startDate: "Jan 2017",
    endDate: "June 2020",
    description: "3 years of learning with 3 months of internship experience in the industrial world provides real work world experience."
  } 
];

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "Infinite Learning",
    position: "Intership Trainee",
    startDate: "Feb 2023",
    endDate: "Jul 2023",
    description: "I gained this experience through an internship program organized by my campus, where I was fortunate to secure an internship at Unlimited Learning in Batam, Riau Islands, for nearly three months. This opportunity allowed me to gain a deeper understanding of web development technologies, mobile development, security, and other related fields.",
    responsibilities: [
      "Developed a company inventory application using MERN technology.",
      "Collaborated with the UI/UX team to develop a company profile using WIX Editor.",
      "Prepared presentation materials and conducted training sessions for students on web development topics.",
      "Worked collaboratively on a company LMS project to enhance the teaching process."
    ] 
  } 
];

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-6 lg:px-20 bg-[#edeee9]">
      <h2 className="section-title text-center w-full mb-12">Education & Experience</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-secondary flex items-center">
            <Calendar className="mr-2" size={20} /> Education History
          </h3>
          <div className="pl-4" ref={timelineRef}>
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="mb-1 text-xs text-accent font-semibold">
                  {edu.startDate} - {edu.endDate}
                </div>
                <h4 className="text-lg font-bold text-primary">{edu.institution}</h4>
                <p className="text-sm font-medium text-secondary">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-sm text-primary/70 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Experience Cards */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-secondary flex items-center">
            <Calendar className="mr-2" size={20} /> Work Experience
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp) => (
              <Dialog key={exp.id}>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in">
                    <div className="mb-1 text-xs text-accent font-semibold">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <h4 className="text-lg font-bold text-primary">{exp.position}</h4>
                    <p className="text-sm font-medium text-secondary">{exp.company}</p>
                    <p className="text-sm text-primary/70 mt-2 line-clamp-2">{exp.description}</p>
                    <Button variant="link" className="text-accent p-0 mt-2 h-auto font-medium">
                      View Details
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex flex-col gap-1">
                      <span className="text-2xl">{exp.position}</span>
                      <span className="text-base font-normal text-muted-foreground">
                        {exp.company} | {exp.startDate} - {exp.endDate}
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2">Responsibilities</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
 
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
