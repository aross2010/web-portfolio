'use client'
import { motion } from 'framer-motion'
import { socials } from '../lib/data'
import Link from 'next/link'
import { PiCaretDownBold } from 'react-icons/pi'

export default function Intro() {
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
      id="home"
      className="grid grid-cols-1 gap-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <h1 className="text-2xl mb-6 font-light tracking-wider text-gray-400">
          Hello! I&apos;m
        </h1>
        <h1 className="text-7xl font-semibold mb-4 flex items-end">
          Alex Ross{' '}
          <span className="flex items-center gap-3 ml-4 -translate-y-1.5">
            {renderedSocials}
          </span>
        </h1>
        <h2 className="text-3xl font-semibold text-white/50 mb-8">
          Software Engineering @{' '}
          <span className="text-[#E5A823]">San Jose State University</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 w-[50%]">
          I&apos;m currently a software engineering student at San Jose State
          University with experience in designing and building full-stack
          applications using modern technologies.
        </p>

        <a className="border border-[#E5A823] w-fit font-light mr-4 text-[#E5A823] rounded-lg py-3 px-8 text-xl hover:bg-[#E5A823] hover:text-white transition-all cursor-pointer">
          Resume
        </a>
      </motion.div>
      {/* <div className="flex justify-center mt-16">
        <Link
          href="#about"
          className="font-black text-white/25 text-8xl flex justify-center hover:text-white/75 transition-all"
        >
          <PiCaretDownBold />
        </Link>
      </div> */}
    </section>
  )
}
