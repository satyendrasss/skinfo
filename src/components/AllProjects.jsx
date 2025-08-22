import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [


    {
        id: 1,
        title: 'MQUAD Survey Tool',
        description: 'MQUAD is a comprehensive data collection and analytics platform that enables users to map, measure, monitor, and manage information. It provides dynamic visualizations and interactive analytics to support data-driven decision-making.',
        tags: ['PHP', 'MySQL'],
        client: 'Population Council of India',
        role: 'Lead Developer',
        demoUrl: 'https://mquad.org',
        githubUrl: '#'
    },
    {
        id: 2,
        title: 'Aspirational Blocks Programme',
        description: 'The Ministry of Health and Family Welfare is committed to improving healthcare services in most poor performing underdeveloped blocks across the country as part of the Aspirational Blocks Programme.',
        tags: ['React', 'Node.j', 'PostgreSQL'],
        client: 'Ministry of Health & Family Welfare Govt. of India',
        role: 'Lead Developer',
        demoUrl: 'https://abphealth.mohfw.gov.in/',
        githubUrl: '#'
    },
    {
        id: 3,
        title: 'GOBARdhan Portal & Dashboard',
        description: 'GOBARdhan (Galvanizing Organic Bio-Agro Resources Dhan) is a Government of India initiative that promotes converting organic waste such as cattle dung and agri-residue into biogas, CBG, and Bio-CNG. Coordinated by the Department of Drinking Water and Sanitation, Ministry of Jal Shakti, it follows a whole-of-government approach',
        tags: ['CodeIgniter', 'MySQL'],
        client: 'GIZ, DDWS & NIC',
        role: 'Lead Developer',
        demoUrl: 'https://gobardhan.sbm.gov.in',
        githubUrl: '#'
    },
    {
        id: 4,
        title: 'SBM(G) Capacity Building National Dashboard',
        description: 'Swachh Bharat Mission – Grameen, SBM(G) was launched on 2nd October 2014 by the Hon’ble Prime Minister,to ensure cleanliness in India and make it Open Defecation Free (ODF).',
        tags: ['CodeIgniter', 'MySQL'],
        client: 'UNICEF, DDWS & NIC',
        role: 'Lead Developer',
        demoUrl: 'https://watersanitationlearning.gov.in',
        githubUrl: '#'
    },
    {
        id: 5,
        title: 'NPCCHH- an extension of IHIP Module',
        description: '.',
        tags: ['PHP', 'MySQL'],
        client: 'WHO India, NCDC, MoHFW, CPCB & IMD',
        role: ' Lead Developer',
        demoUrl: 'https://ihip.mohfw.gov.in/npcchh',
        githubUrl: '#'
    },
    {
        id: 6,
        title: 'Jubifarm',
        description: 'A farm management system built to streamline operations and data handling.',
        tags: ['PHP', 'MySQL'],
        client: 'Jubilant',
        role: 'Coder',
        demoUrl: 'https://jubifarm.icpl.tech',
        githubUrl: '#'
    },
    {
        id: 7,
        title: 'Peace Travels',
        description: 'Peace Travels is a tour management system designed to organize and manage holiday packages efficiently. It streamlines package creation, booking, customer details, and itinerary management, providing a seamless experience for both the travel agency and customers.',
        tags: ['Laravel', 'MySQL'],
        client: 'Peace Travels',
        role: 'Coder',
        demoUrl: 'http://peacetravelsindia.com',
        githubUrl: '#'
    },
    {
        id: 8,
        title: 'Swasthya Prahari',
        description: '... ... ... ...',
        tags: ['PHP', 'MySQL'],
        client: 'Jubilant',
        role: 'Coder',
        demoUrl: 'http://jubilant.nutrisoft.in',
        githubUrl: '#'
    },
    {
        id: 9,
        title: 'JubiCare',
        description: '... ... ... ...',
        tags: ['PHP', 'MySQL'],
        client: 'Jubilant',
        role: 'Coder',
        demoUrl: 'http://jubilant.nutrisoft.in',
        githubUrl: '#'
    },
    {
        id: 10,
        title: 'HMIS',
        description: '... ... ... ...',
        tags: ['PHP', 'MySQL'],
        client: 'Population Council',
        role: 'Coder',
        demoUrl: 'http://jubilant.nutrisoft.in',
        githubUrl: '#'
    },
    {
        id: 11,
        title: 'RKSK',
        description: '... ... ... ...',
        tags: ['PHP', 'MySQL'],
        client: 'WHO & MoHFW',
        role: 'Fresher',
        demoUrl: 'https://rksk.in',
        githubUrl: '#'
    },
];

export const AllProjects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    All <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of all my projects, built with a strong focus on functionality, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 card-hover border"
                        >
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2 text-foreground">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                {/* {project.description && (
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                )} */}

                                {/* Client & Role */}
                                
                                <p className="text-xs text-muted-foreground mb-4">
                                    <span className="font-medium">Client:</span> {project.client}
                                    <br />
                                    <span className="font-medium">Role:</span> {project.role}
                                </p>


                                {/* Links */}
                                {/* <div className="flex space-x-4">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                </div> */}
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
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div> */}
            </div>
        </section>
    );
};
