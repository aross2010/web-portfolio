import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  href,
  className,
  ...rest
}: ButtonProps) {
  const button = (
    <button
      className={`border border-sjsu-gold disabled:brightness-75 font-light mr-4 text-sjsu-gold rounded-lg py-3 px-8 [&:not(:disabled)]:hover:bg-sjsu-gold flex items-center justify-center gap-2 [&:not(:disabled)]:hover:text-white transition-all cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  )

  return !href ? (
    button
  ) : (
    <Link
      href={href}
      target="_blank"
    >
      {button}
    </Link>
  )
}
