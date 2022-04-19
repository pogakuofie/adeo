import React from 'react';
import { Button, StyledText } from '../components/common/basic';
import ProgressBar from '../components/course/progressBar';
import { Box } from '../components/common';
import { QuestionPane } from '../components/course/';
import { useNavigate } from 'react-router-dom';
import { primaryColor } from '../theme';
import AnswerSelector from '../components/course/answersSelector';

// hooks
import useCourse from '../hooks';

function Course() {
    const {
        questions,
        currentQuestion,
        setCurrentQuestion,
        saveAnswer,
        selectedAnswer,
    } = useCourse();

    const navigate = useNavigate();

    return (
        <Box
            padding={0}
            style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        >
            <ProgressBar />
            <QuestionPane />
            <Box backgroundColor={'#C9C9C9'}>
                <StyledText color="white" align="center">
                    Choose the right answer to the question above
                </StyledText>
            </Box>
            <Box
                padding={0}
                style={{
                    flex: 1,
                }}
            >
                <Box backgroundColor={'#222E3B'} style={{ flex: 1 }}></Box>
                <Box
                    backgroundColor={'#2D3E50'}
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}
                >
                    <AnswerSelector />
                    <Box>
                        <Button
                            radius={5}
                            backgroundColor={primaryColor}
                            borderColor={primaryColor}
                            margin={8}
                            disabled={currentQuestion === 0}
                            color={'white'}
                            onClick={() => {
                                if (currentQuestion > 0)
                                    setCurrentQuestion(currentQuestion - 1);
                            }}
                        >
                            <StyledText>Previous</StyledText>
                        </Button>
                        <Button
                            radius={5}
                            backgroundColor={primaryColor}
                            borderColor={primaryColor}
                            margin={8}
                            disabled={selectedAnswer === -1}
                            color={'white'}
                            onClick={() => {
                                if (selectedAnswer === -1) {
                                    return;
                                }

                                saveAnswer(navigate);
                            }}
                        >
                            <StyledText>
                                {currentQuestion === questions.length - 1
                                    ? 'Submit'
                                    : 'Next'}
                            </StyledText>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Course;
