"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectTags from './ProjectTags';
import { useRef } from 'react';
import { useState } from 'react';
import {motion,useInView} from 'framer-motion'
function ProjectSection() {
  const projectData = [
    {
      id: 1,
      title: "Microsoft Project",
      image: "/images/screencapture-rashiin-github-io-microsoft-project-2023-09-21-22_57_29.png",
      description: "this project is with Bootstrap",
      tag: ["All", "Mobile"],
      gitUrl: "https://rashiin.github.io/microsoft-project/",
      previewUrl:""
    },
    {
      id: 2,
      title: "LEGO Project",
      image: "/images/screencapture-rashiin-github-io-LEGO-2023-09-21-22_56_37.png",
      description: "this project is with Tailwind",
      tag: ["All", "Web"],
      gitUrl: "https://rashiin.github.io/LEGO/",
      previewUrl:""
    },
    {
      id: 3,
      title: "Apple Project",
      image: "/images/screencapture-rashiin-github-io-apple-project-2023-09-21-22_58_02.png",
      description: "this project is with Sass",
      tag: ["All", "Web"],
      gitUrl: "https://rashiin.github.io/apple_project/",
      previewUrl:""
    },
    {
      id: 4,
      title: "Digikala Project",
      image: "/images/screencapture-mobyna-github-io-Digikala-2023-07-14-23_09_58.png",
      description: "this project is with Html/css",
      tag: ["All", "Web"]
      ,
      gitUrl: "",
      previewUrl:""
    },
  ];
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true})
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const fillterProjects = projectData.filter((project) =>
    project.tag.includes(tag));
  
  const cardVarriants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };
  return (
    <section >
      <h1 className="font-extrabold mb-2 text-xl text-stone-800">Some of My Projects</h1>
      <div className="text-gray-300 flex flex-row gap-2 items-center justify-center py-6">
        <ProjectTags onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTags onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTags onClick={handleTagChange} name="Mobile" isSelected={tag ==="Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {fillterProjects.map((project,index) => (
        <motion.li variants={cardVarriants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration:0.3,delay:index*0.4}} key={index}>
        <ProjectCard key={project.id} title={project.title}
              imgUrl={project.image} description={project.description} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
       </motion.li>
      ))}
      </ul>
    </section>
  );
}

export default ProjectSection;