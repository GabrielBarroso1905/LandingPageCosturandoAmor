// stories
import React from 'react';
import { AboutUs } from '.'; // Substitua pelo caminho correto para o componente AboutUs

const contactData = { 
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  Why: ['Integridade', 'Responsabilidade', 'Profissionalismo'],
  Why2: ['Direcionamento', 'Resultados', 'Lucros'],
 
  
};

export default {
  title: 'AboutUs', // Nome do componente
  component: AboutUs, // O componente que será utilizado nos stories
  args: {
    data: contactData, // Passa os dados para o componente através dos argumentos
  },
  
};

export const Template = (args) => <AboutUs {...args} background={false} />;
