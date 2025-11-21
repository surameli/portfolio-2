import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* theme Toggle */}
       <ThemeToggle/>
      {/* background effects */}
       <StarBackground/>

      {/* navbar */}
        <NavBar/>
      {/* main content */}
         <HeroSection/>
         <AboutMe/>
         <SkillSection/>
         <ProjectSection/>
         <ContactSection/>
      {/* Footer */}
    </div>
  )
}

export default Home
