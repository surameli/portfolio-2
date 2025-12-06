import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <section id="About" className='py-24 px-4 relative'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md-text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 justify-between space-x-4'>
          
          {/* LEFT SIDE */}
          <div className='space-y-10 flex flex-col justify-center'>
            
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>

            <p className='text-muted-foreground mb-6 leading-relaxed'>
              I'm Surafel Melliyon, a dedicated Full-Stack Developer with a passion for crafting dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless user experiences and robust server-side solutions.
            </p>

            <p>
              My expertise includes JavaScript, React, Node.js, and databases like MongoDB and SQL. I thrive in collaborative environments and am committed to continuous learning to stay abreast of the latest industry trends. Let's build something amazing together!
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Get In Touch{" "}
              </a>

              {/* DOWNLOAD CV BUTTON */}
              <a
                href="/Surafel-Melliyon-CV-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='grid grid-cols-1 gap-6'>
            
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>
                    Building responsive and dynamic web applications using modern technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                  <p className='text-muted-foreground'>
                    Designing intuitive and engaging user interfaces with a focus on user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Problem Solving</h4>
                  <p className='text-muted-foreground'>
                    Tackling complex challenges with efficient and effective coding solutions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
