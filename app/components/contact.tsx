'use client'
import Header from './ui/header'
import TextInput from './ui/text-input'
import TextArea from './ui/textarea'
import toast from 'react-hot-toast'
import { sendEmail } from '../functions/send-email'
import { FaPaperPlane } from 'react-icons/fa6'
import SubmitButton from './ui/submit-button'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5)

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-24"
    >
      <Header
        animateOpacity
        className="text-center"
      >
        Contact Me!
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-center lg:px-48 md:px-32 sm:px-12 text-lg text-gray-400">
          Thank you for checking out my website! If you have any questions or
          would like to get in touch, feel free to reach out to via the form
          below, or by{' '}
          <Link
            href="mailto:alex.ross@sjsu.edu"
            className="hover:text-sjsu-gold transition-all font-semibold"
          >
            email
          </Link>
          .
        </p>
        <form
          id="contact-form"
          className="lg:px-48 md:px-32 sm:px-12 mt-12"
          action={async (formData) => {
            const { error } = await sendEmail(formData)
            if (error) {
              toast.error(error)
            }
            const form = document.getElementById(
              'contact-form'
            ) as HTMLFormElement
            form.reset()
            toast.success('Message sent. Thanks for reaching out!')
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <TextInput
              placeholder="E-mail"
              type="email"
              name="email"
              required
              max={100}
            />
            <TextInput
              placeholder="Subject"
              name="subject"
              required
              min={3}
              max={200}
            />
          </div>
          <TextArea
            placeholder="Message"
            className="mb-4"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group">
            Send Message{' '}
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  )
}
