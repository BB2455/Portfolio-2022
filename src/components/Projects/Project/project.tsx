import React from 'react'
import {
  ProjectContainer,
  ProjectPicture,
  ProjectContent,
  ProjectLinks,
  ProjectLink
} from './project.styled'
import { ShowMore } from '../../shared'

type Props = {
  img: {
    webp?: string
    fallback?: string
  }
  title: string
  description: string
  github?: string
  liveSite?: string
}

const Project: React.FC<Props> = ({
  title,
  description,
  github,
  liveSite,
  img,
}) => {
  return (
    <ProjectContainer>
      <ProjectPicture>
        <source type="image/webp" srcSet={img?.webp} />
        <img
          alt="Full Stack Application Preview"
          decoding="async"
          loading="lazy"
          data-src={img?.fallback}
        />
      </ProjectPicture>
      <ProjectContent>
        <h2>{title}</h2>
        <ShowMore>{description}</ShowMore>
        <ProjectLinks>
          {github && (
            <ProjectLink href={github} target="_blank" rel="noreferrer">
              GitHub
            </ProjectLink>
          )}
          {liveSite && (
            <ProjectLink href={liveSite} target="_blank" rel="noreferrer">
              Live Site
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default Project
