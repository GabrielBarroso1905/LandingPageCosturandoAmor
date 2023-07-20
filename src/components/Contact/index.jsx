import React, { useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import 'font-awesome/css/font-awesome.min.css';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = ({ data, sectionId, background }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = state;
    console.log(name, email, message);

    emailjs
      .sendForm('gmailMassage', 'template_84p6leq', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colorDark={!background} uppercase as="h2">
          Get In Touch
        </Heading>
       
          <TextComponent >
            Please fill out the form below to send us an email, and we will
            get back to you as soon as possible.
          </TextComponent>
          <Styled.Form>
          <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                    <Styled.FormControl
                      type='text'
                      id='name'
                      name='name'
                      className='form-control'
                      placeholder='Name'
                      required
                      onChange={handleChange}
                    
                    />
                    <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                    <Styled.FormControl
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                        />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <Styled.FormControlText
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                    ></Styled.FormControlText>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
             
                <Styled.TextEnd>   <Styled.Btn  type='submit' className='btn btn-custom btn-lg'>
                Send Message
                </Styled.Btn>
                </Styled.TextEnd>
              </form>
            </Styled.Form>
        <Styled.TextCenter>
        <TextComponent>
          Contact Info
        </TextComponent>
        </Styled.TextCenter>
      
      <Styled.ContactInfo>
      <Styled.ContactItem>
     
          <Styled.A href={data ? data.instagram : '/'}>
            <i className="fa fa-instagram fa-2x"></i>
          </Styled.A> 
      
           
            </Styled.ContactItem>
            <Styled.ContactItem>
              <Styled.A href={data ? data.wpp : '/'}>
                <i className="fa fa-whatsapp fa-2x"></i>
              </Styled.A>
            </Styled.ContactItem>
            <Styled.ContactItem>
              <Styled.A>
                <i className="fa fa-envelope fa-2x"></i>
              </Styled.A>
            </Styled.ContactItem>
      </Styled.ContactInfo>
      <Styled.ContactInfo>
      <Styled.ContactItem>  
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
              <i className="fa fa-phone"></i>Phone
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

       
      </Styled.Container>
    </SectionBackground>
  );
};
Contact.propTypes = {
  data: P.shape({
    address: P.string,
    phone: P.string,
    email: P.string,
    facebook: P.string,
    twitter: P.string,
  }),
  sectionId: P.string,
};

export default Contact;
