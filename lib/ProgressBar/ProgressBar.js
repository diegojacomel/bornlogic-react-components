// Modules
import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';

const ProgressWrapper = styled('section')``

const ProgressBar = ({ percentage, color }) => (
    <ProgressWrapper>
        <Line percent={percentage} strokeWidth="3" trailWidth="3" strokeColor={color ? color : "#187db5"} />
    </ProgressWrapper>
)

ProgressBar.propTypes = {
    percentage: PropTypes.number
}

ProgressBar.defaultProps = {
    percentage: 0
}

export default ProgressBar;