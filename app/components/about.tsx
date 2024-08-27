import Header from './ui/header'
import profilePic from '@/public/profile-pic.jpeg'
import { interests } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import IconCard from './ui/icon-card'

export default function About() {
  const renderedInterests = interests.map((interest) => {
    return (
      <li key={interest.name}>
        <IconCard {...interest} />
      </li>
    )
  })

  return (
    <section
      id="about"
      className="flex flex-col"
    >
      <Header>About Me</Header>
      <div className="grid grid-cols-2 gap-12 mb-6">
        <p className="text-gray-400 text-lg">
          Hello! My name is Alex and I love designing and building real world
          applications, which can be seen through my{' '}
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
          When I&apos;m not in the classroom or working on projects, I love to
          play a variety of sports, go to the movie theatre, and spending time
          with my dogs!
          <br /> <br />
          Currently, I am seeking an intership for the summer of 2024. While I
          have primarily specialized in full-stack development, I am eager to
          learn new techonologies and processes to further my development as an
          engineer.
        </p>
        <div className="flex justify-center items-center p-4">
          <Image
            src={profilePic}
            alt="Alex Ross"
            className="rounded-xl shadow-xl shadow-slate-900 h-72 w-auto brightness-90"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold tracking-wider text-gray-400 mb-4">
        Interests
      </h2>
      <ul className="grid grid-cols-8 gap-2">{renderedInterests}</ul>
    </section>
  )
}
