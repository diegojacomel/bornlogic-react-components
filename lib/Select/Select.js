// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const SelectWrapper = styled('div')`
${({ theme, withoutBorder, withBorder }) =>`
    border: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
    min-width: 180px;
    border-radius: ${theme.rounded.lg};
    ${
        (withoutBorder && 'border: none;') || 
            (withBorder && `border: 1px solid ${theme.colors.greyBorder}; width: ${theme.spacing.full};`) || 
                `border-bottom: 1px solid ${theme.colors.greyBorder}; width: ${theme.spacing.full}; `
    }
    
`}`

const SelectStyled = styled('select')`
${({ theme, disabled, size }) =>`
    width: ${theme.spacing.full};
    font-family: ${theme.fontFamily.default};
    background: none;
    outline: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    z-index: 1;
    height: auto;
    font-size: ${theme.fontSize.md};
    padding: 10px 40px 10px 12px;
    ${size === "sm"
        ?
        `
        font-size: ${theme.fontSize.sm};
        padding: 5px 30px 5px 10px;
        `
        :
        ``
    }
    + svg {
        width: ${theme.spacing.xlg};
        height: ${theme.spacing.xlg};    
        right: ${theme.spacing.sm};
        top: ${theme.spacing.xs};
        fill: ${theme.colors.greyBorder};
        position: absolute;
        z-index: 0;
        ${size === "sm"
            ?
            `
            width: ${theme.spacing.md};
            height: ${theme.spacing.md};
            top: ${theme.spacing.xs};
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

const Select = ({ onChange, selectValue, children, withoutBorder, withBorder, disabled, size, defaultValue, props }) => (
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