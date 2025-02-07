import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import Button from '../button/Button'

function Contact() {
  return (
    <div>
        <div className='w-full 'style={{height: '50vh'}} >
            <motion.img
            src='https://www.goodthingsguy.com/wp-content/uploads/2018/01/wpid-o-women-holding-hands-facebook-620x400.jpg'
            alt='helping hands'
            initial={{opacity: 0}}
            width='100%'
            animate={{ opacity: 1}}
            transition={{ duration: 2 , ease:"linear"}}
            className="w-full h-full object-cover"
            />   
        </div>
        <div>
            <h2 className='text-center text-5xl font-bold text-purple-900 mb-30'>Contact Us</h2>
            <p className='mx-auto my-30 text-center text-xl text-gray-600'>Feel free to reach out with any questions , concerns or partner with us. We have a team of experienced professionals ready to assist you.</p>
            <form action="" className='border border-dashed w-1/2 '>
                <input type="text" name="" id="" placeholder='Name '/>
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="tel" name="" id="" placeholder='Phone number'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message...'></textarea>
                <div className='text-center'><Button children='Send'/></div>
            </form>


        </div>
    </div>
  )
}

export default Contact