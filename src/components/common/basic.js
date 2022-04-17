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
    cursor: ${({ cursor = 'pointer' }) => cursor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    border-radius: ${({ radius = 30 }) => `${radius}px`};
    margin: ${({ margin = 0 }) => `${margin}px`};
    border-width: ${({ borderWidth = 2 }) => `${borderWidth}px`};
    border-color: ${({ borderColor = 'white' }) => borderColor};
    border-style: ${({ borderStyle = 'solid' }) => borderStyle};
    height: ${({ height = 30 }) => `${height}px`};
    width: ${({ width = 150 }) => `${width}px`};
`;

export { StyledText, Button };
