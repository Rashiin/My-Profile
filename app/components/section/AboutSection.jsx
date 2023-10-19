"use client";
import React from 'react';
import Image from 'next/image';
import { useTransition } from 'react';
import { useState } from 'react';
import TabButton from './TabButton';

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handelTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const Tab_Data = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Javascript</li>
          <li>Python</li>
          <li>C++</li>
          <li>React</li>
          <li>Next.Js</li>
          <li>Html/css</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Git/Github</li>
          <li>Sql/Mysql</li>
          <li>DataBase</li>
          <li>Sass</li>
          <li>Bash & Linux</li>
          <li>ICDL1 & ICDL2</li>
        </ul>
      )
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Bachelor of Computer Engineering</li>
          <li>Diploma of Mathematics and Physic</li>
        </ul>
      )
    },
    {
      title: "Certification",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Front End Certificate</li>
          <li>Python Programming</li>
          <li>Algorithm and Programming</li>
          <li>ICDL1</li>
          <li>ICDL2</li>
          <li>English Language</li>
        </ul>
      )
    }
  ];

  return (
    <div>
      <section className=" py-16">
        <div className="container mx-auto">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

              <Image
                src="/images/photo-1571171637578-41bc2dd41cd2.jpeg"
                width={700}
                height={700}
                className="shadow-2xl rounded-lg"
              />

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Computer Engineering student with a robust programming background and extensive project experience. Completed various programming courses, including advanced Python, and received web design training under Professor Touraj Arminpour. Instructed front-end web design at Tehran Institute of Technology and provided mentorship at the universitys AI Bootcamp. Active member of the Computer Society, focusing on front-end and AI. Proficient in English, passionate about solving complex problems, dedicated to enhancing technology in challenging environments. Effective team player.
              </p>
              <div className="flex flex-row mt-8 justify-start">
                <TabButton
                  selectTab={() => handelTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handelTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
                <TabButton
                  selectTab={() => handelTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  Certifications
                </TabButton>
              </div>
              <div className="mt-8 text-gray-300">
                {Tab_Data.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;