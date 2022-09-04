import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const FormContainer = styled.div`
  padding: 2rem 0;
  min-width: 100%;
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
  min-width: 80%;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba(233, 240, 243, 0.5),
    0px 0px 0px 1px rgba(230, 236, 248, 1);
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
  font-weight: 700;
`

export const FormInput = styled.input`
  padding: 16px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-family: inherit;
  font-weight: 600;
  :focus-visible {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    outline: none;
  }
  ::placeholder {
    color: rgba(140, 140, 140, 1);
  }
`

export const FormTextArea = styled(TextareaAutosize)`
  padding: 16px;
  resize: none;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-family: inherit;
  font-weight: 600;
  overflow: hidden;
  :focus-visible {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    outline: none;
  }
  ::placeholder {
    color: rgba(140, 140, 140, 1);
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  font-weight: 700;
  font-family: inherit;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(233, 240, 243, 0.5),
    0px 0px 0px 1px rgba(230, 236, 248, 1);
  background: ${(props) => props.theme.colors.tertiary};
  padding: 0.5rem 2rem;
  gap: 0.5rem;
  :hover,
  :focus-visible {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`
