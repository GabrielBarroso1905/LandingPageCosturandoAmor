import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.min.css';
export const ServiceV2 = ({background,sectionId }) => {
  const testimonialsData = [
    {
      name: 'John Doe',
      icon: 'fa fa-whatsapp fa-2x',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
    },
    {
      name: 'Jane Smith',
      icon: 'fa fa-university fa-2x',
      text: 'Pellentesque euismod euismod lacus sit amet aliquam. Nulla facilisi. Cras dapibus ullamcorper risus, nec facilisis enim commodo eget.',
    },
    {
      name: 'Michael Johnson',
      icon: 'fa fa-car fa-2x',
      text: 'Sed sed enim odio. Vestibulum porttitor velit eget purus dictum, id varius erat venenatis.',
    },
    {
      name: 'John Doe',
      icon: 'fa fa-upload fa-2x',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
    },
    {
      name: 'Jane Smith',
      icon: 'fa fa-check fa-2x',
      text: 'Pellentesque euismod euismod lacus sit amet aliquam. Nulla facilisi. Cras dapibus ullamcorper risus, nec facilisis enim commodo eget.',
    },
    {
      name: 'Michael Johnson',
      icon: 'fa fa-diamond fa-2x',
      text: 'Sed sed enim odio. Vestibulum porttitor velit eget purus dictum, id varius erat venenatis.',
    },
    
  ];

  return (
    <SectionBackground background={background} sectionId={sectionId} >
    <Styled.Container>
    
        <Styled.Container>
          
        <Heading colorDark={!background} size="huge" as="h2">
        OUR SERVICES
        </Heading>
          </Styled.Container>

        {/* Usando TestimonialContainer para organizar os depoimentos */}
        <Styled.TestimonialContainer>
          {testimonialsData.map((testimonial, index) => (
            <Styled.Testimonial key={index}>
              <div className="testimonial-image">

              <Styled.ServiceCardIcon colorDark={!background}>
                <Styled.IcoInsta colorDark={background}>
                <i className= {`${testimonial.icon}`}/>
                </Styled.IcoInsta>
              </Styled.ServiceCardIcon>
              </div>
              <div className="testimonial-content">
              
              <div colorDark={background} className="testimonial-meta">{testimonial.name}</div>
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
