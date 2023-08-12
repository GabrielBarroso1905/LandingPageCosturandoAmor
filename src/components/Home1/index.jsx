import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground2 } from '../SectionBackground2';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const Home1 = ({title,text,srcImg,background = false,sectionId = '', fundo,fundo2}) => {
  return (
      <SectionBackground2 background={background} sectionId={sectionId} fundo={fundo}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase size ={"medium"}colorDark={!background} as="h2">
            {title}
          </Heading>

          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
       
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
       
        <Styled.BtnContainer>
          <Styled.Btn colorDark={background} >
           Eu quero !!!
          </Styled.Btn>
        </Styled.BtnContainer>
        
      </Styled.Container>
    </SectionBackground2 >
   
    

  );
};

Home1.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
