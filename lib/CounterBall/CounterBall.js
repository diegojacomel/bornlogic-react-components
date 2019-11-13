// Modules
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

const CounterBallWrapper = styled('div')`
${({ theme, moreThanTen, alignTop, backgroundColor, fontColor }) => `
    display: inline-flex;
    position: relative;
    span {
        font-size: ${theme.fontSize.px11};
        color: ${fontColor ? theme.colors[fontColor] : theme.colors.white};
        background: ${backgroundColor ? theme.colors[backgroundColor] : theme.colors.grey3};
        border-radius: 10px;
        padding: 2px 6px 3px;
        margin: 0 1px;
    }
    span:nth-child(2) {
        background: #187db5;
    }
    ${alignTop ?
        `
            top: -13px;
        ` : ``
    }
    ${moreThanTen ?
        `span:nth-child(1) {
            padding: 2px 4px 3px;
        }` : ``
    }
`}`

const CounterBall = ({ backgroundColor, fontColor, counter, alignTop }) => (
    <ThemeProvider theme={theme}>
        <CounterBallWrapper moreThanTen={counter > 10} backgroundColor={backgroundColor} fontColor={fontColor} alignTop={alignTop}>
            <span>{counter}</span>
        </CounterBallWrapper>
    </ThemeProvider>
);

CounterBall.propTypes = {
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    counter: PropTypes.number,
    alignTop: PropTypes.bool,
}

CounterBall.defaultProps = {
    backgroundColor: '',
    fontColor: '',
    counter: 0,
    alignTop: false,
}

export default CounterBall;