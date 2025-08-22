import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { AllProjects } from "./AllProjects";

const projects = [
  {
    id: 1,
    title: "SBM(G) Capacity Building",
    description: "Swachh Bharat Mission – Grameen, SBM(G) was launched on 2nd October 2014 by the Hon’ble Prime Minister,to ensure cleanliness in India and make it Open Defecation Free (ODF).",
    image: "/projects/sbmg.png",
    tags: ["CodeIgniter", "MySQL"],
    demoUrl: "https://watersanitationlearning.gov.in",
    githubUrl: "#",
  },
  // {
  //   id: 2,
  //   title: "MQUAD Survey Tool",
  //   description: "MQUAD is a comprehensive data collection and analytics platform that enables users to map, measure, monitor, and manage information. It provides dynamic visualizations and interactive analytics to support data-driven decision-making.",
  //   image: "/projects/abphealth.png",
  //   tags: ["React", "Node.js", "PostgreSQL"],
  //   demoUrl: "https://abphealth.mohfw.gov.in",
  //   githubUrl: "#",
  // },

  {
    id: 2,
    title: "Aspirational Blocks Programme",
    description: "The Ministry of Health and Family Welfare is committed to improving healthcare services in most poor performing underdeveloped blocks across the country as part of the Aspirational Blocks Programme.",
    image: "/projects/abphealth.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "https://abphealth.mohfw.gov.in",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Peace Travels",
    description: "Peace Travels is a tour management system designed to organize and manage holiday packages efficiently. It streamlines package creation, booking, customer details, and itinerary management, providing a seamless experience for both the travel agency and customers.",
    image: "/projects/Peace-Travels.png",
    tags: ["Laravel", "MySQL", "PayPal"],
    demoUrl: "http://peacetravelsindia.com",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <>
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="/projects"
          >
            Check My All Projects <ArrowRight size={16} />
          </a>
        </div> */}



        </div>
      </section>
      <AllProjects />
    </>
  );
};
