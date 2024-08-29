import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  subject: string
  message: string
  email: string
}

export default function ContactFormEmail({
  subject,
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message for Portfolio</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section className="p-4">
              <Heading className="leading-tight">
                You received an email from your portfolio!
              </Heading>
              <Text>Subject - {subject}</Text>
              <Text>{message}</Text>
              <Hr />
              <Text>From - {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
