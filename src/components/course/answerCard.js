import React from 'react';

// containers
import { Box } from '../common/';
import { StyledText } from '../common/basic';

// lib
import { htmlToText } from '../../lib/string';

// theme
import { primaryColor } from '../../theme';

const AnswerCard = ({ option, selected, onClick, id }) => {
    const plain = htmlToText(option);

    return (
        <Box
            cursor={'pointer'}
            onClick={() => {
                onClick(id);
            }}
        >
            <StyledText
                cursor={'pointer'}
                color={selected ? primaryColor : 'white'}
                size={22}
            >
                {`${plain?.substr(0, 1).toUpperCase()}${plain?.substr(1)}`}
            </StyledText>
        </Box>
    );
};

export default AnswerCard;
