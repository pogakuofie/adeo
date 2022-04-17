import React, { useEffect, useState } from 'react';

// components
import { Box } from '../common/';
import { StyledText } from '../common/basic';

// hooks
import useCourse from '../../hooks';

// theme
import { primaryColor } from '../../theme/';

// lib
import { setTime } from '../../lib/timer';

const ProgressBar = () => {
    const { questions, currentQuestion } = useCourse();

    const [startTime] = useState(Date.now());
    const [timeSpent, setTimeSpent] = useState('00:00');

    useEffect(() => {
        getTime();
    }, []);

    const getTime = () => {
        setTimeout(() => {
            const time = setTime(startTime);

            setTimeSpent(time);

            getTime();
        }, 1000);
    };

    return (
        <Box
            justifyContent={'space-between'}
            backgroundColor={primaryColor}
            style={{ height: 80 }}
        >
            <Box padding={0}>
                {questions.map((item, index) => {
                    const { id } = item;
                    return (
                        <Box
                            key={id}
                            style={{
                                flexDirection: 'column',
                            }}
                        >
                            <Box padding={0}>
                                <StyledText color="white" align={'center'}>
                                    {index + 1}
                                </StyledText>
                            </Box>
                            {currentQuestion === index && (
                                <Box
                                    padding={0}
                                    width={30}
                                    height={5}
                                    borderRadius={3}
                                    margin={3}
                                    style={{ backgroundColor: 'white' }}
                                />
                            )}
                        </Box>
                    );
                })}
            </Box>
            <Box
                borderRadius={500}
                backgroundColor={'white'}
                style={{ marginTop: -40, marginRight: -5 }}
            >
                <StyledText
                    style={{ marginRight: 15 }}
                    size={34}
                    color={primaryColor}
                >
                    {timeSpent}
                </StyledText>
            </Box>
        </Box>
    );
};

export default ProgressBar;
