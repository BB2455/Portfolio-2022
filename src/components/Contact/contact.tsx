import React from 'react'
import { SectionTitle, Background, Container } from '../shared'
import { IconLinksDiv, Link, Icon } from './contact.styled'
import { links } from '../../config/settings'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm'

const contact: React.FC = () => {
  return (
    <Background id="contact">
      <Container>
        <SectionTitle
          title="Dont be a stranger!"
          subtitle="Connect with me online"
        />
        <IconLinksDiv>
          <Link href={links.gitHub} target="_blank" rel="noreferrer">
            <Icon icon={faGithub} />
            GitHub
          </Link>
          <Link href={links.linkedIn} target="_blank" rel="noreferrer">
            <Icon icon={faLinkedin} />
            LinkedIn
          </Link>
          <Link href={`mailto:${links.email}`}>
            <Icon icon={faEnvelope} />
            Email Me!
          </Link>
        </IconLinksDiv>
        <SectionTitle
          title="Want to send me a message?"
          subtitle="Summit a message below and I’ll get back to you as soon as possible"
        />
        <ContactForm />
      </Container>
    </Background>
  )
}

export default contact
