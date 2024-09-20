import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import mock from '../../components/GridContent/mock'; 
import { Contact } from '../../components/Contact';
import { AboutUs } from '../../components/AboutUs';
import AboutUs2 from '../../components/AboutUs2';
import { GridImage } from '../../components/GridImage';
import { GridImage2 } from '../../components/GridImage2'; // Substitua pelo caminho correto


export const Home = () => {

  const key = 'chave-unica'; // Defina uma chave única para o componente GridImage

  const args = {
    title: 'PONTE DIGITAL',
  
    "text": "    O Programa Ponte Digital conecta o IFMA à comunidade, promovendo inclusão digital e capacitação tecnológica. Através de projetos inovadores, buscamos transformar vidas ao integrar o conhecimento acadêmico com as demandas reais da sociedade.",
  
     srcImg: 'assets/images/logoPonte.png',
    };
const contactData = {
  address: 'ifma.oficial',
  phone: '(98) 8806-9862',
  email: 'digti@ifma.edu.br',
  instagram: 'https://www.instagram.com/ifma.oficial/?hl=pt',
  wpp: 'https://api.whatsapp.com/send?phone=559888069862&text=Olá',


};

const section = {
  title: 'Galeria',
  description: 'Equipes',
  grid: [
    {
      
      altText: 'Teste 1',
      srcImg: 'assets/images/1.jpeg',
    },
      
    {
      altText: 'Teste 2',
      srcImg: 'assets/images/3.jpeg',
    },
    {
      altText: 'Teste 2',
      srcImg: 'assets/images/2.jpeg',
    },
    {
      altText: 'Teste 2',
      srcImg: 'assets/images/6.jpeg',
    },
    {
      altText: 'Teste 2',
      srcImg: 'assets/images/4.jpeg',
    },

    {
      altText: 'Teste 2',
      srcImg: 'assets/images/5.jpeg',
    },
    // Adicione mais objetos conforme necessário
  ],
};





  const argsGridContent = {
    title: mock.title,
    html: mock.html,
  
  };
  const contactData2 = { 
    paragraph: (
      <p>
      - Considerando a <strong style={{ color: 'black' }}>dificuldade que alguns idosos enfrentam</strong> para navegar de forma independente em dispositivos tecnológicos, o projeto <strong style={{ color: 'black' }}>Autonomia Digital</strong> foi criado para oferecer uma solução prática.
      <br />
      - Nosso objetivo é <strong style={{ color: 'black' }}>proporcionar autonomia</strong> aos participantes através de um <strong style={{ color: 'black' }}>minicurso</strong>, capacitando-os para realizar atividades desejadas e exercer deveres cívicos no ambiente virtual.
      <p></p>
      - Com o <strong style={{ color: 'black' }}>Autonomia Digital</strong>, buscamos <strong style={{ color: 'black' }}>tornar a tecnologia acessível e independente</strong>, garantindo que os idosos possam <strong style={{ color: 'black' }}>navegar com confiança e liberdade</strong> em um mundo digital cada vez mais presente.
    </p>
    ),
    Why: ['Integridade', 'Responsabilidade', 'Profissionalismo'],
    Why2: ['Direcionamento', 'Resultados', 'Lucros'],    
  };
  const contactData3 = { 
    paragraph: (
      <p>
      - O projeto <strong style={{ color: '#00c69c' }}>Capacitatech</strong> visa <strong style={{ color: '#00c69c' }}>desenvolver e implementar</strong> um projeto de extensão universitária focado no ensino de <strong style={{ color: '#00c69c' }}>habilidades específicas em informática</strong> para a comunidade.
      <br />
      - O foco principal está em <strong style={{ color: '#00c69c' }}>ferramentas de escritório do Google Docs</strong>, com o objetivo de <strong style={{ color: '#00c69c' }}>capacitar os participantes</strong> para o uso eficaz de tecnologias digitais em suas vidas pessoais e profissionais.
      <p></p>
      - Com o <strong style={{ color: '#00c69c' }}>Capacitatech</strong>, buscamos <strong style={{ color: '#00c69c' }}>proporcionar conhecimentos práticos</strong> que permitirão aos participantes <strong style={{ color: '#00c69c' }}>otimizar suas atividades diárias</strong> e melhorar seu desempenho no ambiente de trabalho.
    </p>
    ),
    Why: ['Integridade', 'Responsabilidade', 'Profissionalismo'],
    Why2: ['Direcionamento', 'Resultados', 'Lucros'],    
  };

  const contactData4 = { 
    paragraph: (
      <p>
  - O mercado de <strong style={{ color: 'black' }}>tecnologia da informação</strong> está em constante crescimento, e a demanda por <strong style={{ color: 'black' }}>profissionais qualificados</strong> cresce a passos rápidos, superando a capacidade de formação dos institutos e universidades. 
  <br />
  - O <strong style={{ color: 'black' }}>InspiraTech Jovem</strong> surge para preencher essa lacuna, incentivando e <strong style={{ color: 'black' }}>preparando jovens</strong> para ingressar nesse setor promissor.
  <p></p>
  - Nosso objetivo é <strong style={{ color: 'black' }}>expandir a formação de profissionais</strong>, oferecendo oportunidades e recursos que serão o passo inicial para que eles se tornem <strong style={{ color: 'black' }}>especialistas</strong> e atendam às demandas do mercado.
  <p></p>
  - Com a nossa iniciativa, queremos <strong style={{ color: 'black' }}>transformar a realidade dos jovens</strong>, tornando-os aptos a enfrentar os desafios do setor e a contribuir para o <strong style={{ color: 'black' }}>crescimento contínuo da indústria de TI</strong>.
</p>

    ),
    Why: ['Integridade', 'Responsabilidade', 'Profissionalismo'],
    Why2: ['Direcionamento', 'Resultados', 'Lucros'],    
  };

 
  const section2 = {
    paragraph: 'Aqui estão algumas imagens que representam nossas atividades.',
    images: [
      {
        src: 'assets/images/PonteDigital/equipe1.jpg',
        alt: 'Equipe 1',
        caption: 'Descrição da equipe 1',
      },
      {
        src: 'assets/images/PonteDigital/equipe2.jpg',
        alt: 'Equipe 2',
        caption: 'Descrição da equipe 2',
      },
      {
        src: 'assets/images/PonteDigital/equipe3.jpg',
        alt: 'Equipe 3',
        caption: 'Descrição da equipe 3',
      },
      {
        src: 'assets/images/PonteDigital/12.jpg',
        alt: 'Imagem 12',
        caption: 'Descrição da imagem 12',
      },
      {
        src: 'assets/images/PonteDigital/8.jpg',
        alt: 'Imagem 8',
        caption: 'Descrição da imagem 8',
      },
      {
        src: 'assets/images/PonteDigital/5.jpg',
        alt: 'Imagem 5',
        caption: 'Descrição da imagem 5',
      },
      {
        src: 'assets/images/PonteDigital/1.1.jpg',
        alt: 'Imagem 1.1',
        caption: 'Descrição da imagem 1.1',
      },
      {
        src: 'assets/images/PonteDigital/professores.jpg',
        alt: 'Imagem 1.2',
        caption: 'Descrição da imagem 1.2',
      },
      {
        src: 'assets/images/PonteDigital/9.jpg',
        alt: 'Imagem 9',
        caption: 'Descrição da imagem 9',
      },
      {
        src: 'assets/images/PonteDigital/6.jpg',
        alt: 'Imagem 6',
        caption: 'Descrição da imagem 6',
      },
      {
        src: 'assets/images/PonteDigital/1.jpg',
        alt: 'Imagem 1',
        caption: 'Descrição da imagem 1',
      },
       
      {
        src: 'assets/images/PonteDigital/todos.jpg',
        alt: 'Todos',
        caption: 'Descrição de todos',
      },
    
      {
        src: 'assets/images/PonteDigital/10.jpg',
        alt: 'Imagem 10',
        caption: 'Descrição da imagem 10',
      },

      {
        src: 'assets/images/PonteDigital/7.jpg',
        alt: 'Imagem 7',
        caption: 'Descrição da imagem 7',
      },
   
      {
        src: 'assets/images/PonteDigital/3.jpg',
        alt: 'Imagem 3',
        caption: 'Descrição da imagem 3',
      },
      {
        src: 'assets/images/PonteDigital/professores2.jpg',
        alt: 'Imagem 2',
        caption: 'Descrição da imagem 2',
      },
       
      {
        src: 'assets/images/PonteDigital/11.jpg',
        alt: 'Imagem 11',
        caption: 'Descrição da imagem 11',
      },
      {
        src: 'assets/images/PonteDigital/4.jpg',
        alt: 'Imagem 4',
        caption: 'Descrição da imagem 4',
      },


      {
        src: 'assets/images/PonteDigital/1.3.jpg',
        alt: 'Imagem 1.3',
        caption: 'Descrição da imagem 1.3',
      },
  
   
    
      {
        src: 'assets/images/PonteDigital/1.2.2.jpg',
        alt: 'Imagem 6.2',
        caption: 'Descrição da imagem 6.2',
      },
      {
        src: 'assets/images/PonteDigital/11.1.jpg',
        alt: 'Imagem 11.1',
        caption: 'Descrição da imagem 11.1',
      },
      {
        src: 'assets/images/PonteDigital/6.3.jpg',
        alt: 'Imagem 6.3',
        caption: 'Descrição da imagem 6.3',
      },
      {
        src: 'assets/images/PonteDigital/1.5.jpg',
        alt: 'Imagem 1.5',
        caption: 'Descrição da imagem 1.5',
      },
      {
        src: 'assets/images/PonteDigital/final.jpg',
        alt: 'Imagem 6.1',
        caption: 'Descrição da imagem 6.1',
      },
   
   
    ],
  };
  
  return (
    <>
      <Base {...mockBase} >
        <GridTwoColumns  {...args}  background={true} sectionId = 'target1'/>
        <GridContent {...argsGridContent} sectionId = 'target2'/>
        <AboutUs title="Autonomia Digital" imageSrc={"/assets/images/logoprojeto2.png"} color={"#94d3e6"} data={contactData2} background={false} sectionId = 'target3'/>
        <AboutUs2 data={contactData3} color={'white'}  background={true} sectionId = 'target4'/>
        <AboutUs title="InspiraTech Jovem"color={"#fff7ad"} imageSrc={"/assets/images/logoprojeto3.png"} data={contactData4} background={false} sectionId = 'target5'/>
        <GridImage key={key}{...section} sectionId = 'target6' background/>
        <GridImage2 data={section2} sectionId='target8' background/>
       <Contact data={contactData}  sectionId = 'target7' />
      </Base>
    </>
  );
};


export default Home;
