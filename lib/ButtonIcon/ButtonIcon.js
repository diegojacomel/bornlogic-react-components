// Modules
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// Styles

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const ButtonIconWrapper = styled('button')`
${({ theme, opened }) => `
    margin-right: ${theme.spacing.px16};
    padding: 0;
    background: transparent;
    border-radius: ${theme.rounded.px10};
    color: ${theme.colors.grey3};
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    text-align: center;
    ${opened === 1
    ? `
            z-index: 1001; 
            background-color: white;
        `
    : `
            &:hover {
                background: none;
            }
        `
}
`}`;

const LinkIconWrapper = styled(Link)`
${({ theme, opened }) => `
    margin-left: ${theme.spacing.px5};
    padding: ${theme.spacing.px8};
    background: ${theme.colors.grey7};
    border-radius: ${theme.rounded.px10};
    color: ${theme.colors.grey3};
    outline: none;
    cursor: pointer;
    text-align: center;
    ${opened === 1
    ? `
            z-index: 1001; 
            background-color: white;
        `
    : `
            &:hover {
                background: ${theme.colors.grey6};
            }
        `
}
`}`;

const CustomIcon = styled(FontAwesomeIcon)`
${({ theme, color }) => `
    font-size: ${theme.fontSize.px18};
    color: ${color ? theme.colors[color] : theme.colors.blueGrey3};
`}`;

const ButtonIcon = ({
  to, onClick, icon, opened, id, children, color,
}) => (
  <ThemeProvider theme={theme}>
    {to
      ? (
        <LinkIconWrapper
          opened={opened ? 1 : 0}
          to={to}
          onClick={onClick}
          id={id}
        >
          <CustomIcon color={color} icon={icon} />
          {children || null}
        </LinkIconWrapper>
      )
      : (
        <ButtonIconWrapper
          opened={opened ? 1 : 0}
          onClick={onClick}
          id={id}
        >
          <CustomIcon color={color} icon={icon} />
          {children || null}
        </ButtonIconWrapper>
      )}
  </ThemeProvider>
);

ButtonIcon.propTypes = {
  opened: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  opened: false,
  icon: faLayerGroup,
};

export default ButtonIcon;
