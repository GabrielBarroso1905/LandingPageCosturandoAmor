import React, { useState } from 'react';
import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = ({ data, sectionId }) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    // Add your email sending logic here if needed
    // This function will not send the email automatically
    clearState();
  };

  return (
    <SectionBackground background={false} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase as="h2">
          Get In Touch
        </Heading>
        <Styled.Description>
          <TextComponent>
            Please fill out the form below to send us an email, and we will
            get back to you as soon as possible.
          </TextComponent>
        </Styled.Description>
        <Styled.Form name="sentMessage" validate onSubmit={handleSubmit}>
          <Styled.Row>
            <Styled.Col>
              <Styled.Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <Styled.HelpBlock></Styled.HelpBlock>
            </Styled.Col>
            <Styled.Col>
              <Styled.Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <Styled.HelpBlock></Styled.HelpBlock>
            </Styled.Col>
          </Styled.Row>
          <Styled.TextArea
            name="message"
            id="message"
            rows="4"
            placeholder="Message"
            required
            onChange={handleChange}
          ></Styled.TextArea>
          <Styled.HelpBlock></Styled.HelpBlock>
          <Styled.SuccessMessage id="success"></Styled.SuccessMessage>
          <Styled.CustomButton type="submit">Send Message</Styled.CustomButton>
        </Styled.Form>
        <Styled.ContactInfo>
          <Styled.ContactItem>
            <h3>Contact Info</h3>
            <p>
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>
              {data ? data.address : 'loading'}
            </p>
          </Styled.ContactItem>
          <Styled.ContactItem>
            <p>
              <span>
                <i className="fa fa-phone"></i> Phone
              </span>{' '}
              {data ? data.phone : 'loading'}
            </p>
          </Styled.ContactItem>
          <Styled.ContactItem>
            <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>{' '}
              {data ? data.email : 'loading'}
            </p>
          </Styled.ContactItem>
        </Styled.ContactInfo>
        <Styled.Social>
          <ul>
            <li>
              <a href={data ? data.facebook : '/'}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={data ? data.twitter : '/'}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={data ? data.youtube : '/'}>
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </Styled.Social>
      </Styled.Container>
    </SectionBackground>
  );
};

Contact.propTypes = {
  data: P.object,
  sectionId: P.string,
};
