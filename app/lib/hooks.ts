import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../context/section-context'
import { Section } from './types'

export function useSectionInView(sectionName: Section, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName)
  }, [inView, timeOfLastClick, sectionName, setActiveSection])

  return {
    ref,
  }
}

export function useWindowSizeHook() {
  const [width, setWidth] = useState<number>(1920)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}
