// Modules
import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const LabelStyled = styled('label')`
${({ theme }) => `
    display: block;
    width: ${theme.spacing.full};
    margin-bottom: ${theme.spacing.px5};
    font-size: ${theme.fontSize.px12};
    color: ${theme.colors.grey4};
`}`

const Label = ({ children }) => (
    <LabelStyled>
        {children}
    </LabelStyled>
)

Label.propTypes = {
    children: PropTypes.node
}

export default Label;