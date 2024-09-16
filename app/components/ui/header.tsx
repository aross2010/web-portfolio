import { motion } from 'framer-motion'

type HeaderProps = {
  children: React.ReactNode
  animateOpacity?: boolean
  className?: string
}

export default function Header({
  children,
  animateOpacity,
  className,
}: HeaderProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: animateOpacity ? 0 : -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className={`text-3xl font-semibold mb-16 tracking-wider ${className}`}
    >
      {children}
    </motion.h1>
  )
}
