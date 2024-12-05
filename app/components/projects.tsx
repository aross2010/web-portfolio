import Header from './ui/header'
import { projects } from '../lib/data'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import Project from './ui/project'
import { useSectionInView, useWindowSizeHook } from '../lib/hooks'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

export default function Projects() {
  const width = useWindowSizeHook()

  const { ref } = useSectionInView('Projects', width > 700 ? 0.4 : 0.15)

  const renderedProjects = projects.map((project, i) => {
    return (
      <Fragment key={project.name}>
        <motion.li
          initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:block hidden"
        >
          <Project project={project} />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:hidden block"
        >
          <Project project={project} />
        </motion.li>
      </Fragment>
    )
  })

  return (
    <section
      id="projects"
      className="scroll-mt-24"
      ref={ref}
    >
      <Header>Projects</Header>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 md:auto-rows-fr">
        {renderedProjects}
        {projects.length % 2 !== 0 && (
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Link
              href={'https://github.com/aross2010'}
              className="h-full bg-transparent border border-sjsu-gold font-extrabold text-lg text-sjsu-gold hover:text-white hover:bg-sjsu-gold transition-all rounded-lg md:flex hidden flex-col items-center justify-center"
            >
              <h2 className="flex items-center gap-1">
                AND MORE ON GITHUB! <FaGithub />
              </h2>
            </Link>
          </motion.div>
        )}
      </ul>
      <form></form>
    </section>
  )
}
