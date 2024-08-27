'use client'
import { useFormStatus } from 'react-dom'
import Button from './button'
import { Fragment } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

type SubmitButtonProps = {
  children: React.ReactNode
  className?: string
}

export default function SubmitButton({
  children,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      type="submit"
      className={className}
    >
      {pending ? (
        <Fragment>
          Submitting...
          <AiOutlineLoading className="animate-spin text-xl" />
        </Fragment>
      ) : (
        children
      )}
    </Button>
  )
}
