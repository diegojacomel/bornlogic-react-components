// Modules
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// Styles

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../theme';

const CustomCheckbox = styled('div')`
${({ theme, color, checked }) => `
        display: block;
        align-self: center;
        width: 18px;
        min-width: 18px;
        height: 18px;
        border-radius: 3px;
        ${checked ? `border: 1.5px solid ${theme.colors[color]};` : `border: 1.5px solid ${theme.colors.grey2};`}
        position: relative;
`}`;

const InputCheckbox = styled('input')`
${({ theme, color }) => `
    cursor: pointer;
    min-width: 18px;
    max-width: 18px;
    width: 18px;
    min-height: 18px;
    max-height: 18px;
    height: 18px;
    appearance: none !important;
    outline: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    opacity: 0;
    & + span {
        display: none;
    }
    &:checked {
        & + span {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${theme.colors[color]};
            width: 18px;
            height: 18px;
            svg {
                color: ${theme.colors.white};
            }
        }
    }
`}`;

const IconCheckbox = styled('span')``;

const Checkbox = ({
  type, name, id, color, onClick, rest, checked, iconCheck,
}) => (
  <ThemeProvider theme={theme}>
    <CustomCheckbox color={color} checked={checked}>
      <InputCheckbox
        type={type}
        name={name}
        id={id}
        onChange={onClick}
        checked={checked}
        color={color}
        {...rest}
      />
      <IconCheckbox>
        <FontAwesomeIcon icon={iconCheck || faCheck} />
      </IconCheckbox>
    </CustomCheckbox>
  </ThemeProvider>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.node,
  id: PropTypes.node,
  color: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  color: 'blue3',
  onClick: () => { },
  checked: false,
};

export default Checkbox;
