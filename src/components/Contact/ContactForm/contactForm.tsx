import React from 'react'
import {
  FormContainer,
  Form,
  InputDiv,
  FormInput,
  FormLabel,
  FormTextArea,
  SubmitButton,
} from './contactForm.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ContactForm: React.FC = () => {
  return (
    <FormContainer>
      <Form>
        <InputDiv>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" placeholder="Enter Your Name" />
        </InputDiv>
        <InputDiv>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" placeholder="Enter Your Email" />
        </InputDiv>
        <InputDiv>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea
            name="message"
            id="message"
            placeholder="Enter Your Message"
          ></FormTextArea>
        </InputDiv>
        <SubmitButton type="submit" >
          Submit <FontAwesomeIcon icon={faPaperPlane} />
        </SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default ContactForm
