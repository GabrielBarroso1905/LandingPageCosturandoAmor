import React, { useRef, useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  function scrollTo(target) {
    const container = menuRef.current;
    const targetElement = document.getElementById(target);

    if (container && targetElement) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;
      const scrollToOffset = targetTop - containerTop;

      window.scrollTo({
        top: scrollToOffset,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer ref={menuRef}>
            <LogoLink {...logoData} />
            <NavLinks
              links={links}
              onClick={(target) => {
                setVisible(false);
                scrollTo(target);
              }}
            />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
