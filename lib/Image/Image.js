// Modules
import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

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
    <ImageStyled src={src} alt={alt} title={alt} logo={logo} id={id} />
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