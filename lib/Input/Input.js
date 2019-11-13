// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const InputStyled = styled('input')`
${({ theme }) =>`
    border: 1px solid ${theme.colors.grey5};
    border-radius: ${theme.rounded.px10};
    color: ${theme.colors.grey2};
    font-weight: ${theme.fontWeight.light};
    padding: ${theme.spacing.px10} ${theme.spacing.px15};
    background: ${theme.colors.white};
    width: ${theme.spacing.full};
    box-sizing: border-box;
    outline: none;
`}`

const Input = ({ type, id, name, block, disabled, value, withoutBorder, onBlur, onFocus, onKeyUp, onChange }, props) => {
    return (
        <ThemeProvider theme={theme}>
            <InputStyled
                type={type}
                id={id}
                name={name}
                block={block}
                disabled={disabled}
                value={value}
                withoutBorder={withoutBorder}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                onChange={onChange}
                {...props}
            />
        </ThemeProvider>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
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
    withoutBorder: false,
    onBlur: () => {},
    onFocus: () => {},
    onKeyUp: () => {},
    onChange: () => {}
}

export default Input;