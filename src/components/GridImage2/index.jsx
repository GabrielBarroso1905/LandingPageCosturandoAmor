import React, { useState } from 'react';
import * as Styled from './styles';
import 'font-awesome/css/font-awesome.min.css';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage2 = React.memo(({ data, sectionId, background }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <SectionBackground background={!background} sectionId={sectionId}>
      <SectionContainer>
        <Styled.Container background={!background}>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {"Grande dia"}
        </Heading>
          <Styled.Gallery>
            {data.images && data.images.length > 0 ? (
              data.images.map((image, index) => (
                <Styled.ImageCard key={index} onClick={() => handleImageClick(image)}>
                  <Styled.Image
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                  <Styled.Caption>{image.caption}</Styled.Caption>
                </Styled.ImageCard>
              ))
            ) : (
              <p>Carregando imagens...</p>
            )}
          </Styled.Gallery>

          {selectedImage && (
            <Styled.Modal onClick={handleCloseModal}>
              <Styled.ModalContent>
                <Styled.ModalImage src={selectedImage.src} alt={selectedImage.alt} />
                <Styled.ModalCaption>{selectedImage.caption}</Styled.ModalCaption>
              </Styled.ModalContent>
            </Styled.Modal>
          )}
        </Styled.Container>
      </SectionContainer>
    </SectionBackground>
  );
});

GridImage2.propTypes = {
  data: P.shape({
    paragraph: P.string,
    images: P.arrayOf(
      P.shape({
        src: P.string.isRequired,
        alt: P.string.isRequired,
        caption: P.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  sectionId: P.string,
  background: P.bool,
};

GridImage2.defaultProps = {
  background: false,
};

export default GridImage2;
