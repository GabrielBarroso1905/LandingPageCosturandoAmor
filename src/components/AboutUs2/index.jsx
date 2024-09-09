// Componente AboutUs
import React from 'react';
import * as Styled from './styles';
import 'font-awesome/css/font-awesome.min.css';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const AboutUs2 = ({ data, sectionId, background}) => { 
 
  return (
    <SectionBackground background={!background} sectionId={sectionId}>
    <Styled.Container background={!background} >
     
    <Styled.About>
             <SectionContainer>
             <Heading color='#00c69c' size="medium" colorDark={!background} uppercase as="h2">
            CapacitaTech
            </Heading>
          <Styled.P>{data.paragraph ? data.paragraph : 'loading...'}</Styled.P>      
              </SectionContainer>
    </Styled.About>
     <Styled.ImageContainer>
     <Styled.Image src='/assets/images/logoprojeto.png' className="img-responsive" alt="" />
     </Styled.ImageContainer>

    
    </Styled.Container>
    </SectionBackground>

  );
};

AboutUs2.propTypes = {
  data: P.shape({
    paragraph: P.string,
    Why: P.array,
    Why2: P.array,
  }),
  sectionId: P.string,
};

export default AboutUs2;
