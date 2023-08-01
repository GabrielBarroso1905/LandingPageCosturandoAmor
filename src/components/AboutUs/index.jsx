// Componente AboutUs
import React from 'react';
import * as Styled from './styles';
import 'font-awesome/css/font-awesome.min.css';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';

export const AboutUs = ({ data, sectionId, background }) => { 

  return (
    <SectionBackground background={background} sectionId={sectionId}>

    <Styled.About>
          <Styled.ContainerImageText>

          <Styled.Image src='https://source.unsplash.com/random/400x200?r=2' className="img-responsive" alt="" />
            <Heading size="medium" colorDark={!background} uppercase as="h2">
            About Us
            </Heading>
        
          </Styled.ContainerImageText>
              <p>{data.paragraph ? data.paragraph : 'loading...'}</p>
              <h3>Why Choose Us?</h3>
            
            <Styled.List >
                  <ul>
                    {data.Why
                      ? data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : 'loading'}
                  </ul>
                  <ul>
                    {data.Why2
                      ? data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : 'loading'}
                  </ul>
              </Styled.List>
         
      
   
    </Styled.About>
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
