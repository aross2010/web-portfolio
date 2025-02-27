import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaEnvelope,
  FaBookOpen,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import flask from '@/public/flask.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import maria from '@/public/maria.png'
import mysql from '@/public/mysql.png'
import vscode from '@/public/vscode.png'
import eclipse from '@/public/eclipse.png'
import postman from '@/public/postman.png'
import sql from '@/public/sql.png'
import prisma from '@/public/prisma.png'
import villa from '@/public/villa.png'
import warriors from '@/public/warriors.png'
import boxd from '@/public/boxd.png'
import atcq from '@/public/atcq.png'
import vercel from '@/public/vercel.png'
import split from '@/public/split.png'
import spotlefy from '@/public/spotlefy.png'
import spotify from '@/public/spotify.png'
import cinefindPersonal from '@/public/cinefind_me.png'
import tmdb from '@/public/tmdb.png'
import jinja from '@/public/jinja.png'
import cron from '@/public/cron.png'
import reddit from '@/public/reddit.png'
import discogs from '@/public/discogs.png'
import rpi from '@/public/rpi.png'
import vinylBot from '@/public/vinyl-bot.png'
import temp from '@/public/temp.png'
import giants from '@/public/giants.png'
import amc from '@/public/amc.png'
import lifetime from '@/public/lifetime.png'
import sjsu from '@/public/sjsu.png'
import cinefindLogo from '@/public/cinefind-logo.png'
import figma from '@/public/figma.png'
import niners from '@/public/49ers.png'
import scikit from '@/public/scikit.png'
import pandas from '@/public/pandas.png'
import shap from '@/public/shap.png'
import twitterBot from '@/public/twitter-bot.png'
import githubBanner from '@/public/git-banner.jpg'

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  {
    hash: '#about',
    label: 'About',
  },
  {
    hash: '#skills',
    label: 'Skills',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#experience',
    label: 'Experience',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alex-ross-32b278236/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/aross2010',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:@alex.ross@sjsu.edu',
  },
] as const

export const interests = [
  {
    name: 'Basketball',
    image: warriors,
  },
  {
    name: 'Soccer',
    image: villa,
  },
  {
    name: 'Baseball',
    image: giants,
  },
  {
    name: 'Football',
    image: niners,
  },
  {
    name: 'Tennis',
    icon: PiTennisBallFill,
  },
  {
    name: 'Fitness',
    icon: FaDumbbell,
  },
  {
    name: 'Movies',
    image: boxd,
    href: 'https://letterboxd.com/aross2010/',
  },
  {
    name: 'Music',
    image: atcq,
  },
  {
    name: 'Reading',
    icon: FaBookOpen,
  },
  {
    name: 'Traveling',
    icon: FaPlaneDeparture,
  },
] as const

export const skills = [
  {
    name: 'JavaScript',
    image: javascript,
  },
  {
    name: 'TypeScript',
    image: typescript,
  },
  {
    name: 'Python',
    image: python,
  },
  {
    name: 'Java',
    image: java,
  },

  {
    name: 'C',
    image: c,
  },
  {
    name: 'SQL',
    image: sql,
  },
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Next.js',
    image: next,
  },
  {
    name: 'Node.js',
    image: node,
  },
  {
    name: 'Express.js',
    image: express,
  },
  {
    name: 'Flask',
    image: flask,
  },
  {
    name: 'Prisma',
    image: prisma,
  },
  {
    name: 'MongoDB',
    image: mongodb,
  },
  {
    name: 'MySQL',
    image: mysql,
  },
  {
    name: 'Tailwind CSS',
    image: tailwind,
  },
  {
    name: 'Pandas',
    image: pandas,
  },
  {
    name: 'Scikit-learn',
    image: scikit,
  },
  {
    name: 'Git',
    image: git,
  },
] as const

