// Modules
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// Styles

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../theme';

const ButtonStyle = styled('button')`
${({ theme, showButton, styleguide }) => `
    position: ${styleguide ? 'static' : 'absolute'};
    right: ${theme.spacing.px15};
    top: ${theme.spacing.px25};
    z-index: 9999;
    border: none;
    background: none;
    padding: ${theme.spacing.none};
    font-size: ${theme.fontSize.px25};
    cursor: pointer;
    outline: none;
    opacity: 1;
    transition: all 0.5s;
    width: ${theme.spacing.px30};
    ${!showButton
    ? `
        display: none;
        `
    : ''
}
`}`;

const ButtonClose = ({
  onClick, showButton, styleguide, iconClose,
}) => (
  <ThemeProvider theme={theme}>
    <ButtonStyle
      onClick={onClick}
      showButton={showButton}
      styleguide={styleguide}
      id="buttonClose"
    >
      <FontAwesomeIcon icon={iconClose || faTimes} />
    </ButtonStyle>
  </ThemeProvider>
);

ButtonClose.propTypes = {
  onClick: PropTypes.func,
  showButton: PropTypes.bool,
  styleguide: PropTypes.bool,
  iconClose: PropTypes.array,
};

ButtonClose.defaultProps = {
  onClick: () => {},
  showButton: true,
  styleguide: false,
};

export default ButtonClose;
