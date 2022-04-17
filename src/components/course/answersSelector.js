import React, { useState } from 'react';

// components
import { AnswerCard } from './';
import { Box } from '../common/';

const AnswerSelector = ({ answers }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(-1);

    return (
        <Box style={{ flex: 1, flexDirection: 'column' }}>
            {answers?.map((item, index) => {
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
