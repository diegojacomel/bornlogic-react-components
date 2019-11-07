// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

// Components
import Title from '../Title/Title';

const PanelWrapper = styled('section')`
${({ theme, showBoxShadow, showBorder }) => `
    background: ${theme.colors.white};
    border-radius: ${theme.rounded.px10};
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    width: ${theme.spacing.full};
    height: ${theme.spacing.full};
    box-sizing: border-box;
    ${
        showBoxShadow ?
        `box-shadow: ${theme.spacing.none} ${theme.spacing.px10} ${theme.spacing.px30} ${theme.colors.grey5};`
        : 
        ""
    }
    ${
        showBorder ?
        `border: 2px solid ${theme.colors.grey5};`
        : 
        ""
    }
`}`

const PanelHeader = styled('div')`
${({ theme }) => `
    padding: ${theme.spacing.px24} ${theme.spacing.px24} ${theme.spacing.none};
`}`

const PanelSubtitle =  styled('h5')`
${({ theme, subtitleColor }) => `
    font-weight: ${theme.fontWeight.light};
    color: ${theme.colors[subtitleColor]};
`}`

const PanelContent = styled('div')`
${({ theme }) => `
    margin: ${theme.spacing.none};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: ${theme.spacing.full};
    padding: ${theme.spacing.px30} ${theme.spacing.none};
    transition: all 0.5s ease;
`}`

const Panel = ({ title, subtitle, subtitleColor, children, showBoxShadow, showBorder }) => (
    <ThemeProvider theme={theme}>
        <PanelWrapper showBoxShadow={showBoxShadow} showBorder={showBorder}>
            {!!title || !!subtitle
                ?
                <PanelHeader>
                    {!!title
                        ?
                        <Title 
                            tag="h2"
                            color="grey1"
                            fontWeight="700"
                            marginBottom="px3"
                        >
                            {title}
                        </Title>
                        :
                        null
                    }
                    {subtitle
                        ?
                        <PanelSubtitle subtitleColor={subtitleColor}>
                            {subtitle}
                        </PanelSubtitle>
                        :
                        null
                    }
                </PanelHeader>
                :
                null
            }
            <PanelContent>
                {children}
            </PanelContent>
        </PanelWrapper>
    </ThemeProvider>
)

Panel.propTypes = {
    title: PropTypes.string,
    subtitleColor: PropTypes.string,
    children: PropTypes.node,
    showBoxShadow: PropTypes.bool,
    showBorder: PropTypes.bool
}

Panel.defaultProps = {
    subtitle: "",
    showBoxShadow: true,
    showBorder: false
}

export default Panel;