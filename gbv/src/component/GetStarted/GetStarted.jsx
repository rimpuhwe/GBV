import React from 'react'
import Button from '../button/Button'
import'./GetStarted.css'

function GetStarted() {
  return (
    <div className='get'>
        <div className='text-center'>
            <h2>Take the First Step — We're Here to Support You</h2>
            <p>If you or someone you know is experiencing gender-based violence, don't hesitate to reach out. Here's how you can get started:</p>
        </div>
        <section className=' flex option justify-evenly items-center'>
            <div className='option-case'>
                <h3>Option 1: Report a Case</h3>
                <p>Help us take action by reporting incidents of GBV.</p>
                <ul>
                    <li>Confidential and Secure: Your safety is our priority. We ensure confidentiality.</li>
                    <li>Step-by-Step Guide: Follow our simple process to report any form of violence.</li>
                    <li>Support Along the Way: Our team will guide you through every step.</li>
                </ul>
                <div className='text-center '>
                    <Button  children='Report a Case Now'/>
                </div>
            </div>
            <div className='option-case'>
                <h3>Option 2: Request Support</h3>
                <p>Sometimes, you just need someone to listen and guide you.</p>
                <ul>
                    <li>Talk to a Support Specialist: Our trained specialists are here to help.</li>
                    <li>Access Resources: We'll connect you to shelters, legal advice, and counseling services.</li>
                    <li>Emergency Assistance: Find contacts for urgent help or any other help.</li>
                </ul>
                <div className='text-center '>
                    <Button  children='Request Support'/>
                </div>
            </div>
        </section>
        <div className='text-center message-text'>
            <span className='text-md italic font-thin'>Remember, you are not alone. Together, we can create a safer and more supportive community.</span>
        </div>
    </div>
  )
}

export default GetStarted