import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
    srcImg: 'assets/images/LOGO.png',
  },
  footerHtml: '<p>Feito por Gabriel Barroso</p>',
};