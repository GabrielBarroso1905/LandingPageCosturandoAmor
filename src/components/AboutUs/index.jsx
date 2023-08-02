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

import { GridText } from '../GridText';
export const AboutUs = ({ data, sectionId, background }) => { 
 
  return (
    <SectionBackground background={background} sectionId={sectionId}>
    <Styled.Container background={!background} >
     <Styled.ImageContainer>
     <Styled.Image src='https://source.unsplash.com/random/500x440?r=2' className="img-responsive" alt="" />
     </Styled.ImageContainer>

    <Styled.About>
             <SectionContainer>
             <Heading size="medium" colorDark={!background} uppercase as="h2">
            About Us
            </Heading>
          <Styled.P>{data.paragraph ? data.paragraph : 'loading...'}</Styled.P>
          <Heading size="small" colorDark={!background} uppercase as="h2">Why Choose Us? </Heading>        
                <Styled.List >
                  <ul>
                    {data.Why
                      ? data.Why.map((d, i) => <li key={`${d}-${i}`}> <FontAwesomeIcon icon={faCheck}/>{d} </li>)
                      : 'loading'}
                  </ul>
                  <ul>
                    {data.Why2
                      ? data.Why2.map((d, i) => <li key={`${d}-${i}`}> <FontAwesomeIcon icon={faCheck}/>{d}</li>)
                      : 'loading'}
                  </ul>
              </Styled.List>      
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
