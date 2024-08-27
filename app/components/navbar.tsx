'use client'
import { useState } from 'react'
import { links } from '../lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Links = (typeof links)[number]['hash']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<Links>('#home')

  const renderedLinks = links.map(({ hash, label }) => {
    return (
      <li key={hash}>
        <Link
          href={hash}
          onClick={() => setActiveSection(hash)}
          className={`rounded-full relative transition-all text-gray-400 font-medium px-4 py-1.5 flex ${
            activeSection == hash
              ? 'text-white font-medium'
              : 'hover:bg-slate-600 hover:text-white'
          }`}
        >
          {label}
          {hash === activeSection && (
            <motion.span
              className="bg-[#E5A823] rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
              layoutId="activeSection"
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    )
  })

  return (
    <nav className="rounded-full fixed top-6 left-1/2 transform -translate-x-1/2 bg-slate-700/75 z-10 backdrop-blur-md">
      <ul className="flex items-center gap-2 p-2">{renderedLinks}</ul>
    </nav>
  )
}
