// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

// Components
import Image from '../Image/Image';

const LoadingStyled = styled('div')`
${({ theme, centerIcon }) =>`
    width: ${theme.spacing.full};
    display: flex;
    justify-content: ${centerIcon ? `center` : `flex-start`};
    align-items: center;
    & > img {
        width: ${theme.spacing.px90};
        height: ${theme.spacing.px90};
    }
`}`

const LocalLoading = ({ isLoading, centerIcon, image }) => (
    isLoading
        ?
        <ThemeProvider theme={theme}>
            <LoadingStyled centerIcon={centerIcon}>
                <Image src={image} alt="Loading" />
            </LoadingStyled>
        </ThemeProvider>
        :
        null
)

LocalLoading.propTypes = {
    image: PropTypes.string,
    isLoading: PropTypes.bool,
    centerIcon: PropTypes.bool,
}

LocalLoading.defaultProps = {
    image: '#',
    isLoading: false,
    centerIcon: false
}

export default LocalLoading;