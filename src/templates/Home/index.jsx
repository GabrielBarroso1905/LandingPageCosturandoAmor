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
    title: 'Título do Grid',
    description: 'Descrição do GridDescrição do GridDescrição do GridDescrição do GridDescrição do Grid',
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
        srcImg: 'https://source.unsplash.com/random/800x800?r=6',
      },
      // Adicione mais objetos conforme necessário
    ],
  };

  const args = {
    title: 'Grid two columns',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore',
    srcImg: 'assets/images/javascript.svg',
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
