// Modules
import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const ContainerWrapper = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: space-between;
    width: ${theme.spacing.full};
`}`

const ContainerItem = styled('div')`
${({ theme, noLeft, spacingDefault, maxWidth }) =>`
    padding: ${`${theme.spacing.none} ${theme.spacing.xg} ${theme.spacing.none} ${noLeft ? theme.spacing.none : theme.spacing.xg}`};
    width: ${theme.spacing.full};
    max-width: ${maxWidth};
    box-sizing: border-box;
    @media screen and (max-width: ${theme.breakpoint.xl}) {
        padding: ${`${theme.spacing.none} ${theme.spacing.xg} ${theme.spacing.none} ${noLeft && !spacingDefault ? theme.spacing.none : theme.spacing.xg}`};
    }
    @media screen and (max-width: ${theme.breakpoint.md}) {
        padding: ${`${theme.spacing.none} ${theme.spacing.xg} ${theme.spacing.none} ${noLeft ? theme.spacing.xg : theme.spacing.xg}`};
    }
`}`

const Container = ({ children, noLeft, spacingDefault, maxWidth }) => (
    <ThemeProvider theme={theme}>
        <ContainerWrapper>
            <ContainerItem noLeft={noLeft} maxWidth={maxWidth} spacingDefault={spacingDefault}>
                {children}
            </ContainerItem>
        </ContainerWrapper>
    </ThemeProvider>
)

Container.propTypes = {
    children: PropTypes.node,
    noLeft: PropTypes.bool,
    spacingDefault: PropTypes.bool,
    maxWidth: PropTypes.string
}

Container.defaultProps = {
    children: "",
    noLeft: false,
    spacingDefault: false,
}

export default Container;