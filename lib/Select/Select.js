// Modules
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

// Styles
import { theme } from '../theme';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SelectWrapper = styled('div')`
${({ theme, withoutBorder, withBorder }) =>`
    border: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
    min-width: 180px;
    border-radius: ${theme.rounded.px10};
    ${
        (withoutBorder && 'border: none;') || 
            (withBorder && `border: 1px solid ${theme.colors.grey5}; width: ${theme.spacing.full};`) || 
                `border-bottom: 1px solid ${theme.colors.grey5}; width: ${theme.spacing.full}; `
    }
    
`}`

const SelectStyled = styled('select')`
${({ theme, disabled, size }) =>`
    width: ${theme.spacing.full};
    
    background: none;
    outline: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    z-index: 1;
    height: auto;
    font-size: ${theme.fontSize.px16};
    padding: 10px 40px 10px 12px;
    ${size === "px14"
        ?
        `
        font-size: ${theme.fontSize.px14};
        padding: 5px 30px 5px 10px;
        `
        :
        ``
    }
    + svg {
        width: ${theme.spacing.px25};
        height: ${theme.spacing.px25};    
        right: ${theme.spacing.px10};
        top: ${theme.spacing.px5};
        fill: ${theme.colors.grey5};
        position: absolute;
        z-index: 0;
        ${size === "px14"
            ?
            `
            width: ${theme.spacing.px15};
            height: ${theme.spacing.px15};
            top: ${theme.spacing.px5};
            `
            :
            ``
        }
    }
    ${
        disabled ? 'cursor: not-allowed;'
        : 'cursor: pointer;'
    }
`}`

const Select = ({ onChange, selectValue, children, withoutBorder, withBorder, disabled, size, defaultValue }, props) => (
    <ThemeProvider theme={theme}>
        <SelectWrapper withoutBorder={withoutBorder} withBorder={withBorder} {...props}>
            <SelectStyled size={size} onChange={onChange} value={selectValue} defaultValue={defaultValue} disabled={disabled}>
                { children }
            </SelectStyled>
            <FontAwesomeIcon icon={faChevronDown} />
        </SelectWrapper>
    </ThemeProvider>
)

Select.propTypes = {
    disabled: PropTypes.bool    
}

Select.defaultProps = {
    disabled: false
}

export default Select;