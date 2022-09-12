import React from 'react'
// Settings
import { links } from '../../config/settings'
// Styles
import { Container, IconLink } from '../shared'
import {
  FooterDiv,
  BackgroundContainer,
  TopDiv,
  CenterDiv,
  ContentDiv,
  IconDiv,
} from './footer.styled'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { footer } from '../../config/settings'

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <BackgroundContainer>
        <Container>
          <TopDiv>
            <ContentDiv>
              <h2>{footer.title}</h2>
              <p>{footer.subTitle}</p>
            </ContentDiv>
            <ContentDiv>
              <h2>Socials</h2>
              <IconDiv>
                <IconLink
                  href={links.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Check out my GitHub"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </IconLink>
                <IconLink
                  href={links.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Connect with me on LinkedIn"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </IconLink>
                <IconLink
                  href={`mailto:${links.email}`}
                  aria-label="Send me an Email!"
                  title="Email Me!"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconLink>
              </IconDiv>
            </ContentDiv>
          </TopDiv>
          <CenterDiv>
            <p>{footer.madeBy}</p>
          </CenterDiv>
        </Container>
      </BackgroundContainer>
    </FooterDiv>
  )
}

export default Footer
