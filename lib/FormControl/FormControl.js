// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const FormControlWrapper = styled('div')`
${({ theme, inline }) => `
    display: block;
    width: ${theme.spacing.full};
    margin-bottom: ${theme.spacing.px15};
    ${inline
        ?
        `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        label {
            margin-right: ${theme.spacing.px10};
        }
        @media screen and (max-width: 500px) {
            display: block;
            label {
                margin-bottom: ${theme.spacing.px10};
            }
        }
        `
        :
        `
        label {
            display: block;
            margin-bottom: ${theme.spacing.px5};
        }
        `
    }
`}`

const FormControl = ({ inline, children }) => (
    <ThemeProvider theme={theme}>
        <FormControlWrapper inline={inline}>
            {children}
        </FormControlWrapper>
    </ThemeProvider>
)

FormControl.propTypes = {
    children: PropTypes.node
}

export default FormControl;