import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'

const projects = [
  {
    id: 1,
    title: "Car rental System",
    description: "A comprehensive car rental system that allows users to browse, book, and manage car rentals with ease.",
    imageUrl: "/projects/car-rental.png",
    tags: ["React", "Node.js", "MongoDB" , "Express" ,"Tailwind CSS" ],
    projectUrl: "https://car-rental-xod2.vercel.app/",
    githubUrl: "https://github.com/surameli/car-rental"

  
  },
   {
    id: 4,
    title: "portfolio website",
    description: "A personal portfolio website to showcase projects, skills, and experience, designed with a modern and responsive layout.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    imageUrl: "projects/portfolio.png",
    projectUrl: "https://surafel-melliyon.vercel.app",
    githubUrl: "https://github.com/surameli/portfolio-2"

  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "A full-featured e-commerce platform replicating Amazon's core functionalities, including product listings, shopping cart, and user authentication.",
    tags: ["React", "Firebase", "Stripe", "Tailwind CSS", "Node.js" , "Express"],
    imageUrl: "projects/Amazon-clone.png",
    projectUrl: "https://sura-amazon-clone.netlify.app/",
    githubUrl: "https://github.com/surameli/amazon-clone"

  },
   {
    id: 3,
    title: "Netflix Clone",
    description: "A streaming platform that mimics Netflix's user interface and functionality, allowing users to browse and watch movies and TV shows.",
    tags: ["React", "Firebase", "Node.js", "CSS", "Express"],
    imageUrl: "projects/Netflix-clone.png",
    projectUrl: "https://sura-netflix-clone.netlify.app/",
    githubUrl: "https://github.com/surameli/Netflix-try"

  },
  
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section id="projects" className='py-24 px-4 relative bg-secondary/30'>
        <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md-text-4xl font-bold mb-4 text-center'>
            My <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-center text-muted-forground mb-12 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on recently. Feel free to explore and check out the code on GitHub!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2'>
            {projects.map((project , index) => (
                <div key={index} className='group bg-card rounded-lg shadow-xs overflow-hidden card-hover'>
                    <div className='h-48 overflow-hidden'>
                        <img src={project.imageUrl} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                    </div>
                      
                                           <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                        <p className='text-muted-foreground mb-4'>{project.description}</p>
                    <div className='p-6'>     
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.tags.map((tag, index) => (
                                <span key={index} className='px-2 py-1 bg-secondary text-xs border  rounded-full font-medium text-secondary-foreground'>{tag}</span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                <ExternalLink />
                              </a>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                <Github />
                              </a>
                            </div>


                        </div>
                    </div>

                </div>
            ))}
            </div>

            <div>
                <div className='text-center mt-12'>
                    <a href="https://github.com/surameli" className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My Github <ArrowRight size={16} /></a>
                </div>
            </div>
        </div>
              
    </section>
  )
}

export default ProjectSection
