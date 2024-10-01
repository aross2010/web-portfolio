type TextAreaProps = {
  className?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={`w-full p-2 bg-transparent resize-none h-24 outline-none rounded-none ring-0 border-b-2 font-medium focus:border-b-sjsu-gold border-gray-400 placeholder:text-gray-400 focus:placeholder:text-sjsu-gold ${className}`}
      {...rest}
    />
  )
}
