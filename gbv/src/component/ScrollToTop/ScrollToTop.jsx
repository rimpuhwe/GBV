import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import './ScrollToTop.css'


function ScrollToTop() {
  return(
    <div className=' flex justify-end items-center info-container'>
     <div className='flex justify-between items-center'>
     <Facebook className='social-icon'/>
     <Instagram className='social-icon'/>
     <Twitter className='social-icon'/>
     <Youtube className='social-icon'/>
     </div>
     <div>+250 790 857 019</div>
     <div>KG 345,St 12 Kigali</div>
    </div>
  )
    
}

export default ScrollToTop