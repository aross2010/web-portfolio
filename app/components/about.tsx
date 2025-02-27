import Header from './ui/header'
import profilePic from '@/public/profile-pic.jpeg'
import { interests } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import IconCard from './ui/icon-card'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

export default function About() {
  const { ref } = useSectionInView('About', 0.5)

  const renderedInterests = interests.map((interest, i) => {
    return (
      <li
        key={interest.name}
        className={`md:w-28 w-20 ${i === interests.length - 1 ? 'mr-2' : ''}`}
      >
        <IconCard {...interest} />
      </li>
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
          that solve real-world problems, which can be seen in my{' '}
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
            experience
          </Link>
          .
          <br />
          <br />
          I specialize in full-stack application development with a primary tech
          stack of Python, TypeScript, React, Node.js, and MongoDB.
          Additionally, I have strong experience in machine learning and a wide
          range of modern technologies.
          <br />
          <br />I especially enjoy building projects with others and
          continuously learning new technologies.
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
        className="text-2xl font-medium tracking-wider text-gray-400 mb-4"
      >
        Interests
      </motion.h2>
      <Marquee
        autoFill
        speed={25}
        className="w-full overflow-y-hidden"
        gradient
        gradientColor="#0f172a"
        gradientWidth={25}
      >
        <motion.ul
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-2"
        >
          {renderedInterests}
        </motion.ul>
      </Marquee>
    </section>
  )
}
