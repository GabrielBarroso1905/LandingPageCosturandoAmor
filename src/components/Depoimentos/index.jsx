import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';

export const Depoimentos = ({background,sectionId }) => {
  const testimonialsData = [
    {
      name: 'Comprometimento',
      img: 'https://source.unsplash.com/random/50x50?r=1',
      text: ' A ASF Capital é a melhor empresa de marketing existente. Entrega todos os resultados prometidos e no tempo prometido. Vale a pena o investimento mensal sem dúvidas!',
    },
    {
      name: 'Suporte',
      img: 'https://source.unsplash.com/random/50x50?r=2',
      text: 'Nosso time comercial no início teve algumas dificuldades em adaptar o projeto, até porque a gente saiu de um modelo mais físico e migramos para o digital. Nesse processo, o suporte do Emanuel e do grupo ASF foram fundamentais para essa transição. Recomendo muito essa empresa!',
    },
    {
      name: 'Gratidão',
      img: 'https://source.unsplash.com/random/50x50?r=3',
      text: 'Não tenho palavras. Eu estava somente girando o dinheiro, não tinha lucros expressivos no fim do mês. Resolvi fazer o investimento do primeiro mês com a ASF e hoje já estamos a mais de um ano e meio trabalhando juntos!'
    },
    {
      name: 'Resultados',
      img: 'https://source.unsplash.com/random/50x50?r=5',
      text: 'Eu conheci a ASF através da indicação de uma amiga. E sendo bem honesto, meu negócio é diferente do ramo da minha amiga. Eu trabalho com estética e minha amiga com clínica odontológica, é mesmo assim, o Asafe e o time da ASF vêm nos dando resultados incríveis no final do mês!',
    },
    {
      name: 'Segurança',
      img: 'https://source.unsplash.com/random/50x50?r=6',
      text: ' Desconheço empresa mais completa! Eu não faço absolutamente nada. Eu entrego tudo nas mãos da ASF Capital e eles fazem acontecer. Detalhe, apesar de não fazer nada, o Emanuel sempre manda os feedbacks toda segunda, quarta e sexta. Observo todo o trabalho incrível deles de pertinho. Isso traz uma segurança para mim como empresária'
    },
    {
      name: 'Lucro',
      img: 'https://source.unsplash.com/random/50x50?r=7',
      text: 'Tenho uma rede de lojas de automóveis e eu contratei todos os serviços de marketing da ASF Capital. Nosso investimento mensal é alto na ASF, mas o que o Emanuel e seu time fazem, é brincadeira. Aumentei meu faturamento mensal em 32% nos últimos 4 meses. Recomendo demais, galera!' 
    },
    
  ];

  return (
    <SectionBackground background={background} sectionId={sectionId} >

    <Styled.Container>
      <SectionContainer>
        <Styled.Container>
          
        <Heading colorDark={!background} size="huge" as="h2">
          O que dizem sobre nós
        </Heading>
          </Styled.Container>

        {/* Usando TestimonialContainer para organizar os depoimentos */}
        <Styled.TestimonialContainer>
          {testimonialsData.map((testimonial, index) => (
            <Styled.Testimonial key={index}>
              <div className="testimonial-content">
              <div className="testimonial-meta"> - {testimonial.name} </div>
                <TextComponent>"{testimonial.text}"</TextComponent>
              </div>
            </Styled.Testimonial>
          ))}
        </Styled.TestimonialContainer>

      </SectionContainer>
    </Styled.Container>
</SectionBackground>
  );
};

Depoimentos.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
};
