import React from 'react'
import NavLink from './NavLink'

function MenuOverlay({links}) {
  return (
    <>
      {links && links.length > 0 && (
        <ul className="flex flex-col py-4 items-center bg-[#655148]">
                  {links.map((link, index) => (
              <li key={index} >
                          <NavLink href={link.path} title={link.title} />
             </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MenuOverlay