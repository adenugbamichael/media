/* eslint-disable react/prop-types */
import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

export default function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center '>
        <div
          onClick={handleClick}
          className='flex flex-row items-center justify-between cursor-pointer'
        >
          {header}
        </div>
        <div onClick={handleClick} className='cursor-pointer'>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className='p-2 border-t'>{children}</div>}
    </div>
  )
}
