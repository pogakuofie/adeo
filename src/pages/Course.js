import React, { useEffect, useState } from 'react';
import { Button, StyledText } from '../components/common/basic';
import axios from 'axios';
import ProgressBar from '../components/course/progressBar';
import { Box } from '../components/common';
import { QuestionPane } from '../components/course/';
import { useNavigate } from 'react-router-dom';
import { primaryColor } from '../theme';
import AnswerSelector from '../components/course/answersSelector';
import { htmlToText } from '../lib/string';

function Course() {
    const [questions, setQuestions] = useState([]);

    const [stage, setStage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getAdeoData();
    }, []);

    const getAdeoData = async () => {
        try {
            const { data: response } = await axios.get(
                'https://adeo.app/api/questions/get?level_id=1&course_id=1&limit=30',
            );

            const { data } = response;

            const temp = data.filter((item, index) => {
                const { text } = item;

                var question = htmlToText(text);

                return question !== '';
            });

            setQuestions(temp.slice(0, 20));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box
            padding={0}
            style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        >
            <ProgressBar stages={questions} stage={stage} />
            <QuestionPane question={questions[stage]} />
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
                    <AnswerSelector answers={questions[stage]?.answers} />
                    <Box>
                        <Button
                            radius={5}
                            backgroundColor={primaryColor}
                            borderColor={primaryColor}
                            margin={8}
                            onClick={() => {
                                if (stage > 0) setStage(stage - 1);
                            }}
                        >
                            <StyledText color="white">Previous</StyledText>
                        </Button>
                        <Button
                            radius={5}
                            backgroundColor={primaryColor}
                            borderColor={primaryColor}
                            margin={8}
                            onClick={() => {
                                if (stage < questions.length - 1) {
                                    setStage(stage + 1);
                                } else {
                                    navigate('/result');
                                }
                            }}
                        >
                            <StyledText color="white">Next</StyledText>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Course;
