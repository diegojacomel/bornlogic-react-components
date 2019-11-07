// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const LabelStyled = styled('label')`
${({ theme }) => `
    display: block;
    width: ${theme.spacing.full};
    margin-bottom: ${theme.spacing.px5};
    font-size: ${theme.fontSize.px12};
    color: ${theme.colors.grey4};
`}`

const Label = ({ children }) => (
    <ThemeProvider theme={theme}>
        <LabelStyled>
            {children}
        </LabelStyled>
    </ThemeProvider>
)

Label.propTypes = {
    children: PropTypes.node
}

export default Label;