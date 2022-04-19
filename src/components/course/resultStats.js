import React, { useEffect, useState } from 'react';

// components
import { Box } from '../common';
import { StyledText } from '../common/basic';

// hooks
import useCourse from '../../hooks';

// lib
import { setTime } from '../../lib/timer';

const Result = () => {
    const { questions, startTime, timeCompleted, courseScore } = useCourse();

    const [timeSpent, setTimeSpent] = useState('00:00');

    useEffect(() => {
        const time = setTime(startTime, timeCompleted);

        setTimeSpent(time);
    }, []);

    return (
        <Box padding={1}>
            <Box style={{ flexDirection: 'column' }}>
                <StyledText
                    align={'center'}
                    color="#707070"
                    size={24}
                    weight={600}
                >
                    {`${courseScore}%`}
                </StyledText>
                <StyledText
                    align={'center'}
                    color="#707070"
                    size={12}
                    weight={200}
                >
                    Score
                </StyledText>
            </Box>
            <Box style={{ flexDirection: 'column' }}>
                <StyledText
                    align={'center'}
                    color="#707070"
                    size={24}
                    weight={600}
                >
                    {timeSpent}
                </StyledText>
                <StyledText
                    align={'center'}
                    color="#707070"
                    size={12}
                    weight={200}
                >
                    Time Taken
                </StyledText>
            </Box>
            <Box style={{ flexDirection: 'column' }}>
                <StyledText
                    align={'center'}
                    color="#707070"
                    size={24}
                    weight={600}
                >
                    {questions.length}
                </StyledText>
                <StyledText
                    align={'center'}
                    color="#707070"
                    size={12}
                    weight={200}
                >
                    Questions
                </StyledText>
            </Box>
        </Box>
    );
};

export default Result;
