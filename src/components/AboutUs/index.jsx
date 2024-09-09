// Componente AboutUs
import React from 'react';
import * as Styled from './styles';
import 'font-awesome/css/font-awesome.min.css';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';

export const AboutUs = ({ data, sectionId, background , imageSrc,color,title}) => { 
 
  return (
    <SectionBackground  color={color} background={!background} sectionId={sectionId}>
    <Styled.Container background={!background} >
     <Styled.ImageContainer>
     <Styled.Image src={imageSrc} className="img-responsive" alt="" />
     </Styled.ImageContainer>
    <Styled.About>
             <SectionContainer>
             <Heading  color="black" size="medium" colorDark={!background} uppercase as="h2">
      {title}
            </Heading>
          <Styled.P>{data.paragraph ? data.paragraph : 'loading...'}</Styled.P>
                 
              </SectionContainer>
    </Styled.About>
    </Styled.Container>
    </SectionBackground>

  );
};

AboutUs.propTypes = {
  data: P.shape({
    paragraph: P.string,
    Why: P.array,
    Why2: P.array,
  }),
  sectionId: P.string,
};

export default AboutUs;
