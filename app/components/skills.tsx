import { skills, interests } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import Header from './ui/header'
import IconCard from './ui/icon-card'

export default function Skills() {
  const renderedSkills = skills.map((skill) => {
    return (
      <li key={skill.name}>
        <IconCard {...skill} />
      </li>
    )
  })

  return (
    <section id="skills">
      <Header>Top Skills</Header>
      <ul className="grid grid-cols-10 gap-2">{renderedSkills}</ul>
    </section>
  )
}
