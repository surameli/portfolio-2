import { Facebook, Github, Instagram, Linkedin, Mail , MapPin, Phone, Twitter} from 'lucide-react'
import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
        
            <div className='container max-w-5xl mx-auto'>
       
                <h2 className='text-3xl md-text-4xl font-bold mb-12 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                 </h2>
                 <p className='text-center text-muted-foreground mb-12 max-w-2xl max-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.

                 </p>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                          
                          <div className='space-y-6 justify-center'>
                             <div className='flex  items-start space-x-4'>
                              <div className='p-3 rounded-full bg-primary/10'>
                                 <Mail  className='h-6 w-6 text-primary'/>  {" "}
                              </div>
                              <div>
                                <h4 className=' font-medium'>Email</h4>
                                <a href="mailto:hello@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                hello@gmail.com
                                </a>
                                 </div>
                             </div>
                              <div className='flex  items-start space-x-4'>
                              <div className='p-3 rounded-full bg-primary/10'>
                                 <Phone  className='h-6 w-6 text-primary'/>  {" "}
                              </div>
                              <div>
                                <h4 className=' font-medium'>Phone</h4>
                                <a href="tel:+251979820635" className='text-muted-foreground hover:text-primary transition-colors'>
                                +251 979 820 635
                                </a>
                                 </div>
                             </div>
                              <div className='flex  items-start space-x-4'>
                              <div className='p-3 rounded-full bg-primary/10'>
                                 <MapPin  className='h-6 w-6 text-primary'/>  {" "}
                              </div>
                              <div>
                                <h4 className=' font-medium'>Address</h4>
                                <a href="mailto:hello@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                 Ethiopia Addis Abeba
                                </a>
                                 </div>
                             </div>
                          </div>
                          <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="#" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                   <Linkedin/>
                                </a>
                                 <a href="#" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                   <Github/>
                                </a>
                                 <a href="#" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                   <Twitter/>
                                </a>
                                 <a href="#" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                   <Instagram/>
                                </a>
                                 <a href="#" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                   <Facebook/>
                                </a>
                              </div>
                          </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                      <h3 className='text-2xl font-semibold mb-6'> Send me a message</h3>
                      <form className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block mb-2 font-medium'>Name</label>
                            <input type="text" id="name" className='w-full px-4 py-3 border border-border rounded-md bg-background text-base  focus:outline-none focus:ring-2 focus:ring-primary'/>
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 font-medium'>Email</label>
                            <input type="email" id="email" className='w-full px-4 py-3 border border-border rounded-md bg-background text-base  focus:outline-none focus:ring-2 focus:ring-primary'/>
                        </div>
                        <div>
                            <label htmlFor='message' className='block mb-2 font-medium'>Message</label>
                            <textarea id="message" rows="4" className='w-full px-4 py-3 border border-border rounded-md bg-background text-base  focus:outline-none focus:ring-2 focus:ring-primary'/>
                        </div>
                      </form>
                    </div>
                 </div> 
        </div>
    </section>
  )
}

export default ContactSection
