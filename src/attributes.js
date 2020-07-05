import React from 'react';
import PropTypes from 'prop-types';

const Attributes = ({ attributes, theme }) => {
    let attributeList = [];
    const overflow = theme.overflowBreak ? { overflowWrap: 'break-word', whiteSpace: 'normal' } : {} 

    for (const key in attributes) {
        attributeList.push(
            <span key={`attr-${key}[${attributes[key]}]`}>
                <span style={{ color: theme.attributeKeyColor }}>{` ${key}`}</span>
                <span style={{ color: theme.separatorColor }}>{"="}</span>
                <span style={{ color: theme.attributeValueColor }}>{`"${attributes[key]}"`}</span>
            </span>
        );
    }

    return (
        <span style={overflow}>{attributeList}</span>
    );
}

Attributes.propTypes = {
    attributes: PropTypes.object,
    theme: PropTypes.object.isRequired,
};


export default Attributes;