import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = ({
    backgroundColor,
    children,
    debug,
    padding,
    width,
    height,
    style,
    justifyContent,
    cursor,
    margin,
    ...rest
}) => {
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
        <View
            height={height}
            width={width}
            padding={padding}
            justifyContent={justifyContent}
            style={final}
            margin={margin}
            cursor={cursor}
            {...rest}
        >
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

const View = styled.div`
    display: flex;
    justify-content: ${({ justifyContent = 'center' }) => justifyContent};
    padding: ${({ padding = 16 }) => `${padding}px`};
    height: ${({ height }) => `${height}px`};
    width: ${({ width }) => `${width}px`};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    margin: ${({ margin }) => `${margin}px`};
    cursor: ${({ cursor = 'default' }) => cursor};
`;

export default Box;
