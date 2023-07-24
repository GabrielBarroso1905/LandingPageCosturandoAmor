import React from 'react';
import { Spinner } from '.'; // Verifique o caminho correto para o componente Spinner
export default {
    title: 'Spinner', // O título que será exibido no Storybook
    component: Spinner, // O componente que você deseja criar uma história
  };
  
  // História básica com o Spinner padrão
  export const Template = () => <Spinner/>;
  