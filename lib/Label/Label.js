// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const LabelStyled = styled('label')`
${({ theme, leftSpace }) => `
    display: block;
    box-sizing: border-box;
    font-size: ${theme.fontSize.px14};
    color: ${theme.colors.grey1};
    align-self: center;
    ${!!leftSpace
        ?
        `
        padding-left: ${theme.spacing.px5};
        `
        :
        `
        padding-right: ${theme.spacing.px5};
        `
    }
`}`

const Label = ({ children, leftSpace, htmlFor }) => (
    <ThemeProvider theme={theme}>
        <LabelStyled leftSpace={leftSpace} htmlFor={htmlFor}>
            {children}
        </LabelStyled>
    </ThemeProvider>
)

Label.propTypes = {
    children: PropTypes.node,
    leftSpace: PropTypes.bool
}

export default Label;