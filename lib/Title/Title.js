// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const TitleWrapper = styled('div')`
${({ theme, separator, marginBottom }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${theme.spacing.full};
    margin-bottom: ${theme.spacing[marginBottom]};
    ${
        separator 
        ?
            `&::after {
                display: block;
                content: '';
                height: 1px;
                background: ${theme.colors.grey5};
                flex-basis: ${theme.spacing.full};
            }`
        : 
            ""
    }
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6 {
        ${separator
            ?
            `white-space: nowrap;`
            :
            ``
        }
    }
`}`

const TitleTag = ({ tag, children }, props) => {
    return (
        React.createElement(
            tag,
            props,
            children
        )
    )
}

const TitleElement = styled(TitleTag)`
${({ theme, color, fontWeight, textAlign }) => `
    display: block;
    margin: ${theme.spacing.none};
    color: ${theme.colors[color]};
    
    font-weight: ${theme.fontWeight[fontWeight]};
    padding-right: ${theme.spacing.px15};
    line-height: 1;
    text-align: ${textAlign};
    &::first-letter{
        text-transform: uppercase
    };
`}`

const Title = ({ tag, color, children, separator, fontWeight, marginBottom, textAlign, dataTestId }) => (
    <ThemeProvider theme={theme}>
        <TitleWrapper separator={separator} marginBottom={marginBottom} data-testid={dataTestId}>
            <TitleElement tag={tag} color={color} fontWeight={fontWeight} textAlign={textAlign}>
                {children}
            </TitleElement>
        </TitleWrapper>
    </ThemeProvider>
)

Title.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    marginBottom: PropTypes.string,
    separator: PropTypes.bool,
    textAlign: PropTypes.string
}

Title.defaultProps = {
    tag: "h1",
    children: "",
    color: "grey2",
    fontWeight: 'light',
    marginBottom: 'px40',
    separator: false,
    textAlign: 'left'
}

export default Title;