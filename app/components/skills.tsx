import { skills } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import Header from './ui/header'
import IconCard from './ui/icon-card'
import { motion } from 'framer-motion'

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.75)

  const renderedSkills = skills.map((skill, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={skill.name}
      >
        <IconCard {...skill} />
      </motion.li>
    )
  })

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-24"
    >
      <Header>Top Skills</Header>
      <ul className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-2">
        {renderedSkills}
      </ul>
    </section>
  )
}
