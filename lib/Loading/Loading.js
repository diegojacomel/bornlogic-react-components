// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

// Components
import Image from '../Image/Image';

const LoadingStyled = styled('div')`
${({ theme }) =>`
    width: ${theme.spacing.full};
    height: ${theme.spacing.full};
    position: fixed;
    background: rgba(255, 255, 255, 0.85);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;
`}`

const Loading = ({ isLoading, image }) => (
    isLoading
        ?
        <ThemeProvider theme={theme}>
            <LoadingStyled>
                <Image src={image} alt="Loading" />
            </LoadingStyled>
        </ThemeProvider>
        :
        null
)

Loading.propTypes = {
    image: PropTypes.string,
    isLoading: PropTypes.bool
}

Loading.defaultProps = {
    image: '#',
    isLoading: false
}

export default Loading;