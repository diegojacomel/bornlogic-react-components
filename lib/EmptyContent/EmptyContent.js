// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const NoContent = styled('div')`
${({ theme }) => `
    color: ${theme.colors.grey2};
    margin-top: ${theme.spacing.px25};
`}`

const StrongParagraph = styled('strong')``

const EmptyContent = ({ title, message }) => {
    return (
        <ThemeProvider theme={theme}>
            <NoContent>
                {title ? 
                    <StrongParagraph>
                        { title }
                    </StrongParagraph>
                : null }
                { message }
            </NoContent>
        </ThemeProvider>
    )
}

EmptyContent.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
}

EmptyContent.defaultProps = {
    title: "",
    message: ""
}

export default EmptyContent;