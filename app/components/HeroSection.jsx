"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'

function HeroSection() {
  return (
    <div className="lg:py-16">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="col-span-6 place-self-center text-center sm:text-left justify-self-start">
                      <h1 className=' text-zinc-200 lg:text-6xl text-4xl mb-6 font-extrabold sm:text-5xl'>
                          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">Hello ,
                              Im  {""}</span> <TypeAnimation
      sequence={[
        'Rashin',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front End Developer',
        1000,
        'Python Programmer',
        1000,
        'Game Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                      </h1>
        <p className=" text-stone-700  lg:text-xl mb-5 sm:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit exercitationem id reprehenderit rem quam atque iure minus, adipisci numquam. Vel earum voluptatibus corporis neque minima sequi fugiat voluptate ipsa?
                      </p>  
                      <div>
                          <button className="px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-800 via-amber-100 to-orange-900 hover:bg-amber-500 text-zinc-700 ">Hire me</button>
              <button className="px-6 py-3 rounded-full bg-transparent hover:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 w-full sm:w-fit border-gray-200 border-solid border mt-3 hover:text-gray-800 transition-all duration-300 hover:border-none">
              <a
  href="/Rashin_Farahani_Resume_30-08-2023-21-02-53 (1).pdf" 
  download="Rashin_Farahani_Resume_30-08-2023-21-02-53 (1).pdf" 
>
  <span className="block">Download My Resume</span>
</a>

                          </button>
                      </div>
                      </motion.div>

                      <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="col-span-5 place-self-center mt-10 lg:mt-0  mb-6">
            <div className="rounded-full bg-[#a28375] w-[250px] h-[250px] lg:w-[480px] lg:h-[480px] relative">
              <img src="/images/girl-programmer-with-mac-laptop-and-dark-brown--long-hair-and-without-glass-.png" className="w-[320px] h-[300px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover shadow-xl" />
              </div>
              </motion.div>

        </div>
      </section>
    </div>
  )
}

export default HeroSection;