import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EmailSection() {
  return (

      <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c0856c]  to-transparent rounded-full h-80 w-80 z-0 absolute -left-4 top-3/4 transform -translate-x-1/2 -translate-1/2"></div>
              <div className="z-10">
                  <h3 className="font-extrabold my-2 text-gray-300 text-3xl">Lets Start</h3>
                  <p className="text-slate-800 mb-2 max-w-md">If you have any questions, you can ask... I will answer you soon.</p>
                  <div className="socials flex flex-row gap-2">
                      <Link href="github.com">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className="text-gray-300 hover:text-beige-900">
                              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                          </svg>
                      </Link>
                      <Link href="http:/linkedin.com/in/rashin- gholijani-farahani">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className="text-gray-300 hover:text-beige-900">
                              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                          </svg>
                      </Link>
                  </div>
              </div>
              <div>
                  <form className="flex flex-col gap-6">
                      <div className="mb-6">
                          <label className="block text-sm mb-2 font-light text-beige-900" htmlFor="email">Your Email</label>
                          <input type="email" id="email" className="text-gray-300 block text-sm px-5 py-2 font-thin mb-3 w-full bg-beige-900 rounded-md" placeholder="Enter your email...." required />
                      </div>
                      <div className="">
                          <label className="block text-sm mb-2 font-light text-beige-900" htmlFor="subject">Your Subject</label>
                          <input type="text" id="subject" className="text-gray-300 block text-sm font-thin px-5 py-2 mb-3 w-full bg-beige-900 rounded-md" placeholder="Say everything you want...." required />
                      </div>
                      <div className="mb-6">
                          <label className="block text-sm mb-2 font-light text-beige-900">
                              Leave Your Message
                          </label>
                          <textarea className="border-zinc-700 border p-2 w-full bg-beige-900 rounded-md" name="message" id="message"/>
                      </div>
                      <button className="bg-beige-900 hover:bg-[#aa897b] w-full px-5 py-2 rounded-md text-gray-300 font-bold" type="submit">Send!</button>
                  </form>
              </div>
      </section>
  )
}

export default EmailSection