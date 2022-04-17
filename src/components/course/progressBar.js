import React from 'react';

// components
import { Box } from '../common/';
import { StyledText } from '../common/basic';

// theme
import { primaryColor } from '../../theme/';

const ProgressBar = ({ stages, stage }) => {
    return (
        <Box
            backgroundColor={primaryColor}
            style={{ height: 80, display: 'flex', width: '100vw' }}
        >
            {stages.map((item, index) => {
                const { id } = item;
                return (
                    <Box
                        key={id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Box padding={0}>
                            <StyledText color="white" align={'center'}>
                                {index + 1}
                            </StyledText>
                        </Box>
                        {stage === index && (
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
    );
};

export default ProgressBar;
