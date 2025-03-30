
import { useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Skill {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'tool';
  level: number;
  description: string;
}

const skills: Skill[] = [
  { name: 'Web Development', type: 'frontend', level: 80, description: 'Building and maintaining websites and applications' },
  { name: 'Problem Solving', type: 'tool', level: 85, description: 'Analyzing and solving technical challenges efficiently' },
  { name: 'Data Visualization', type: 'database', level: 70, description: 'Presenting data insights through visual representation' },
  { name: 'Design System', type: 'frontend', level: 75, description: 'Creating structured UI/UX component libraries' },
  { name: 'Programming', type: 'backend', level: 90, description: 'Writing and optimizing code for various applications' },
  { name: 'Project Management & Planning', type: 'tool', level: 80, description: 'Organizing and managing software development projects' },
  { name: 'Database Management', type: 'database', level: 85, description: 'Designing, maintaining, and optimizing databases' },
];

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Laravel', 'Python', 'Node.js', 'Express', 'Laravel', 'MySQL', 'Flask', 'Git', 'MongoDB', 'PHP'
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

// Create a color map to ensure consistent colors for the same technology/skill
const createColorMap = (items: string[]) => {
  return items.reduce((map, item) => {
    map[item] = getRandomColorClass();
    return map;
  }, {} as Record<string, string>);
};

const TechStack = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Create color maps for technologies and skills
  const [techColorMap] = useState(() => createColorMap(technologies));
  const [skillColorMap] = useState(() => createColorMap(skills.map(skill => skill.name)));

  return (
    <section id="skills" className="py-20 px-6 lg:px-20 bg-[#edeee9]">
      <h2 className="section-title text-center w-full mb-12">Technologies & Skills</h2>

      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6 text-secondary">Technologies I Work With</h3>
        <div className="relative overflow-hidden py-4">
          <div className="flex whitespace-nowrap animate-slide-marquee-left">
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={`${tech}-${i}`} className={`mx-4 skill-badge ${techColorMap[tech]}`}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 text-secondary">My Skills</h3>
        <div className="relative overflow-hidden py-4">
          <div className="flex whitespace-nowrap animate-slide-marquee-right">
            {[...skills, ...skills].map((skill, i) => (
              <TooltipProvider key={`${skill.name}-${i}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`mx-4 skill-badge ${skillColorMap[skill.name]}`}
                      onMouseEnter={() => setActiveTooltip(skill.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      {skill.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="p-3 max-w-xs bg-white shadow-lg rounded-lg z-50 absolute">
                    <p className="font-medium text-sm">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full mt-2">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
