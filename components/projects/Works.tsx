'use client'

import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorksItems from './WorksItem'
import { StaticImageData } from 'next/image'

type Project = {
  id: number
  image: StaticImageData
  title: string
  github: string
  live: string
  category: string
  technology: string[]
}

const Works = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState<Project[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLocaleLowerCase() === item.name
      })
      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLocaleLowerCase() })
    setActive(index)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-5">
        {projectsNav.map((item, index) => {
          return (
            <button
              onClick={(e) => {
                handleClick(e, index)
              }}
              className={`${
                active === index
                  ? 'bg-black text-white capitalize dark:bg-white dark:text-black'
                  : 'hover:bg-black hover:text-white capitalize dark:hover:text-black dark:hover:bg-white'
              } px-3 py-1 rounded-md`}
              key={index}
            >
              {item.name}
            </button>
          )
        })}
      </div>

      <div className="work__container grid mt-10">
        {projects.map((item, index) => {
          return <WorksItems item={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default Works
