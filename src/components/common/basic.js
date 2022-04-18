import styled from 'styled-components';

const StyledText = styled.p`
    font-size: ${({ size }) => `${size}px`};
    align-self: center;
    text-align: ${({ align }) => align};
    line-height: ${({ height }) => `${height}px`};
    color: ${({ color }) => color};
    margin: ${({ margin }) => `${margin}px`};
    font-family: 'Akshar', sans-serif;
    font-weight: ${({ weight }) => weight};
    letter-spacing: 0.5px;
    pointer: ${({ pointer = 'default' }) => pointer};
`;

const Button = styled.div`
    display: flex;
    justify-content: ${({ alignContent = 'center' }) => alignContent};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    align-self: ${({ alignSelf = 'center' }) => alignSelf};
    cursor: ${({ cursor = 'pointer', disabled }) => {
        if (!disabled) {
            return cursor;
        } else {
            return 'not-allowed';
        }
    }};
    background-color: ${({ backgroundColor, disabled }) => {
        if (!disabled) {
            return backgroundColor;
        } else {
            return '#F2F2F2';
        }
    }};
    color: ${({ color, disabled }) => {
        if (!disabled) {
            return color;
        } else {
            return '#C9C9C9';
        }
    }};
    border-radius: ${({ radius = 30 }) => `${radius}px`};
    margin: ${({ margin = 0 }) => `${margin}px`};
    border-width: ${({ borderWidth = 2 }) => `${borderWidth}px`};
    border-color: ${({ borderColor = 'white', disabled }) => {
        if (!disabled) {
            return borderColor;
        } else {
            return '#C9C9C9';
        }
    }};
    border-style: ${({ borderStyle = 'solid' }) => borderStyle};
    height: ${({ height = 30 }) => `${height}px`};
    width: ${({ width = 150 }) => `${width}px`};
`;

export { StyledText, Button };
