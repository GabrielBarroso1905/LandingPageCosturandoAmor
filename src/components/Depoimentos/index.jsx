import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';

export const Depoimentos = ({background,sectionId }) => {
  const testimonialsData = [
    {
      name: 'John Doe',
      img: 'https://source.unsplash.com/random/50x50?r=1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
    },
    {
      name: 'Jane Smith',
      img: 'https://source.unsplash.com/random/50x50?r=2',
      text: 'Pellentesque euismod euismod lacus sit amet aliquam. Nulla facilisi. Cras dapibus ullamcorper risus, nec facilisis enim commodo eget.',
    },
    {
      name: 'Michael Johnson',
      img: 'https://source.unsplash.com/random/50x50?r=3',
      text: 'Sed sed enim odio. Vestibulum porttitor velit eget purus dictum, id varius erat venenatis.',
    },
    {
      name: 'John Doe',
      img: 'https://source.unsplash.com/random/50x50?r=5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
    },
    {
      name: 'Jane Smith',
      img: 'https://source.unsplash.com/random/50x50?r=6',
      text: 'Pellentesque euismod euismod lacus sit amet aliquam. Nulla facilisi. Cras dapibus ullamcorper risus, nec facilisis enim commodo eget.',
    },
    {
      name: 'Michael Johnson',
      img: 'https://source.unsplash.com/random/50x50?r=7',
      text: 'Sed sed enim odio. Vestibulum porttitor velit eget purus dictum, id varius erat venenatis.',
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
              <div className="testimonial-image">
                <img src={testimonial.img} alt="" />
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-meta"> - {testimonial.name} </div>
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
