import Header from './ui/header'
import profilePic from '@/public/profile-pic.jpeg'
import { interests } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import IconCard from './ui/icon-card'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'

export default function About() {
  const { ref } = useSectionInView('About', 0.5)

  const renderedInterests = interests.map((interest, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={interest.name}
      >
        <IconCard {...interest} />
      </motion.li>
    )
  })

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24"
    >
      <Header>About Me</Header>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          Hello! My name is Alex and I love designing and building applications
          that solve real-world problems, which is on display in my{' '}
          <Link
            href="/#projects"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            projects{' '}
          </Link>
          and{' '}
          <Link
            href="/#experience"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            {' '}
            work experience
          </Link>
          .
          <br />
          <br />
          I specialize in full-stack application development and deliver machine
          learning solutions while continuously learning and new and emerging
          technologies.
          <br />
          <br />
          Currently, I am working as a Software Engineer at{' '}
          <Link
            href={'https://cinefind.app/'}
            target="_blank"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            Cinefind
          </Link>{' '}
          connecting audiences across the country with free local movie
          screenings.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="justify-center items-center p-4 lg:flex hidden"
        >
          <Image
            src={profilePic}
            alt="Alex Ross"
            className="rounded-xl shadow-xl shadow-slate-900 lg:h-72 h-56 w-auto brightness-90"
          />
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold tracking-wider text-gray-400 mb-4"
      >
        Interests
      </motion.h2>
      <ul className="grid lg:grid-cols-8 grid-cols-4 gap-2">
        {renderedInterests}
      </ul>
    </section>
  )
}
