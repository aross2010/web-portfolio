import { StaticImageData } from 'next/image'
import { links } from '@/app/lib/data'

export type ProjectType = {
  name: string
  image: StaticImageData
  description: string
  tech: {
    src: StaticImageData
    alt: string
  }[]
  link: string | null
  code: string
}

export type TimelineElement = {
  dates: string
  title: string
  subtitle: string
  description: string
  image: StaticImageData
  gpa?: number
}

export type Section = (typeof links)[number]['label']
