import P from 'prop-types';
import * as Styled from './styles';
import YouTube from 'react-youtube';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
export const GridVideo = ({ videoUrl, text, background, sectionId }) => {
  function getVideoId(url) {
    const match = url.match(/[?&]v=([^&#]*)/);
    return match ? match[1] : null;
  }

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2" size = 'medium'>
          {text}
        </Heading>
        <YouTube videoId={getVideoId(videoUrl)} />
      </Styled.Container>
    </SectionBackground>
  );
};

GridVideo.propTypes = {
  url: P.string.isRequired,
  text: P.string,
  background: P.bool,
  sectionId: P.string,
};
