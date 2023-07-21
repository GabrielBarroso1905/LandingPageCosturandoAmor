import React from 'react';
import { Contact } from '.'; // Substitua pelo caminho correto para o componente Contact

const contactData = {
  address: '123 Main Street, City',
  phone: '123-456-7890',
  email: 'contact@example.com',
  instagram: 'https://www.instagram.com',
  wpp: 'https://api.whatsapp.com/send?phone=559898069862&text=teste',
  linkGmail: "mailto:gabrielmenezes1905@gmail.com?subject=Teste&body=teste"
};

export default {
  title: 'Contact', // Nome do componente
  component: Contact, // O componente que será utilizado nos stories
  args: {
    data: contactData, // Passa os dados para o componente através dos argumentos
  },
};

export const Template = (args) => <Contact {...args} />;
