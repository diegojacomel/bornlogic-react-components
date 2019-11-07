// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const ImageStyled = styled('img')`
${({ theme, logo }) =>`
    display: block;
    max-width: ${theme.spacing.full};
    ${logo
        ?
        `
            max-height: ${theme.spacing.px40};
            max-width: ${theme.spacing.full};
        `
        :
        ""
    }
`}`

const Image = ({ src, alt, logo, id }) => (
    <ThemeProvider theme={theme}>
        <ImageStyled src={src} alt={alt} title={alt} logo={logo} id={id} />
    </ThemeProvider>
)

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    logo: PropTypes.bool
}

Image.defaultProps = {
    src: '',
    alt: "Descrição da imagem",
    logo: false
}

export default Image;