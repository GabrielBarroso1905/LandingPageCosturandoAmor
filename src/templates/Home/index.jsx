import { Base } from '../Base';
import { GridImage } from '../../components/GridImage';
import { mockBase } from '../Base/mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import mock from '../../components/GridContent/mock'; 
import { GridVideo } from '../../components/GridVideo';
import { Contact } from '../../components/Contact';
import { Depoimentos } from '../../components/Depoimentos';
import { AboutUs } from '../../components/AboutUs';
import { Service } from '../../components/Service';
import { ServiceV2 } from '../../components/ServiceV2';
; // Substitua pelo caminho correto para o componente Contact


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
  address: 'gabrielb_barroso',
  phone: '(98) 4002-8922',
  email: 'GabrielMenezes1905@gmail.com',
  instagram: 'https://www.instagram.com/gabrielb_barroso/',
  wpp: 'https://api.whatsapp.com/send?phone=559898069862&text=teste',

};
const argsServices= {
  title: 'Título customizado', // Defina os valores desejados para title e description
  title2: 'Título 3 customizado', // Defina os valores desejados para title e description
  description: 'Descrição customizada', // Defina os valores desejados para title e description

}
  const argsGridContent = {
    title: mock.title,
    html: mock.html,
  
  };
  const key = 'chave-unica'; // Defina uma chave única para o componente GridImage
  const contactData2 = { 
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Why: ['Razão 1', 'Razão 2', 'Razão 3'],
    Why2: ['Razão 4', 'Razão 5', 'Razão 6'],
    
  };
  return (
    <>
      <Base {...mockBase} >
        <GridTwoColumns {...args}  sectionId = 'target1'/>
        <GridContent {...argsGridContent} background sectionId = 'target2'/>
        <AboutUs data={contactData2} background={false} />
        <Service {...argsServices} background= {true} sectionId= {'seu-id-aqui'} />
        <GridText {...gridMock}   sectionId = 'target3'/>
        <GridVideo
         const videoUrl = 'https://www.youtube.com/watch?v=HGTJBPNC-Gw'
         text="Texto que será exibido em cima do vídeo"
         sectionId="target4" // Seu valor dependerá do uso específico da prop no componente SectionBackground
         background
        />
        <ServiceV2  background= {false} sectionId={"seu-id-aqui"} />
        <Depoimentos  background= {false} sectionId="target5" />
        <GridImage key={key}{...section} sectionId = 'target6' background/>
        <Contact data={contactData} sectionId = 'target7' />
      </Base>
    </>
  );
};

export default Home;
