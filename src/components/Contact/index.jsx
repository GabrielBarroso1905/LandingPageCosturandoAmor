import React, { useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import 'font-awesome/css/font-awesome.min.css';
import emailjs from 'emailjs-com';
import { Spinner } from '../Spinner';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = ({ data, sectionId, background }) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const [isEmailSent, setIsEmailSent] = useState(false); 
  const [isSendingEmail, setIsSendingEmail] = useState(false); // Novo estado para controlar o envio do email
  const [bntClicado, setBntClicado] = useState(false); // Novo estado para controlar o envio do email

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleCopyEmail = () => {
    // Copy the email address to the clipboard
    const emailElement = document.createElement('textarea');
    emailElement.value = data ? data.email : '';
    document.body.appendChild(emailElement);
    emailElement.select();
    document.execCommand('copy');
    document.body.removeChild(emailElement);

    // Show the confirmation message
    alert('Email copiado para a área de transferência!');
  };


  const handleSubmit = (e) => {
    setBntClicado(true)
    e.preventDefault();
    console.log(name, email, message);
    setIsSendingEmail(true); 
    emailjs
      .sendForm('gmailMassage', 'template_84p6leq', e.target, 'ad0N9gF7s1SE9x22z')
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true); // Update state to indicate that the email was successfully sent
          setIsSendingEmail(false); 
        },
        (error) => {
          console.log(error.text);
          setIsSendingEmail(false);
        }
      );
  }
  console.log(name, email, message)
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
          <Styled.Form validate onSubmit={handleSubmit}>
          
                <div >
                  <div >
                    <div >
                    <Styled.FormControl
                      type='text'
                    
                      name='name'
                     
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
                       
                        name='email'
                       
                        placeholder='Email'
                        required
                        onChange={handleChange}
                        />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div >
                  <Styled.FormControlText
                    name='message'
                 
                    className='form-control'

                    placeholder='Message'
                    required
                    onChange={handleChange}
                    ></Styled.FormControlText>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
             
                <Styled.TextEnd> 
                  
                <Styled.Btn colorDark={background}  disabled={bntClicado} >
                 Enviar Mensagem
                </Styled.Btn>
                
            </Styled.TextEnd>
            </Styled.Form>
            <Styled.BtnSpinner> 
            {isEmailSent &&<TextComponent >Obrigado! Mensagem enviada com sucesso.</TextComponent>}
            {isSendingEmail &&<Spinner colorDark={!background} />}
          
            </Styled.BtnSpinner> 
            
        <Styled.TextCenter>
        <Heading size="small" colorDark={!background} as="h3">
          Contact Info
        </ Heading>
        </Styled.TextCenter>
      
      <Styled.ContactInfo>
      <Styled.ContactItem>
     
          <Styled.A  colorDark={!background} href={data ? data.instagram : '/'}>
            <i className="fa fa-instagram fa-3x"></i>
            <p>
            <span>
              <i className="fa fa-instagram"></i>
            </span>
            {data ? data.address : 'loading'}
          </p>
          </Styled.A> 
      
          
            </Styled.ContactItem>
            <Styled.ContactItem>
              <Styled.A colorDark={!background} href={data ? data.wpp : '/'}>
                <i className="fa fa-whatsapp fa-3x"></i>
                <p>
            <span>
              <i className="fa fa-phone"></i>Phone
            </span>{' '}
            {data ? data.phone : 'loading'}
          </p>
              </Styled.A>
            </Styled.ContactItem>
            <Styled.ContactItem>
              <Styled.A colorDark={!background}  href={data ? data.linkGmail : '/'} onClick={handleCopyEmail}>
                <i className="fa fa-envelope fa-3x"></i>
                <p>
            <span>
              <i className="fa fa-envelope-o"></i> Email
            </span>{' '}
            {data ? data.email : 'loading'}
          </p>
              </Styled.A>
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
