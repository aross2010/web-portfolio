'use client'
import Header from './ui/header'
import { experiences } from '../lib/data'
import Timeline from './ui/timeline'

export default function Experience() {
  return (
    <section id="experience">
      <Header>Experience</Header>
      <Timeline data={experiences} />
    </section>
  )
}
