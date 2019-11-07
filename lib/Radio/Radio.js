// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const LabelRadio = styled('label')`
${({ theme }) => `
    font-size: ${theme.fontSize.px16};
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    position: relative;
    cursor: pointer;
    line-height: 1;
    &::before {
        content: '';
        position: absolute;
        border: 2px solid #ffffff;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        left: 2px;
        top: 2px;
    }
`}`

const InputRadio = styled('input')`
${({ theme }) => `
    margin: ${theme.spacing.none} ${theme.spacing.px10} ${theme.spacing.none} ${theme.spacing.none};
    width: 18px;
    height: 18px;
    appearance: none;
    border: 2px solid ${theme.colors.blue2};
    border-radius: ${theme.rounded.full};
    outline: none;
    &:checked {
        background: ${theme.colors.blue2};
    }
`}`

const Radio = ({ id, value, name, text, innerRef }, props) => (
    <ThemeProvider theme={theme}>
        <LabelRadio htmlFor={id}>
            <InputRadio id={id} type="radio" value={value} name={name} ref={innerRef} {...props} />
            {text}
        </LabelRadio>
    </ThemeProvider>
)

Radio.propTypes = {
    id: PropTypes.node,
    value: PropTypes.node,
    name: PropTypes.string,
    text: PropTypes.string
}

Radio.defaultProps = {
    text: "Text"
}

export default Radio;