import { Base } from '../Base';
import { GridImage } from '../../components/GridImage';
import { mockBase } from '../Base/mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import mock from '../../components/GridContent/mock';
import { Link } from 'react-scroll';
export const Home = () => {
  const section = {
    title: 'Galeria',
    description: 'Breve descrição',
    grid: [
      {
        
        altText: 'Teste 1',
        srcImg: 'assets/images/6.jpg',
      },
      {
        altText: 'Teste 2',
        srcImg: 'assets/images/1.jpg',
      },
      {
        altText: 'Teste 2',
        srcImg: 'assets/images/2.jpg',
      },
      {
        altText: 'Teste 2',
        srcImg: 'assets/images/3.jpg',
      },
      {
        altText: 'Teste 2',
        srcImg: 'assets/images/4.jpg',
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
    srcImg: 'assets/images/semfundo.jpg',
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
        <GridContent {...argsGridContent} sectionId = 'target2'/>
        <GridText {...gridMock} background sectionId = 'target3'/>
        <GridImage key={key}{...section} sectionId = 'target4' />
      </Base>
    </>
  );
};

export default Home;
