import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaEnvelope,
  FaBookOpen,
  FaLetterboxd,
  FaSquareLetterboxd,
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
import giants from '@/public/giants.png'
import amc from '@/public/amc.png'
import lifetime from '@/public/lifetime.png'
import sjsu from '@/public/sjsu.png'
import cinefindLogoC from '@/public/cinefind-logo-c.png'
import figma from '@/public/figma.png'
import niners from '@/public/49ers.png'
import scikit from '@/public/scikit.png'
import pandas from '@/public/pandas.png'
import shap from '@/public/shap.png'
import twitterBot from '@/public/twitter-bot.png'
import githubBanner from '@/public/git-banner.jpg'
import pl from '@/public/pl.png'
import beautifulsoup from '@/public/beautifulsoup.png'
import cinefindWebApp from '@/public/cinefind-web-app.png'
import cinefindEngine from '@/public/cinefind-banner.png'
import mailgun from '@/public/mailgun.png'
import expo from '@/public/expo.png'
import postgres from '@/public/postgres.png'
import selenium from '@/public/selenium.png'
import spotter from '@/public/spotter.png'
import swift from '@/public/swift.png'
import aws from '@/public/aws.png'
import stripe from '@/public/stripe.png'
import dumbbell from '@/public/dumbbell.png'
import opencv from '@/public/opencv.png'
import yolo from '@/public/yolo.png'
import heatcheck from '@/public/heatcheck.png'

export const links = [
  {
    hash: '#home',
    label: 'Home',
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
    hash: '#connect',
    label: 'Connect',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alex-ross-32b278236/',
    color: '#0072B1',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/aross2010',
    color: '#C0C0C0',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:adross1027@gmail.com',
    color: '#E5A823',
  },
  {
    name: 'Letterboxd',
    icon: FaSquareLetterboxd,
    href: 'https://letterboxd.com/aross2010/',
    color: '#ff8000',
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
    name: 'React.js',
    image: react,
  },
  {
    name: 'Next.js',
    image: next,
  },
  {
    name: 'React Native',
    image: react,
  },
  {
    name: 'Swift',
    image: swift,
  },
  {
    name: 'Expo',
    image: expo,
  },
  {
    name: 'Node.js',
    image: node,
  },
  {
    name: 'Express',
    image: express,
  },
  {
    name: 'MongoDB',
    image: mongodb,
  },
  {
    name: 'PostgreSQL',
    image: postgres,
  },
  {
    name: 'MySQL',
    image: mysql,
  },

  {
    name: 'Selenium',
    image: selenium,
  },
  {
    name: 'AWS',
    image: aws,
  },
] as const

export const projects = [
  {
    name: 'Spotter',
    image: spotter,
    description:
      'Designed, developed, shipped, and maintained Spotter, a fully customizable workout tracking app on iOS built for weightlifters.',
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
        src: expo,
        alt: 'expo',
      },
      {
        src: postgres,
        alt: 'postgreSQL',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
    ],
    link: 'https://apps.apple.com/app/id6754656428',
    isApp: true,
    code: 'https://github.com/aross2010/spotter',
  },
  {
    name: 'Heat Check',
    description:
      'Trained a YOLOv8 model at 96% accuracy to detect basketball shots and deployed it to a mobile app that classifies makes and misses in real time using on-device TFLite inference.',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: opencv,
        alt: 'opencv',
      },
      {
        src: yolo,
        alt: 'yolo',
      },
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react native',
      },
      {
        src: expo,
        alt: 'expo',
      },
      {
        src: node,
        alt: 'node.js',
      },
      {
        src: postgres,
        alt: 'postgres',
      },
    ],
    image: heatcheck,
    code: 'https://github.com/aross2010/heat-check',
  },
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
    code: 'https://github.com/aross2010/twitter-bot-detector',
  },
  {
    name: 'Vinyl Bot',
    image: vinylBot,
    description:
      'Built automated Python scripts on AWS EC2 to send real-time email alerts for vinyl releases by integrating with the Discogs API to monitor wantlist records.',
    tech: [
      {
        src: python,
        alt: 'python',
      },
      {
        src: aws,
        alt: 'aws',
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
    code: 'https://github.com/aross2010/spotlefy',
  },
  {
    // when num of projects is odd, promote other projects on larger screens, KEEP LAST
    name: 'Additional Projects',
    image: githubBanner,
    description:
      'Check out my GitHub for more projects beyond the scope of my portfolio including AI testing automation, embeddded systems, Java desktop apps, and more!',
    tech: [
      {
        src: c,
        alt: 'c',
      },
      {
        src: java,
        alt: 'java',
      },
      {
        src: sql,
        alt: 'sql',
      },
      {
        src: python,
        alt: 'python',
      },
      {
        src: selenium,
        alt: 'selenium',
      },
    ],
    code: 'https://github.com/aross2010',
  },
]

export const experiences = [
  {
    title: 'Software Engineer',
    subtitle: 'Cinefind',
    link: 'https://cinefind.app',
    image: cinefindLogoC,
    dates: 'Jun. 2024 - Aug. 2025',
    description:
      'Built and scaled Cinefind into a production web platform used by thousands of users, working full-stack on authentication, web scraping, subscriptions and payments (Stripe), automated email alerts, booking flows, automated screening RSVPs, system design, and production releases.',
    type: 'work',
  },
  {
    title: 'B.S. Software Engineering',
    subtitle: 'San Jose State University',
    image: sjsu,
    dates: 'Dec. 2025',
    description:
      'Led various software developement projects in machine learning, AI, mobile development, web development, QA, information security, databases, and more.',
    gpa: 3.6,
    type: 'education',
  },
  {
    title: 'Software Engineer — Mobile',
    subtitle: 'Spotter',
    link: 'https://apps.apple.com/app/id6754656428',
    image: dumbbell,
    dates: 'Jul. 2025 - present',
    description:
      'Designed, developed, shipped, and maintained Spotter, a workout tracking app built for weightlifters.',
    type: 'work',
  },
]
