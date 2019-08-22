// Modules
import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const OutlineButton = (theme, outline, color) => {
    if (outline) {
        return `
            border: 1px solid ${color};
            border-bottom: ${({ showShadow }) => showShadow ? `none` : ``};
            background-color: ${theme.colors.none};
            color: ${color};
            &:hover {
                background-color: ${color};
                color: ${theme.colors.white};
            }
    `;
    } else {
        return `
            background-color: ${color};
            color: ${theme.colors.white};
            &:hover {
                opacity: 0.9;
            }
    `;
    }
};

const SizeButton = (size, theme) => {
    switch (size) {
        case 'xg':
            return `
                padding: ${theme.spacing.lg} ${theme.spacing.xg};
            `
        case 'lg':
            return `
                padding: ${theme.spacing.md} ${theme.spacing.xlg};
            `
        case 'md':
            return `
                padding: ${theme.spacing.sm} ${theme.spacing.lg};
            `
        case 'sm':
            return `
                padding: ${theme.spacing.xsm} ${theme.spacing.md};
            `
        case 'xs':
            return `
                padding: ${theme.spacing.xs} ${theme.spacing.sm};
            `
        default:
            return `
                padding: ${theme.spacing.sm} ${theme.spacing.lg};'
        `
    }
}

const ButtonStyle = styled('button')`
${({ theme, block, rounded, size, outline, color, showShadow }) =>`
    text-align: center;
    outline: none;
    border: none;
    line-height: 1;
    transition: all 0.3s;
    margin-right: ${theme.spacing.md};
    white-space: nowrap;
    width: ${block ? theme.spacing.full : 'initial'};
    border-radius: ${theme.rounded[rounded]};
    font-size: ${theme.fontSize[size]};
    font-family: ${theme.fontFamily.default};
    ${OutlineButton(theme, outline, theme.colors[color])};
    ${SizeButton(size, theme)};
    position: relative;
    top: 0;
    transition: all 0.2s;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    &:active {
        top: ${showShadow ? `5px` : '0'};
        box-shadow: 0 0 0 ${theme.colors.active[color]};
    }
    &:last-child {
        margin-right: ${theme.spacing.none};
    }
    & > span {
        // display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ${color === "white"
        ?
        `
        color: ${theme.colors.greyMidlight};
        `
        :
        ``
    }
`}`

const SpanStyled = styled('span')`
${({ theme, fontColor }) => `
    ${fontColor && `color: ${theme.colors[fontColor]}`};
`}`

const Button = ({ children, type, fontColor, color, outline, size, rounded, block, disabled, onClick, showShadow, innerRef }) => (
    <ThemeProvider theme={theme}>
        <ButtonStyle
            type={type}
            color={color}
            outline={outline}
            size={size}
            rounded={rounded}
            block={block}
            onClick={onClick}
            disabled={disabled}
            showShadow={showShadow}
            ref={innerRef}
            id="button"
        >
            <SpanStyled fontColor={fontColor}>
                {children}
            </SpanStyled>
        </ButtonStyle>
    </ThemeProvider>
)

Button.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.string,
    rounded: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    showShadow: PropTypes.bool
}

Button.defaultProps = {
    type: 'button',
    color: 'default',
    outline: false,
    size: 'md',
    rounded: 'lg',
    block: false,
    disabled: false,
    onClick: () => {},
    showShadow: false
}

export default Button;