export const projects = [
  {
    name: 'Twitter Bot Detector',
    image: twitterBot,
    description:
      'As the ML engineer of this project, I developed a model to classify Twitter accounts as bots or humans, utilizing advanced data preprocessing, feature selection, and predictive analysis for high accuracy',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: flask,
        alt: 'flask',
      },
      {
        src: scikit,
        alt: 'scikit',
      },
      {
        src: pandas,
        alt: 'pandas',
      },
    ],
    link: null,
    code: 'https://github.com/aross2010/twitter-bot-detector',
  },
  {
    name: 'Vinyl Bot',
    image: vinylBot,
    description:
      'A set of automated Python scripts that deliver real-time email notifications for desired vinyl record releases, seamlessly integrating with Discogs to track records from your wantlist.',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: jinja,
        alt: 'jinja',
      },
      {
        src: rpi,
        alt: 'rpi',
      },
      {
        src: cron,
        alt: 'cron',
      },
      {
        src: discogs,
        alt: 'discogs',
      },
      {
        src: reddit,
        alt: 'reddit',
      },
    ],
    link: null,
    code: 'https://github.com/aross2010/vinyl-bot',
  },
  {
    name: 'Spotlefy',
    image: spotlefy,
    description:
      'A web application that intergrates the Spotify API to allow users to create and customize their own Heardle games.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
      {
        src: spotify,
        alt: 'spotify',
      },
    ],
    link: 'https://spotlefy.vercel.app/',
    code: 'https://github.com/aross2010/spotlefy',
  },
  {
    name: 'Split',
    image: split,
    description:
      'A full-stack web application for users to log workouts and track progress through dynamic data visualizations.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
      {
        src: mongodb,
        alt: 'mongodb',
      },
      {
        src: prisma,
        alt: 'prisma',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
    ],
    link: 'https://splitv1.vercel.app/',
    code: 'https://github.com/aross2010/split',
  },
  {
    name: 'CineFind (Personal)',
    image: cinefindPersonal,
    description:
      'A web application that allows users to find films catering to their needs, leave reviews and discussion posts, create lists, and play the CineQ movie guessing game.',
    tech: [
      {
        src: javascript,
        alt: 'javascript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: node,
        alt: 'node',
      },
      {
        src: express,
        alt: 'express',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
      {
        src: tmdb,
        alt: 'tmdb',
      },
    ],
    link: 'https://cinefind.vercel.app/',
    code: 'https://github.com/aross2010/cinefind',
  },
  {
    name: 'Additional Projects',
    image: 'https://opengraph.githubassets.com/1/aross2010/web-portfolio',
    description:
      'I am constantly working on new and exciting projects, which some can be seen on my GitHub profile.',
    tech: [],
    link: null,
    code: 'https://github.com/aross2010',
  },
]

export const experiences = [
  {
    title: 'Operations Manager',
    subtitle: 'AMC Theatres',
    image: amc,
    dates: 'Mar. 2022 - Aug. 2022',
    description:
      'Managed HR functions such as recruiting, payroll, training, and optimizing team schedules to save $10K+ quarterly',
  },
  {
    title: 'Founding Engineer',
    subtitle: 'Cinefind',
    link: 'https://cinefind.app',
    image: cinefindLogo,
    dates: 'Jun. 2024 - present',
    description:
      'Led the development of our technical infrastructure from inception to launch, leveraging Python, Next.js, and MongoDB',
    emphasized: true,
  },
  {
    title: 'Lead Basketball Instructor',
    subtitle: 'Lifetime Activities',
    image: lifetime,
    dates: 'Jul. 2024 - present',
    description:
      'Orchestrated basketball skills programs for children and teens, achieving 25% enrollment growth per eight weeks',
  },
  {
    title: 'B.S. Software Engineering',
    subtitle: 'San Jose State University',
    image: sjsu,
    dates: 'Dec. 2025',
    description:
      'Led diverse teams on various software development projects, utilizing SDLC methodologies to deliver high-quality solutions',
    gpa: 3.7,
  },
]

export const footerLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alex-ross-32b278236/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/aross2010',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:@alex.ross@sjsu.edu',
  },
] as const
