// Modules
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SetBackgroundAndColor = (theme, outline, backgroundColor, backgroundHoverColor, fontColor, fontHoverColor, underlineOnHover) => {
    if (outline) {
        return `
            border: 1px solid ${theme.colors[backgroundColor]};
            background-color: ${theme.colors.none};
            color: ${theme.colors[fontColor || backgroundColor]};
            &:hover {
                border: 1px solid ${theme.colors[backgroundHoverColor || backgroundColor]};
                background-color: ${theme.colors[backgroundHoverColor || backgroundColor]};
                color: ${theme.colors[fontHoverColor || 'white']};
            }
    `;
    }
    fontColor = (fontColor && fontColor) || (backgroundColor === "white" && 'grey2') || 'white';

    return `
        background-color: ${theme.colors[backgroundColor]};
        color: ${theme.colors[fontColor]};
        &:hover {
            &:not(:disabled) {
                ${backgroundHoverColor ?
                    `background-color: ${theme.colors[backgroundHoverColor]}`
                    :
                    backgroundColor.indexOf('blue') > -1 ?
                    `background-color: #2DBFF3`
                    :
                    'opacity: 0.9;'
                }

                ${underlineOnHover ?
                    'text-decoration: underline;' 
                    :
                    ''
                }

                ${fontHoverColor ?
                    `color: ${theme.colors[fontHoverColor]};`
                    :
                    ``
                }
            }
        }
    `;
};

const SetSizeButton = (size, theme) => {
    switch (size) {
        case 'px40':
            return `
                    padding: ${theme.spacing.px12} ${theme.spacing.px40};
                `
        case 'px30':
            return `
                padding: ${theme.spacing.px12} ${theme.spacing.px30};
            `
        case 'px20':
            return `
                    padding: ${theme.spacing.px12} ${theme.spacing.px20};
                `
        case 'px16':
            return `
                padding: ${theme.spacing.px12} ${theme.spacing.px16};
                            `
        case 'px15':
            return `
                    padding: ${theme.spacing.px12} ${theme.spacing.px15};
                                        `
        case 'px10':
            return `
                    padding: ${theme.spacing.px10} ${theme.spacing.px20};
                `
        case 'px5':
            return `
                padding: ${theme.spacing.px5} ${theme.spacing.px10};
            `
        default:
            return ``
    }
}

const ButtonStyle = styled('button')`
${({ theme, block, rounded, size, fontSize, outline, backgroundColor, backgroundHoverColor, fontColor, fontHoverColor, underlineOnHover }) => `
    text-align: center;
    outline: none;
    border: none;
    line-height: 1;
    transition: all 0.3s;
    margin-right: ${theme.spacing.px15};
    white-space: nowrap;
    width: ${block ? theme.spacing.full : 'initial'};
    border-radius: ${theme.rounded[rounded]};
    font-size: ${theme.fontSize[fontSize]};
    ${SetBackgroundAndColor(theme, outline, backgroundColor, backgroundHoverColor, fontColor, fontHoverColor, underlineOnHover)};
    ${SetSizeButton(size, theme)};
    position: relative;
    top: 0;
    transition: all 0.2s;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    &:active {
        top: 0;
        box-shadow: 0 0 0 ${theme.colors.active[backgroundColor]};
    }
    &:last-child {
        margin-right: ${theme.spacing.none};
    }
    & > span {
        // display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    svg {
        margin: 0 ${theme.spacing.px10} 0 0;
    }
    
`}`

const Button = ({ children, type, fontColor, fontHoverColor, icon, backgroundColor, backgroundHoverColor, underlineOnHover, outline, size, fontSize, rounded, block, disabled, onClick, innerRef }) => {
    return (
        <ThemeProvider theme={theme}>
            <ButtonStyle
                type={type}
                backgroundColor={backgroundColor}
                backgroundHoverColor={backgroundHoverColor}
                fontColor={fontColor}
                underlineOnHover={underlineOnHover}
                fontHoverColor={fontHoverColor}
                outline={outline}
                size={size}
                fontSize={fontSize}
                rounded={rounded}
                block={block}
                onClick={onClick}
                disabled={disabled}
                ref={innerRef}
                id="button"
            >
                <span>
                    {!!icon &&
                        <FontAwesomeIcon icon={icon} />
                    }
                    {children}
                </span>
            </ButtonStyle>
        </ThemeProvider>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    fontColor: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.string,
    rounded: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'button',
    backgroundColor: 'grey2',
    outline: false,
    size: 'px40',
    rounded: 'px10',
    fontSize: 'px14',
    block: false,
    disabled: false,
    onClick: () => { },
}

export default Button;