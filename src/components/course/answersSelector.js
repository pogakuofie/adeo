import React, { useState } from 'react';

// components
import { AnswerCard } from './';
import { Box } from '../common/';

// hooks
import useCourse from '../../hooks';

const AnswerSelector = () => {
    const { questions, currentQuestion } = useCourse();

    const [selectedAnswer, setSelectedAnswer] = useState(-1);

    return (
        <Box style={{ flex: 1, flexDirection: 'column' }}>
            {questions[currentQuestion].answers.map((item, index) => {
                const { text, id } = item;

                return (
                    <AnswerCard
                        selected={selectedAnswer === id}
                        key={id}
                        id={id}
                        option={text}
                        onClick={(id) => {
                            setSelectedAnswer(id);
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default AnswerSelector;
