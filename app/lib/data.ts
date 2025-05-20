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
import pl from '@/public/pl.png'
import beautifulsoup from '@/public/beautifulsoup.png'

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  // {
  //   hash: '#about',
  //   label: 'About',
  // },
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
    name: 'Tailwind CSS',
    image: tailwind,
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
    name: 'Pandas',
    image: pandas,
  },
  {
    name: 'Scikit-learn',
    image: scikit,
  },
  {
    name: 'BeaitifulSoup',
    image: beautifulsoup,
  },
  {
    name: 'Vercel',
    image: vercel,
  },
  {
    name: 'Git',
    image: git,
  },
] as const

export const projects = [
  {
    name: 'X/Twitter Bot Detector',
    image: twitterBot,
    description:
      'Developed a machine learning model and web app to classify X/Twitter accounts as bots or humans, using custom features, data preprocessing, and predictive analysis for high accuracy.',
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
    tags: [
      'Machine Learning',
      'API Integration',
      'Model Deployment',
      'API Design',
    ],
    link: null,
    code: 'https://github.com/aross2010/twitter-bot-detector',
  },
  {
    name: 'Vinyl Bot',
    image: vinylBot,
    description:
      'Built automated Python scripts to send real-time email alerts for vinyl releases, integrating with the Discogs API to monitor and track wantlist records.',
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
    tags: [
      'Automation Engineering',
      'Third-Party API',
      'Real-Time Notifications',
      'Email Alerts',
    ],
    link: null,
    code: 'https://github.com/aross2010/vinyl-bot',
  },
  {
    name: 'Spotlefy',
    image: spotlefy,
    description:
      'Built a web app using the Spotify API that lets users create custom Heardle-style games by importing their playlists or searching any artist or playlist to generate song snippets for guessing.',
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
    tags: ['Web Development', 'Third-Paty API', 'OAuth Flow', 'Game Design'],
    link: 'https://spotlefy.vercel.app/',
    code: 'https://github.com/aross2010/spotlefy',
  },
  {
    name: 'Split',
    image: split,
    description:
      'Developed a full-stack web app for logging workouts and tracking fitness progress through interactive charts and data visualizations.',
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
    tags: [
      'Full-Stack Web Development',
      'API Design',
      'Data Visualization',
      'OAuth Flow',
    ],
    link: 'https://splitv1.vercel.app/',
    code: 'https://github.com/aross2010/split',
  },
  {
    name: 'CineFind (Personal)',
    image: cinefindPersonal,
    description:
      'Developed a full-stack web app for film discovery with features like user reviews, discussion forums, custom lists, and a CineQ movie guessing game.',
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
    tags: [
      'Full-Stack Web Development',
      'API Design',
      'Third-Party API',
      'Game Design',
    ],
    link: 'https://cinefind.vercel.app/',
    code: 'https://github.com/aross2010/cinefind',
  },
  {
    name: 'Premier League Analysis',
    image: pl,
    description:
      'Wrote Python scripts to scrape public football data from FBref, generated structured datasets, designed a MySQL schema, and performed advanced SQL analysis on team and player performance from the 23–24 season.',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: mysql,
        alt: 'mysql',
      },
      {
        src: pandas,
        alt: 'pandas',
      },
      {
        src: beautifulsoup,
        alt: 'beautifulsoup',
      },
    ],
    link: null,
    code: 'https://github.com/aross2010/premier-league-analysis',
  },
]

export const experiences = [
  {
    title: 'Operations Manager',
    subtitle: 'AMC Theatres',
    image: amc,
    dates: 'Mar. 2022 - Aug. 2022',
    description:
      'Managed HR functions such as recruiting, payroll, training, and optimizing team schedules to save $10K+ quarterly.',
  },
  {
    title: 'Software Engineer',
    subtitle: 'Cinefind',
    link: 'https://cinefind.app',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next.js',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: mongodb,
        alt: 'mongodb',
      },
    ],
    tags: [
      'Automation Engineering',
      'Full-Stack Web Development',
      'API Design',
      'Third-Party Data',
      'UX Design',
      'Real-Time Notifications',
      'Subscription Billing',
    ],
    image: cinefindLogo,
    dates: 'Jun. 2024 - present',
    description:
      'Built and launched the full technical stack, using Python for web automation and real-time alerts, and Next.js with MongoDB for the web platform.',
    emphasized: true,
  },
  {
    title: 'Lead Basketball Instructor',
    subtitle: 'Lifetime Activities',
    image: lifetime,
    dates: 'Jul. 2024 - present',
    description:
      'Orchestrated basketball skills programs for children and teens, achieving 25% enrollment growth per eight weeks.',
  },
  {
    title: 'B.S. Software Engineering',
    subtitle: 'San Jose State University',
    tech: [
      {
        src: java,
        alt: 'java',
      },
      {
        src: python,
        alt: 'python',
      },
      {
        src: sql,
        alt: 'sql',
      },
      {
        src: mysql,
        alt: 'mysql',
      },
      {
        src: c,
        alt: 'c',
      },
      {
        src: flask,
        alt: 'flask',
      },
    ],
    image: sjsu,
    dates: 'Dec. 2025',
    description:
      'Led diverse teams on various software development projects, utilizing SDLC methodologies to deliver high-quality solutions.',
    gpa: 3.8,
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
