import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import mock from '../../components/GridContent/mock'; 
import { Contact } from '../../components/Contact';
import { Depoimentos } from '../../components/Depoimentos';
import { AboutUs } from '../../components/AboutUs';
import { Service } from '../../components/Service';
import { ServiceV2 } from '../../components/ServiceV2';
; // Substitua pelo caminho correto para o componente Contact


export const Home = () => {


  const args = {
    title: 'ASF Capital',
  
    text: `Uma holding focada em estabelecer processos comerciais B2B para chegar mais rápido e
     com menos burocracia a um aumento de faturamento de 20 a 50% todos os meses.`,
    
     srcImg: 'assets/images/LogoSFC.png',
    };
const contactData = {
  address: 'gabrielb_barroso',
  phone: '(98) 4002-8922',
  email: 'GabrielMenezes1905@gmail.com',
  instagram: 'https://www.instagram.com/gabrielb_barroso/',
  wpp: 'https://api.whatsapp.com/send?phone=559898069862&text=teste',

};
const argsServices= {
  title: 'Depoimentos', // Defina os valores desejados para title e description
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
    Why: ['Integridade', 'Responsabilidade', 'Profissionalismo'],
    Why2: ['Direcionamento', 'Resultados', 'Lucros'],    
  };

 
  
  return (
    <>
      <Base {...mockBase} >
        <GridTwoColumns {...args}  background sectionId = 'target1'/>
        <GridContent {...argsGridContent} sectionId = 'target2'/>
        <AboutUs data={contactData2} background={false} sectionId = 'target3'/>
        <ServiceV2  background= {true} color={'black'}sectionId = 'target4' />
        <Service {...argsServices} color={"#fa9348"} background= {true} sectionId = 'target5' />
        <Depoimentos  background= {false} />
        <Contact data={contactData}  sectionId = 'target6' />
      </Base>
    </>
  );
};


export default Home;
