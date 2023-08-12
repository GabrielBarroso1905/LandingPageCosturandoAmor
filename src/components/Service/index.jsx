import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.min.css';
import { TextComponent } from '../TextComponent';
// Objeto com os textos base
const defaultTexts = {
  title: 'How Felisity can help you!',
  title2: 'Easily Usage',
  description:
    'Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.',
};

export const Service = ({ background, sectionId, title, title2, description,color }) => {
  // Define os textos utilizando os valores passados como parâmetros ou os valores padrão do objeto defaultTexts
  const serviceTitle = title || defaultTexts.title;
  const serviceDescription = description || defaultTexts.description;
  const serviceTitle2 = title2 || defaultTexts.title2;
  const videoPath = process.env.PUBLIC_URL + '/assets/videos/video.mp4';

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <SectionContainer>
          <Styled.Container>
            <Heading colorDark={!background} color={color} size="huge" as="h2">
              {serviceTitle}
            </Heading>
          </Styled.Container>
          
          <Styled.ServiceCards>
            <Styled.ServiceCard colorDark={!background}>
              
    <Styled.video controls>
      <source src={videoPath} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </Styled.video>
        </Styled.ServiceCard>
            <Styled.ServiceCard colorDark={!background}>
            <Styled.video controls>
      <source src={videoPath} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </Styled.video>
            </Styled.ServiceCard>
            <Styled.ServiceCard colorDark={!background}>
            <Styled.video controls>
      <source src={videoPath} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </Styled.video>
            </Styled.ServiceCard>
          </Styled.ServiceCards>
        </SectionContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

Service.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
  title: P.string, 
  description: P.string, 
};
