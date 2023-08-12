import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground2 = ({
  children,
  background = false,
  sectionId = '',
  fundo = '',
  fundo2 = '',
}) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>
      <Styled.Fundo src={fundo} />  
        {children}
        </SectionContainer>
    </Styled.Container>
  );
};

SectionBackground2.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
