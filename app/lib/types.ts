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
  link?: string // direct link to project (website)
  code?: string // link to github repo
  isApp?: boolean // project link to app store
}

export type TimelineElement = {
  dates: string // either a single date (grad date) or a range (work experience)
  title: string
  subtitle: string
  description: string
  image: StaticImageData
  gpa?: number
  link?: string // link to company or school
  type: 'work' | 'education' | 'certification'
}

export type Section = (typeof links)[number]['label']
