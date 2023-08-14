import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.css'; // Importe o arquivo CSS da biblioteca

export const ServiceV2 = ({ background, sectionId }) => {
  const testimonialsData = [
    {
      name: 'Anúncios Online',
      icon: 'fa fa-bullhorn fa-2x',
      text: 'Nossos especialistas em marketing digital criam campanhas de anúncios online altamente direcionadas para alcançar um público específico para o seu produto. Usamos estratégias eficazes para aumentar a visibilidade da sua marca e maximizar o retorno do investimento.',
    },
    {
      name: 'Designer',
      icon: 'fa fa-paint-brush fa-2x',
      text: 'Nossa equipe de designers talentosos cria artes de anúncios atraentes e exclusivas que capturam a essência da sua marca. Além disso, desenvolvemos uma identidade visual consistente que representa a personalidade e os valores da sua empresa.',
    },
    {
      name: 'Chatbots',
      icon: 'fa fa-android fa-2x',
      text: 'Implementamos soluções de resposta automática e chatbots inteligentes para otimizar a interação com os seus clientes. Essas ferramentas automatizadas estão prontas para atender perguntas frequentes e oferecer suporte imediato, melhorando a experiência do cliente.',
    },
    {
      name: 'Sites Empresariais',
      icon: 'fa fa-desktop fa-2x',
      text: 'Desenvolvemos sites empresariais personalizados que representam a sua marca de forma única. Nossos sites são responsivos, intuitivos e possuem uma estrutura sólida para atender às necessidades do seu negócio, incluindo landing pages otimizadas para conversões.', },
    
      {
      name: 'Suporte',
      icon: 'fa fa-handshake-o fa-2x',
      text: 'Oferecemos suporte contínuo aos nossos clientes, garantindo que suas dúvidas e preocupações sejam abordadas no mínimo 3 vezes por semana. Estamos aqui para auxiliar e assegurar que você esteja sempre informado sobre o progresso e as ações realizadas.',
    },
    {
      name: 'Processos Comerciais',
      icon: 'fa fa-building fa-2x',
      text: 'Utilizando prospecção ativa, cold call e estratégias de e-mail marketing, coletamos dados de potenciais clientes interessados em seus produtos. Apresentamos soluções personalizadas para desafios específicos, orientando-os na busca pela solução ideal.',
    },
  ];

  return (
    <SectionBackground background={!background} sectionId={sectionId}>
      <Styled.Container>
        <Heading color="black" colorDark={!background} size="huge" as="h2">
       Nossos Serviços </Heading>

        <Styled.TestimonialContainer>
          {testimonialsData.map((testimonial, index) => (
            <Styled.Testimonial key={index}>
              <div className="testimonial-image">
                <Styled.ServiceCardIcon colorDark={!background}>
                  <Styled.IcoInsta colorDark={background}>
                    <i className={testimonial.icon} />
                  </Styled.IcoInsta>
                </Styled.ServiceCardIcon>
              </div>
              <div className="testimonial-content">
                <div colorDark={background} className="testimonial-meta">
                  {testimonial.name}
                </div>
                <p>"{testimonial.text}"</p>
              </div>
            </Styled.Testimonial>
          ))}
        </Styled.TestimonialContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

ServiceV2.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
};

export default ServiceV2;
