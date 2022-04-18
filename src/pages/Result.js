import React, { useEffect, useState } from 'react';

// components
import { StyledText } from '../components/common/basic';
import { Box } from '../components/common/';

// hooks
import useCourse from '../hooks/';

// lib
import { setTime } from '../lib/timer';

function Result() {
    const { questions, startTime, timeCompleted, courseScore } = useCourse();

    const [timeSpent, setTimeSpent] = useState('00:00');

    useEffect(() => {
        const time = setTime(startTime, timeCompleted);

        setTimeSpent(time);
    }, []);

    return (
        <Box
            padding={0}
            style={{
                height: '100vh',
                width: '100vw',
            }}
        >
            <Box
                backgroundColor={'#F6F6F6'}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
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
                <Box
                    padding={1}
                    width={180}
                    height={1}
                    backgroundColor={'white'}
                />
            </Box>
            <Box backgroundColor={'#2D3E50'} style={{ flex: 2 }}></Box>
        </Box>
    );
}

export default Result;
