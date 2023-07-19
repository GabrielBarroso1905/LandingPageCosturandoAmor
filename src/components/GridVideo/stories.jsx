import { GridVideo } from '.';


export default {
  title: 'GridVideo',
  component: GridVideo,
};

export const Template = (args) => {
  return (
        <GridVideo
         const videoUrl = 'https://www.youtube.com/watch?v=HGTJBPNC-Gw'
         text="Texto que será exibido em cima do vídeo"
         background={true} // Seu valor dependerá do uso específico da prop no componente SectionBackground
         sectionId="seu-id-aqui" // Seu valor dependerá do uso específico da prop no componente SectionBackground
         />
  );
};
