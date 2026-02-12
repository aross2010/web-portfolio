import { StaticImageData } from 'next/image'
import { links } from '@/app/lib/data'

export type ProjectType = {
  name: string
  image: StaticImageData | string
  description: string
  tech: {
    src: StaticImageData
    alt: string
  }[]
  link: string | null
  code: string | null
  isApp?: boolean
}

export type TimelineElement = {
  dates: string
  title: string
  subtitle: string
  description: string
  image: StaticImageData
  gpa?: number
  link?: string
  education?: boolean
}

export type Section = (typeof links)[number]['label']
