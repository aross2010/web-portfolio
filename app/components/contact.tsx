import React from 'react'
import Header from './ui/header'
import TextInput from './ui/text-input'
import TextArea from './ui/textarea'
import Button from './ui/button'
import { FaPaperPlane } from 'react-icons/fa6'
import SubmitButton from './ui/submit-button'

export default function Contact() {
  return (
    <section id="contact">
      <Header className="text-center">Contact Me!</Header>
      <p className="text-center px-64 font-medium text-gray-400">
        Thank you for checking out my website! If you have any questions or
        would like to get in touch, feel free to reach out to me.
      </p>
      <form className="px-48 mt-12">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Subject" />
        </div>
        <TextArea
          placeholder="Message"
          className="mb-4"
        />
        <SubmitButton className="group">
          Send Message{' '}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
        </SubmitButton>
      </form>
    </section>
  )
}
