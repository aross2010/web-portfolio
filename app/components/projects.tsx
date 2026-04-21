import Header from './ui/header'
import { projects } from '../lib/data'
import Project from './ui/project'
import { useSectionInView, useWindowSizeHook } from '../lib/hooks'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

export default function Projects() {
  const width = useWindowSizeHook()

  const { ref } = useSectionInView('Projects', width > 700 ? 0.4 : 0.15)
  const hasOddProjectCount = projects.length % 2 !== 0
  const shouldRemoveLast = hasOddProjectCount && width > 700
  const projectsToShow = shouldRemoveLast ? projects.slice(0, -1) : projects

  const renderedProjects = projectsToShow.map((project, i) => {
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
      <Header>🚀 Projects</Header>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 md:auto-rows-fr">
        {renderedProjects}
      </ul>
      <form></form>
    </section>
  )
}
