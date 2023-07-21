import { Base } from '../Base';
import { GridImage } from '../../components/GridImage';
import { mockBase } from '../Base/mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import mock from '../../components/GridContent/mock'; 
import { GridVideo } from '../../components/GridVideo';
import { Contact } from '../../components/Contact';; // Substitua pelo caminho correto para o componente Contact


export const Home = () => {
  const section = {
    title: 'Galeria',
    description: 'Breve descrição',
    grid: [
      {
        
        altText: 'Teste 1',
        srcImg: 'https://source.unsplash.com/random/800x800?r=1',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=2',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=3',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=4',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=5',
      },
      {
        altText: 'Teste 2',
        srcImg: 'assets/images/5.jpg',
      },
      // Adicione mais objetos conforme necessário
    ],
  };

  const args = {
    title: 'Grid two columns',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore',
    srcImg: 'assets/images/javascript.svg',
  };
  const contactData = {
    address: '123 Main Street, City',
    phone: '123-456-7890',
    email: 'contact@example.com',
    instagram: 'https://www.instagram.com',
    wpp: 'https://api.whatsapp.com/send?phone=559898069862&text=teste',
    // linkGmail: "mailto:gabrielmenezes1905@gmail.com?subject=Teste&body=teste"

  };
  const argsGridContent = {
    title: mock.title,
    html: mock.html,
  
  };
  const key = 'chave-unica'; // Defina uma chave única para o componente GridImage

  return (
    <>
      <Base {...mockBase} >
        <GridTwoColumns {...args} background sectionId = 'target1'/>
        <GridContent {...argsGridContent}  sectionId = 'target2'/>
        <GridText {...gridMock}  background sectionId = 'target3'/>
        <GridVideo
         const videoUrl = 'https://www.youtube.com/watch?v=HGTJBPNC-Gw'
         text="Texto que será exibido em cima do vídeo"
         sectionId="target4" // Seu valor dependerá do uso específico da prop no componente SectionBackground
         />
        <GridImage key={key}{...section} sectionId = 'target5' background/>
        <Contact data={contactData} sectionId = 'target6' />
      </Base>
    </>
  );
};

export default Home;
