'use client'
import { motion } from 'framer-motion'
import { socials } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import { RiDownloadLine } from 'react-icons/ri'
import Button from './ui/button'
import Link from 'next/link'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.75)

  const renderedSocials = socials.map(({ name, icon: Icon, href, color }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 transition-all social-link"
        style={{ '--hover-color': color } as React.CSSProperties}
      >
        <Icon className="md:text-4xl text-2xl" />
      </Link>
    )
  })

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-96 mb-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="md:text-2xl text-xl sm:mb-6 mb-3 font-light tracking-wider text-gray-400">
          Welcome! I&apos;m
        </h1>
        <h1 className="md:text-7xl text-5xl font-bold sm:mb-2 mb-1 flex items-end">
          Alex Ross{' '}
        </h1>
        <h2 className="lg:text-3xl font-medium text-2xl text-white/50 mb-8">
          Software Engineer
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg mb-8 lg:w-[55%] md:w-[65%]"
      >
        I&apos;m a recent Software Engineering graduate from San Jose State
        University. I recently led development on{' '}
        <Link
          href={'https://cinefind.app'}
          target="_blank"
          className="font-bold hover:text-[#FF5700] transition-all"
        >
          Cinefind
        </Link>
        , a platform that connected audiences with free in-theater screenings
        across the country, and I&apos;m now focused on growing my own app{' '}
        <Link
          href={'https://apps.apple.com/app/id6754656428'}
          target="_blank"
          className="font-bold hover:text-[#807bcf] transition-all"
        >
          Spotter
        </Link>{' '}
        — designing, maintaining, and shipping the next wave of updates for the
        app.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
        className="flex items-center lg:gap-2"
      >
        <Button
          href="/Alex_Ross_Resume.pdf"
          className="md:text-lg group"
        >
          Resume
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
        <ul className="flex md:gap-4 gap-3 items-center">{renderedSocials}</ul>
      </motion.div>
    </section>
  )
}
