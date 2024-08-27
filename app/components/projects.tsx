import React from 'react'
import Header from './ui/header'
import { projects } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import Project from './ui/project'

export default function Projects() {
  const renderedProjects = projects.map((project) => {
    return (
      <li key={project.name}>
        <Project project={project} />
      </li>
    )
  })

  return (
    <section id="projects">
      <Header>Projects</Header>
      <ul className="grid grid-cols-2 gap-4 auto-rows-fr">
        {renderedProjects}
        {projects.length % 2 !== 0 && (
          <Link
            href={'https://github.com/aross2010'}
            className="bg-slate-700/50 hover:bg-slate-500/50 text-xl text-gray-400 hover:text-white transition-all rounded-lg shadow-xl shadow-slate-800 flex flex-col items-center justify-center"
          >
            <h2 className="flex items-center gap-1 font-semibold">
              ...and more on Github <FaGithub />
            </h2>
          </Link>
        )}
      </ul>
      <form></form>
    </section>
  )
}
