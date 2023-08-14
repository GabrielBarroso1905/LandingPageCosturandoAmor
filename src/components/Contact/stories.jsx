import React from 'react';
import { Contact } from '.'; // Substitua pelo caminho correto para o componente Contact

const contactData = {
  address: 'asf.capital',
  phone: '(98) 8628-1111',
  email: 'GabrielMenezes1905@gmail.com',
  instagram: 'https://www.instagram.com/asf.capital/?hl=pt-br',
  wpp: 'https://api.whatsapp.com/send?phone=559886281111&text=Olá',
  linkGmail: "mailto:gabrielmenezes1905@gmail.com?subject=Teste&body=teste"
};

export default {
  title: 'Contact', // Nome do componente
  component: Contact, // O componente que será utilizado nos stories
  args: {
    data: contactData, // Passa os dados para o componente através dos argumentos
  },
};

export const Template = (args) => <Contact {...args}  background={true} />;
