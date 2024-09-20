import React from 'react';
import { GridImage2 } from '.'; // Substitua pelo caminho correto para o componente GridImage2
import mock from './mock';

const galleryData = {
  paragraph: 'Cada imagem representa um momento especial que marca nossa jornada no CapacitaTech.',
  images: mock.images,

};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GridImage2', // Nome do componente
  component: GridImage2, // O componente que será utilizado nos stories
  args: {
    data: galleryData, // Passa os dados para o componente através dos argumentos
  },
};

export const Template = (args) => <GridImage2 {...args} background={false} />;
