import React from 'react';

// components
import { Box } from '../common';
import { StyledText } from '../common/basic';

// hooks
import useCourse from '../../hooks';

// lib
import { htmlToText } from '../../lib/string';

const QuestionPane = () => {
    const { questions, currentQuestion } = useCourse();

    const { text } = questions[currentQuestion];

    const pure = htmlToText(text);
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
