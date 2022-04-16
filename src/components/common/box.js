import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = ({ backgroundColor, children, debug, style, ...rest }) => {
    const mergedStyles = [
        {
            backgroundColor,
        },
        style,
    ];

    const clean = mergedStyles.filter((item) => {
        return item !== false;
    });

    const final = clean.reduce(function (result, current) {
        return Object.assign(result, current);
    }, {});

    return (
        <View style={final} {...rest}>
            {children}
        </View>
    );
};

Box.defaultProps = {
    debug: false,
};

Box.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    debug: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]),
};

const View = styled.div``;

export default Box;
