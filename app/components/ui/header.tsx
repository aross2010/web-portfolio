import React from 'react'

type HeaderProps = {
  children: React.ReactNode
  className?: string
}

export default function Header({ children, className }: HeaderProps) {
  return (
    <h1 className={`text-3xl font-semibold mb-12 tracking-wider ${className}`}>
      {children}
    </h1>
  )
}
