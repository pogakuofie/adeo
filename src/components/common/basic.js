import styled from 'styled-components';

const StyledText = styled.p`
    font-size: ${({ size }) => `${size}px`};
    align-self: center;
    text-align: ${({ align }) => align};
    line-height: ${({ height }) => `${height}px`};
    color: ${({ color }) => color};
    margin: ${({ margin }) => `${margin}px`};
    /* font-family: "Roboto Mono", monospace; */
    font-family: 'MTNBold';
    font-weight: ${({ fontFamily }) => fontFamily};
    letter-spacing: 0.5px;
`;

export { StyledText };
