import styled from 'styled-components'

export const FooterDiv = styled.footer`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-end;
  width: 100%;
`

export const BackgroundContainer = styled.div`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  display: flex;
  justify-content: center;
`

export const TopDiv = styled.div`
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  min-width: 100%;
`

export const ContentDiv = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 50%;
`

export const IconDiv = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
`

export const CenterDiv = styled.div`
  text-align: center;
  padding: 32px;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.white};
`
