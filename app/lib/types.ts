import { StaticImageData } from 'next/image'

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
