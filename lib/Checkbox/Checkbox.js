// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const CustomCheckbox = styled('div')`
${({ theme, color }) => `
        display: block;
        align-self: center;
        width: 18px;
        height: 18px;
        border: 2px solid ${theme.colors[color]};
        border-radius: 2px;
        position: relative;
`}`

const InputCheckbox = styled('input')`
${({ theme, color }) => `
    cursor: pointer;
    width: 18px;
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
            display: block;
            svg {
                color: ${theme.colors[color]};
            }
        }
    }
`}`

const IconCheckbox = styled('span')``

const Checkbox = ({ type, name, id, color, onClick, rest }) => (
    <ThemeProvider theme={theme}>
        <CustomCheckbox color={color}>
            <InputCheckbox
                type={type}
                name={name}
                id={id}
                onClick={onClick}
                color={color}
                {...rest}
            />
            <IconCheckbox>
                <FontAwesomeIcon icon={faCheck}/>
            </IconCheckbox>
        </CustomCheckbox>
    </ThemeProvider>
)

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.node,
    id: PropTypes.node,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

Checkbox.defaultProps = {
    type: 'checkbox',
    color: 'primary',
    onClick: () => {},
}

export default Checkbox;