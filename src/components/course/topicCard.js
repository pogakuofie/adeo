import React from 'react';
import { Box } from '../common';
import { StyledText } from '../common/basic';

const TopicCard = ({ topic, backgroundColor = 'white', color }) => {
    return (
        <Box
            height={20}
            width={280}
            backgroundColor={backgroundColor}
            margin={5}
            style={{ justifyContent: 'space-between' }}
        >
            <Box
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                padding={0}
            >
                <StyledText color={color} align={'left'} weight={400} size={18}>
                    {topic}
                </StyledText>
                <StyledText
                    align={'start'}
                    color={color ? color : '#BEBEBE'}
                    weight={200}
                    size={11}
                >
                    Good Performance
                </StyledText>
            </Box>
            <StyledText
                color={color ? color : '#2A9CEA'}
                weight={400}
                size={18}
            >
                8/10
            </StyledText>
        </Box>
    );
};

export default TopicCard;
