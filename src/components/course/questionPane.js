import React from 'react';

// components
import { Box } from '../common';
import { StyledText } from '../common/basic';

const QuestionPane = ({ question }) => {
    const { text } = question || {};

    const pure = text?.replace(/<[^>]+>/g, '');

    return (
        <Box
            backgroundColor={'#222E3B'}
            style={{
                height: 80,
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
            }}
        >
            <StyledText color="white">{pure}</StyledText>
        </Box>
    );
};

export default QuestionPane;
