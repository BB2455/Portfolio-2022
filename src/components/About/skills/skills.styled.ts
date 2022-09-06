import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SkillsContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 2rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  padding: 2rem 0;
  margin-bottom: 1rem;
  width: 100%;
  margin-top: -4rem;
`

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  flex: 1 1;
  word-break: break-all;
`

export const MidSkillContainer = styled(SkillContainer)`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`

export const SkillIcon = styled(FontAwesomeIcon)`
  width: 3rem;
  height: 3rem;
`

export const SkillIconBackground = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  border-radius: 50%;
`

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`
