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
      <Form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </div>
        <InputDiv>
          <FormLabel htmlFor="name" title="Enter Your Name">
            Name
          </FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter Your Name"
            title="Enter Your Name"
          />
        </InputDiv>
        <InputDiv>
          <FormLabel htmlFor="email" title="Enter Your Email">
            Email
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter Your Email"
            title="Enter Your Email"
          />
        </InputDiv>
        <InputDiv>
          <FormLabel htmlFor="message" title="Enter Your Message">
            Message
          </FormLabel>
          <FormTextArea
            name="message"
            id="message"
            required
            placeholder="Enter Your Message"
            title="Enter Your Message"
          ></FormTextArea>
        </InputDiv>
        <SubmitButton type="submit" title="Submit">
          Submit <FontAwesomeIcon icon={faPaperPlane} />
        </SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default ContactForm
