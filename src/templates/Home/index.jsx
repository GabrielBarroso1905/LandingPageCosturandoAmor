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
import {theme} from '../../styles/theme'
; // Substitua pelo caminho correto para o componente Contact


export const Home = () => {


  const args = {
    title: 'ASF Capital',
  
    text: `Uma holding focada em estabelecer processos comerciais B2B para chegar mais rápido e
     com menos burocracia a um aumento de faturamento de 20 a 50% todos os meses.`,
    
     srcImg: 'assets/images/LogoSFC.png',
    };
const contactData = {
  address: 'asf.capital',
  phone: '(98) 8628-1111',
  email: 'EmanuelAsafe@gmail.com',
  instagram: 'https://www.instagram.com/asf.capital/?hl=pt-br',
  wpp: 'https://api.whatsapp.com/send?phone=559886281111&text=Olá',


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
    paragraph: (
      <p>
        - Nós, junto com nossos clientes, formamos uma unidade. 
        <br />
        Fundada por <strong style={{ color: theme.colors.primaryColor }}>Emanuel Asafe</strong>, nossa empresa surgiu durante a pandemia de COVID-19, quando muitos enfrentavam incertezas. 

        <p>
        </p>
        - Nasceu da necessidade de implementar processos reais e estatísticos para impulsionar faturamentos mensais de empresas.
        <p>
        - Hoje, além de garantir aumentos de lucro para nossos clientes, conquistamos seu respeito, gratidão e 
        nos tornamos <strong style={{ color: theme.colors.primaryColor }}>referência no mercado</strong>.
        </p>
        - Desde então, transformamos <strong style={{ color: theme.colors.primaryColor }}>desafios em oportunidades</strong> e crescemos juntos, oferecendo resultados tangíveis e duradouros.
      </p>
    ),
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
