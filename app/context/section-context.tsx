'use client'

import React, { useContext } from 'react'
import { useState, createContext } from 'react'
import { Section } from '../lib/types'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: Section
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<Section>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }
  return context
}
