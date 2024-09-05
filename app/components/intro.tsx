'use client'
import { motion } from 'framer-motion'
import { socials } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import { RiDownloadLine } from 'react-icons/ri'
import Button from './ui/button'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.75)

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 hover:text-white transition-all"
      >
        <Icon className="w-7 h-7" />
      </a>
    )
  })

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <h1 className="md:text-2xl text-xl mb-6 font-light tracking-wider text-gray-400">
          Welcome! I&apos;m
        </h1>
        <h1 className="md:text-7xl text-5xl font-semibold mb-4 flex items-end">
          Alex Ross{' '}
          <span className="flex items-center gap-3 ml-4 -translate-y-1.5">
            {renderedSocials}
          </span>
        </h1>
        <h2 className="lg:text-3xl text-2xl font-semibold text-white/50 mb-8">
          Software Engineering @{' '}
          <span className="text-sjsu-gold">San Jose State University</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 lg:w-[50%] md:w-[65%]">
          I&apos;m currently a software engineering student at San Jose State
          University with experience in designing and building full-stack
          applications using modern technologies.
        </p>

        <Button
          href="/Alex_Ross_Resume.pdf"
          className="md:text-lg group"
        >
          Resume
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
      </motion.div>
    </section>
  )
}
