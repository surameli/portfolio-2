import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='py-12 px-4 bg-card text-center'>
        <p className='text-muted-foreground'>&copy; {new Date().getFullYear()} Surafel Mellliyon. All rights reserved.</p>
      
        </footer>
    </div>
  )
}

export default Footer
