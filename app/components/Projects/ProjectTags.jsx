import React from 'react'

function ProjectTags({ name, onClick, isSelected }) {
    const ButtonStyle = isSelected
    ? "text-stone-800 border-gray-200" : "text-stone-800 border-[#8B5A2B] hover:border-[#8B5A2B]"
  return (
      <>
          <button className={`${ButtonStyle} border-2 rounded-full px-6 py-3 cursor-pointer text-xl`} onClick={() => onClick(name)}>
              {name}
          </button>
      </>
  )
}

export default ProjectTags