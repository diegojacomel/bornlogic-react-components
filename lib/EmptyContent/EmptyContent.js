// Modules
import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const NoContent = styled('div')`
${({ theme }) => `
    color: ${theme.colors.grey2};
    margin-top: ${theme.spacing.px25};
`}`

const StrongParagraph = styled('strong')``

const EmptyContent = ({ title, message }) => {
    return (
        <NoContent>
            {title ? 
                <StrongParagraph>
                    { title }
                </StrongParagraph>
            : null }
            { message }
        </NoContent>
    )
}

EmptyContent.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
}

EmptyContent.defaultProps = {
    title: "",
    message: ""
}

export default EmptyContent;