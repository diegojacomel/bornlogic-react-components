// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const InputStyled = styled('input')`
${({ theme, withoutBorder, disabled }) =>`
    border: 1px solid ${theme.colors.grey5};
    border-radius: ${theme.rounded.px10};
    color: ${theme.colors.grey2};
    font-weight: ${theme.fontWeight.light};
    padding: ${theme.spacing.px10} ${theme.spacing.px15};
    background: ${theme.colors.white};
    width: ${theme.spacing.full};
    box-sizing: border-box;
    outline: none;
    ${!!withoutBorder
        ?
        `
        border: none;
        `
        :
        ``
    }
    ${!!disabled
        ?
        `
        background: ${theme.colors.grey7};
        cursor: not-allowed;
        `
        :
        ``
    }
`}`

const Input = ({ type, id, name, block, disabled, placeholder, value, withoutBorder, onBlur, onFocus, onKeyUp, onChange }) => {
    return (
        <ThemeProvider theme={theme}>
            <InputStyled
                type={type}
                id={id}
                name={name}
                block={block}
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                withoutBorder={withoutBorder}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                onChange={onChange}
            />
        </ThemeProvider>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    withoutBorder: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    block: false,
    disabled: false,
    placeholder: '',
    withoutBorder: false,
    onBlur: () => {},
    onFocus: () => {},
    onKeyUp: () => {},
    onChange: () => {}
}

export default Input;