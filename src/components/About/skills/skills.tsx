import React from 'react'
import {
  SkillsContainer,
  SkillContainer,
  MidSkillContainer,
  SkillIcon,
  SkillIconBackground,
  SkillContent,
} from './skills.styled'
import { Container } from '../../shared'
import { faCode, faFileCode, faHammer } from '@fortawesome/free-solid-svg-icons'
import { aboutMe } from '../../../config/settings'

const Skills: React.FC = () => {
  return (
    <Container>
      <SkillsContainer>
        <SkillContainer>
          <SkillIconBackground>
            <SkillIcon icon={faCode} />
          </SkillIconBackground>
          <h2>Languages</h2>
          <SkillContent>
            {aboutMe.skills.languages.map((text, i) => (
              <p key={`language-${i}`}>{text}</p>
            ))}
          </SkillContent>
        </SkillContainer>
        <MidSkillContainer>
          <SkillIconBackground>
            <SkillIcon icon={faFileCode} />
          </SkillIconBackground>
          <h2>Technologies</h2>
          <SkillContent>
            {aboutMe.skills.technologies.map((text, i) => (
              <p key={`technologies-${i}`}>{text}</p>
            ))}
          </SkillContent>
        </MidSkillContainer>
        <SkillContainer>
          <SkillIconBackground>
            <SkillIcon icon={faHammer} />
          </SkillIconBackground>
          <h2>Tools</h2>
          <SkillContent>
            {aboutMe.skills.tools.map((text, i) => (
              <p key={`tools-${i}`}>{text}</p>
            ))}
          </SkillContent>
        </SkillContainer>
      </SkillsContainer>
    </Container>
  )
}

export default Skills
