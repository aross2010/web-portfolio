type TextInputProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextInput({ className, ...rest }: TextInputProps) {
  return (
    <input
      type="text"
      className={`w-full p-2 bg-transparent outline-none rounded-none border-b-2 font-medium focus:border-b-primary border-gray-400 placeholder:text-gray-400 focus:placeholder:text-primary ${className}`}
      {...rest}
    />
  )
}
